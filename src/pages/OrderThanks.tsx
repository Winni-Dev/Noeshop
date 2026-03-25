import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, MessageCircle, ShoppingBag } from 'lucide-react';
import { trackOrderConfirmed, trackWhatsAppRedirect } from '../utils/metaPixel';

type PendingWhatsappOrder = {
  orderId: string;
  messageText: string;
  value: number;
  currency: string;
  contentIds: string[];
  contentName?: string;
  source: 'cart' | 'product_detail';
  paymentMethod?: string;
  location?: string;
  phoneDestination?: string;
  metaTracked?: boolean;
};

const SESSION_KEY = 'pending_whatsapp_order';

function getPendingOrderFromSession(orderId: string | null): PendingWhatsappOrder | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PendingWhatsappOrder;
    if (!parsed?.orderId) return null;
    if (orderId && parsed.orderId !== orderId) return null;
    return parsed;
  } catch {
    return null;
  }
}

function buildWhatsAppUrl(message: string) {
  const phone = '2250712681195'; // Format attendu par wa.me (sans +)
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

const OrderThanks: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [pending, setPending] = useState<PendingWhatsappOrder | null>(null);
  const whatsappUrl = useMemo(() => (pending ? buildWhatsAppUrl(pending.messageText) : ''), [pending]);

  useEffect(() => {
    const p = getPendingOrderFromSession(orderId);
    setPending(p);

    // Option sécurité : si le pixel n'a pas encore été déclenché (cas rare),
    // on le déclenche ici au chargement de la page de confirmation.
    if (p && !p.metaTracked) {
      trackOrderConfirmed({
        orderId: p.orderId,
        value: p.value,
        currency: p.currency,
        contentIds: p.contentIds,
        contentName: p.contentName,
        source: p.source,
        paymentMethod: p.paymentMethod,
        location: p.location,
      });
      trackWhatsAppRedirect(p.orderId, p.phoneDestination);

      // Marque comme "tracé" pour éviter un double event.
      try {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({ ...p, metaTracked: true }));
      } catch {
        // ignore
      }
    }
  }, [orderId, trackOrderConfirmed, trackWhatsAppRedirect]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white px-4 pt-24 pb-16">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
            <CheckCircle className="text-green-600" size={38} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Merci pour votre achat</h1>
          <p className="text-sm text-gray-600 mb-6">
            Votre commande a bien été envoyée. Nous vous contactons tout de suite sur WhatsApp.
          </p>

          <div className="space-y-3">
            {pending?.orderId ? (
              <div className="text-xs text-gray-500">
                Référence : <span className="font-mono">{pending.orderId}</span>
              </div>
            ) : null}

            <a
              href={whatsappUrl || undefined}
              target="_blank"
              rel="noreferrer"
              className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all ${
                whatsappUrl
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              aria-disabled={!whatsappUrl}
            >
              <MessageCircle size={16} />
              Ouvrir WhatsApp
            </a>

            <button
              onClick={() => navigate('/')}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3 border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all"
            >
              <ShoppingBag size={16} />
              Continuer mes achats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderThanks;


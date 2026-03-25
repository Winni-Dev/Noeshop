export type PixelOrderData = {
  orderId: string;
  value: number;
  currency: string;
  contentIds: string[];
  contentName?: string;
  source: 'cart' | 'product_detail';
  paymentMethod?: string;
  location?: string;
};

function getFbq(): ((...args: any[]) => void) | undefined {
  const w = window as any;
  return typeof w.fbq === 'function' ? w.fbq : undefined;
}

export function trackOrderConfirmed(data: PixelOrderData) {
  const fbq = getFbq();
  if (!fbq) return;

  // Event standard Meta Pixel : "Purchase"
  fbq('track', 'Purchase', {
    value: data.value,
    currency: data.currency,
    content_ids: data.contentIds,
    content_name: data.contentName,
    content_type: 'product',
    order_id: data.orderId,
    source: data.source,
    payment_method: data.paymentMethod,
    location: data.location,
  });

  // Event custom : trace explicitement l'ordre validé côté frontend
  fbq('trackCustom', 'OrderConfirmed', {
    order_id: data.orderId,
    source: data.source,
  });
}

export function trackWhatsAppRedirect(orderId: string, destinationPhone?: string) {
  const fbq = getFbq();
  if (!fbq) return;

  fbq('trackCustom', 'WhatsAppRedirected', {
    order_id: orderId,
    destination_phone: destinationPhone,
  });
}


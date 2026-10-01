import { BookingPayload } from './firestoreBookingService';

export interface EmailNotificationResponse {
  success: boolean;
  mocked?: boolean;
  message?: string;
  results?: {
    adminEmail?: { recipient: string; sent: boolean; error?: string };
    customerEmail?: { recipient: string; sent: boolean; error?: string };
  };
  error?: string;
}

/**
 * Triggers automated email notification via Hostinger SMTP Node.js backend
 * Sends email to wisatabromo.co@gmail.com and customer email
 */
export const triggerBookingEmailNotification = async (
  booking: BookingPayload & { createdAt?: string; status?: string }
): Promise<EmailNotificationResponse> => {
  try {
    const response = await fetch('/api/send-booking-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    });

    if (!response.ok) {
      const errorJson = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorJson.error || `Server HTTP ${response.status} saat mengirim email`,
      };
    }

    const data: EmailNotificationResponse = await response.json();
    return data;
  } catch (error: any) {
    console.warn('Gagal memanggil endpoint notifikasi email:', error);
    return {
      success: false,
      error: error.message || 'Gagal menghubungi server email',
    };
  }
};

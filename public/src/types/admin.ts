/**
 * Types definition for WisataBromo.co Admin Panel
 */

export interface AdminUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
  role: 'super_admin' | 'admin';
  lastLogin?: string;
}

export interface DashboardStats {
  totalBookings: number;
  waitingDpCount: number;
  dpSubmittedCount: number;
  verifiedCount: number;
  cancelledCount: number;
  totalRevenueEstimate: number;
  totalDpCollected: number;
  recentBookings: Array<any>;
}

export interface InboxEmailItem {
  id: string;
  from: string;
  fromName?: string;
  to: string;
  subject: string;
  date: string;
  preview: string;
  bodyText?: string;
  bodyHtml?: string;
  hasAttachments?: boolean;
  isRead?: boolean;
}

export interface SentEmailItem {
  id: string;
  recipient: string;
  recipientType: 'admin' | 'customer';
  bookingCode?: string;
  customerName?: string;
  subject: string;
  sentAt: string;
  status: 'SENT' | 'FAILED' | 'SIMULATED';
  messageId?: string;
  error?: string;
  previewHtml?: string;
}

export interface WebsiteContentConfig {
  hero: {
    badge: string;
    headline: string;
    highlightWord: string;
    subheadline: string;
    trustedCounter: string;
    announcementText?: string;
    announcementActive?: boolean;
  };
  contact: {
    whatsappHotline: string;
    csEmail: string;
    officeAddressMalang: string;
    officeAddressSukapura: string;
    operatingHours: string;
    bcaAccountNumber: string;
    bcaAccountHolder: string;
  };
  customPackages?: Array<{
    id: string;
    title: string;
    subtitle: string;
    price: number;
    priceWithDoc?: number;
    priceUnit: string;
    badge?: string;
    highlights: string[];
    inclusions: string[];
    exclusions: string[];
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  importantNotice?: {
    active: boolean;
    title: string;
    content: string;
    level: 'info' | 'warning' | 'alert';
  };
  updatedAt?: string;
  updatedBy?: string;
}

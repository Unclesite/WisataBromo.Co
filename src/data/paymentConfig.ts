/**
 * Official Payment Configuration for WisataBromo.co
 * Shared between Jeep Booking and Picnic Experience
 * PT Global Travel Healing
 */

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  type: 'bank' | 'ewallet';
  badge?: string;
}

export const OFFICIAL_PAYMENT_ACCOUNTS: BankAccount[] = [
  {
    id: 'bca',
    bankName: 'BANK BCA',
    accountNumber: '5200888415',
    accountHolder: 'PT Global Travel Healing',
    type: 'bank',
    badge: 'Rekening Resmi Perusahaan'
  },
  {
    id: 'ewallet',
    bankName: 'DANA & OVO',
    accountNumber: '08113212318',
    accountHolder: 'Achmad J',
    type: 'ewallet',
    badge: 'E-Wallet Konfirmasi Cepat'
  }
];

export const PAYMENT_METHODS = [
  { id: 'bca', name: 'Transfer Bank BCA (Otomatis & Terverifikasi)', accountId: 'bca' },
  { id: 'mandiri', name: 'Transfer Bank Mandiri', accountId: 'bca' },
  { id: 'bni', name: 'Transfer Bank BNI', accountId: 'bca' },
  { id: 'bri', name: 'Transfer Bank BRI', accountId: 'bca' },
  { id: 'ewallet', name: 'E-Wallet (DANA / OVO / GoPay)', accountId: 'ewallet' },
];

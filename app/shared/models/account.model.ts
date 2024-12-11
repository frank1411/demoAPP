export interface Account {
  accountNumber: string;
  balance: number;
  currency: string;
  accountType: string;
}

export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  description: string;
  type: 'credit' | 'debit';
}
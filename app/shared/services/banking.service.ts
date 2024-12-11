import { Observable } from '@nativescript/core';
import { Account, Transaction } from '../models/account.model';

export class BankingService extends Observable {
  // Simulación de datos de cuenta
  private mockAccount: Account = {
    accountNumber: '****1234',
    balance: 1500.00,
    currency: 'USD',
    accountType: 'Savings'
  };

  private mockTransactions: Transaction[] = [
    {
      id: '1',
      date: new Date(),
      amount: 100.00,
      description: 'Depósito ATM',
      type: 'credit'
    },
    {
      id: '2',
      date: new Date(),
      amount: 50.00,
      description: 'Compra Supermercado',
      type: 'debit'
    }
  ];

  async getAccountBalance(): Promise<Account> {
    // Aquí iría la lógica real de consulta al servidor
    return Promise.resolve(this.mockAccount);
  }

  async getTransactions(): Promise<Transaction[]> {
    // Aquí iría la lógica real de consulta al servidor
    return Promise.resolve(this.mockTransactions);
  }
}
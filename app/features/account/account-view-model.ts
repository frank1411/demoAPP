import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';
import { formatDate } from '~/shared/formatters/date.formatter';
import { formatCurrency } from '~/shared/formatters/currency.formatter';
import { Account, Transaction } from '~/shared/models/account.model';

export class AccountViewModel extends Observable {
    private _account: Account;
    private _transactions: Transaction[];

    constructor() {
        super();
        this.initializeData();
    }

    private initializeData(): void {
        // Datos de ejemplo
        this._account = {
            accountNumber: '****1234',
            balance: 1500.00,
            currency: 'USD',
            accountType: 'Savings'
        };

        this._transactions = [
            {
                id: '1',
                date: new Date(),
                amount: 100.00,
                description: 'Depósito ATM',
                type: 'credit'
            },
            {
                id: '2',
                date: new Date(Date.now() - 86400000), // Ayer
                amount: 50.00,
                description: 'Compra Supermercado',
                type: 'debit'
            },
            {
                id: '3',
                date: new Date(Date.now() - 172800000), // Hace 2 días
                amount: 200.00,
                description: 'Transferencia recibida',
                type: 'credit'
            }
        ];

        this.notifyPropertyChange('account', this._account);
        this.notifyPropertyChange('transactions', this._transactions);
    }

    get account(): Account {
        return this._account;
    }

    get transactions(): Transaction[] {
        return this._transactions;
    }

    get formattedBalance(): string {
        return formatCurrency(this._account?.balance || 0);
    }

    formatTransactionDate(date: Date): string {
        return formatDate(date);
    }

    formatTransactionAmount(amount: number, type: 'credit' | 'debit'): string {
        const formattedAmount = formatCurrency(Math.abs(amount));
        return type === 'credit' ? `+${formattedAmount}` : `-${formattedAmount}`;
    }

    onLogout(): void {
        const topmost = Frame.topmost();
        if (topmost) {
            topmost.navigate({
                moduleName: "features/login/login-page",
                clearHistory: true,
                animated: true,
                transition: {
                    name: "fade",
                    duration: 200
                }
            });
        }
    }
}
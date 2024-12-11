import { SecureStorage } from '@nativescript/secure-storage';
import { Observable } from '@nativescript/core';

export class AuthService extends Observable {
  private secureStorage: SecureStorage;
  private _isLoggedIn: boolean = false;

  constructor() {
    super();
    this.secureStorage = new SecureStorage();
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
      // Aquí iría la lógica real de autenticación con el servidor
      // Por ahora simulamos una autenticación básica
      if (username === 'demo' && password === 'demo123') {
        await this.secureStorage.set('token', 'demo-token');
        this._isLoggedIn = true;
        this.notifyPropertyChange('isLoggedIn', true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error en login:', error);
      return false;
    }
  }

  async logout(): Promise<void> {
    try {
      await this.secureStorage.remove('token');
      this._isLoggedIn = false;
      this.notifyPropertyChange('isLoggedIn', false);
    } catch (error) {
      console.error('Error en logout:', error);
    }
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
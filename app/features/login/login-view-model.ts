import { Observable, Frame, NavigationEntry } from '@nativescript/core';

export class LoginViewModel extends Observable {
    constructor() {
        super();
        this.set("username", "");
        this.set("password", "");
        this.set("errorMessage", "");
    }

    async onLogin() {
        try {
            const username = this.get("username");
            const password = this.get("password");

            if (!username || !password) {
                this.set("errorMessage", "Por favor ingrese usuario y contraseña");
                return;
            }

            // Simulación de login
            if (username === "demo" && password === "demo123") {
                const navigationEntry: NavigationEntry = {
                    moduleName: "features/account/account-page",
                    clearHistory: true,
                    animated: true,
                    transition: {
                        name: "fade",
                        duration: 200
                    }
                };

                const topmost = Frame.topmost();
                if (topmost) {
                    topmost.navigate(navigationEntry);
                } else {
                    console.error("Frame no encontrado");
                    this.set("errorMessage", "Error de navegación");
                }
            } else {
                this.set("errorMessage", "Usuario o contraseña incorrectos");
            }
        } catch (error) {
            console.error("Error en login:", error);
            this.set("errorMessage", "Error al iniciar sesión");
        }
    }
}
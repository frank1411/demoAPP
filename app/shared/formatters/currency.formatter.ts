export function formatCurrency(value: number): string {
    if (typeof value !== 'number') return '';
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}
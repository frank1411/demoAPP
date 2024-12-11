export function formatDate(value: Date): string {
    if (!value) return '';
    return value.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}
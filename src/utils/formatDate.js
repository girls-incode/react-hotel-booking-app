export function formatDateISO(date) {
    return date.toISOString().split('T')[0];
}
export function formatDateView(date) {
    return date.split('-').reverse().join('/');
}
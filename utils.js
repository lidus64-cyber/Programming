export function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
}

export function generateRandomId() {
    return Math.floor(Math.random() * 100000);
}

export function getTodayDate() {
    return new Date().toLocaleDateString();
}
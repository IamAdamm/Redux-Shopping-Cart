const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "EUR",
    style: "currency",
})

export function formatCurrency(currency: number) {
    return currencyFormatter.format(currency)
}
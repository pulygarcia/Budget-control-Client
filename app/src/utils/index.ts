export const formatCurrency = (amount:number) => Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
})

export const formatDate = (isoDate:string) => {
    const date = new Date(isoDate)
    return new Intl.DateTimeFormat('en-US', {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
    }).format(date)
}
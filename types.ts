export type Category = {
    id: number,
    name: string
}

export type Product = {
    id: number,
    name: string,
    description: string,
    categoryName: Category['name'],
    price: number
}

export type CartItem = {
    id: number,
    quantity: number
}
export interface IOrder {
    
    id: string,
    date: string,
    product: {
        name: string,
        price: number
    },
    quantity: number
   
}
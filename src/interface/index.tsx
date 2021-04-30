export interface IProduct{
    readonly id:number,
    title: string,
    description?: string,
    price: string,
    quantity: string,
    images?: any[],
    thumbnail: any,
    rating?: number
}

export interface ICategory{
    title: string,
    image: any,
    bgColor: string,
    borderColor?: string,
}
//Njdfh nf qjuj dbl
export interface IProduct {
   _id: string,
   rating: number,
   numReviews: number,
   price: number,
   countInStock: number,
   name: string,
   image: string,
   description: string,
   brand: string,
   category: string,
   user: string,
   createdAt: string,
   updatedAt: string,
   reviews: IProductReviews
}

// Для переходів 
export interface IGetProductResponse {
   page: string,
   pages: number,
   products: IProduct[]
}

// Кількість товару
export interface IGetProductAndCount {
   products: IProduct,
   count: number
}

// Ревю
export interface IProductReviews {
   _id: string,
   name: string,
   rating: number,
   comment: string,
   user: string,
   createdAt: string,
   updatedAt: string,
   product_id: string
}

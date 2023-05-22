export interface Product {
	id: number,
	title: string,
	description: string,
	image: string,
	price: number,
	category: string
}

export interface CartDetail {
	product: Product,
	quantity: number
}

export interface Category {
	id: number,
	name: string
}
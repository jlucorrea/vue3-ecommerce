import { defineStore } from 'pinia'
import type { Product, CartDetail } from '@/model/types'
import { useLocalStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', {
	state: () => ({
		details: useLocalStorage<CartDetail[]>('cartDetails', [])
	}),
	getters: {
		cartItemCount: (state) => {
			let count = 0;
			state.details.forEach((item) => {
				count += item.quantity;
			})
			return count;
		},
		totalAmout: (state) => {
			let total = 0;

			state.details.forEach((item) => {
				total += item.product.price * item.quantity;
			})
			return total;
		},
		whatsappMesage(state){
			let message = `Hola quiero realizar la siguiente compra: \n`;
			message += `_____________________________________\n`;
			state.details.forEach(detail => {
				message += `Producto: ${detail.product.title}\n`,
				message += `Cantidad: ${detail.quantity}\n`,
				message += `SubTotal S/: ${detail.product.price * detail.quantity}\n`,
				message += `_____________________________________\n`;
			});

			message += `Total a pagar S/ ${this.totalAmout}\n\n`;
			message += `Gracias por su compra! `;
			return encodeURI(message)
		},
		whatsappLink(){
			return 'https://api.whatsapp.com/send/?phone=51982655823&text=' + this.whatsappMesage
		}
	},
	actions: {
		addProduct(product: Product){
			const producExist = this.details.find(el => el.product.id === product.id)
			if (producExist) {
				producExist.quantity += 1
			} else {
				this.details.push({
					product: product,
					quantity: 1
				});
			}
		},
		increment(productId: number){
			const producIndex = this.details.findIndex(el => el.product.id == productId)
			if(producIndex !== -1){
				this.details[producIndex].quantity += 1
			}
		},
		decrement(productId: number){
			const producIndex = this.details.findIndex(el => el.product.id == productId)
			if(producIndex !== -1){
				this.details[producIndex].quantity -= 1
				if(this.details[producIndex].quantity===0){
					this.details.splice(producIndex, 1);
				}
			}
		},
		deleteProduct(productId: number){
			const producIndex = this.details.findIndex(el => el.product.id == productId)
			this.details.splice(producIndex, 1);
		}
	}
})
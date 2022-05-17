import {defineStore} from 'pinia'

export const useCart = defineStore('cart', {
    state: () => {
        return {
            carts: []
        }
    },
    getters: {
        total(){
            return this.carts.length
                ? this.carts.map((cart) => (cart.product.price * cart.quantity)).reduce((accumulator, curr) => (accumulator + curr))
                : 0
        }
    },
    actions: {
        add(cart){
            this.carts.push(cart)
        },
        removeAll(){
            this.carts = []
        },
        updateQuantity({product, quantity}){

        }
    }
})
import {defineStore} from 'pinia'

export const useCart = defineStore('cart', {
    state: () => {
        return{
            products: [0, 1]
        }
    },
    getters: {
        products(state){
            return state.products
        },
    },
    actions: {

    }
})
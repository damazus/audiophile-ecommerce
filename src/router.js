import {createRouter, createWebHistory} from "vue-router";
import Home from "./Home.vue";
import ProductDetails from "./ProductDetails.vue";
import Categories from "./Categories.vue";
import Checkout from "./Checkout.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/categories/:slug',
        name: 'categories',
        component: Categories
    },
    {
        path: '/products/:slug',
        name: 'products',
        component: ProductDetails
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})

import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Product = { id: string; title: string; price: number; image?: string; description?: string };
export type CartItem = { product: Product; quantity: number };
export type Order = { id: string; items: CartItem[]; total: number; createdAt: string };

type CommerceState = {
	products: Product[];
	cart: CartItem[];
	orders: Order[];
	addToCart: (product: Product, quantity?: number) => void;
	removeFromCart: (productId: string) => void;
	clearCart: () => void;
	placeOrder: () => void;
	load: () => Promise<void>;
};

const PRODUCTS_KEY = 'commerce:products';
const CART_KEY = 'commerce:cart';
const ORDERS_KEY = 'commerce:orders';

export const useCommerceStore = create<CommerceState>((set, get) => ({
	products: [
		{ id: '1', title: 'Wireless Headphones', price: 59.99, image: 'https://picsum.photos/seed/p1/300/300' },
		{ id: '2', title: 'Smart Watch', price: 89.99, image: 'https://picsum.photos/seed/p2/300/300' },
		{ id: '3', title: 'Gaming Mouse', price: 29.99, image: 'https://picsum.photos/seed/p3/300/300' },
	],
	cart: [],
	orders: [],
	addToCart(product, quantity = 1) {
		const cart = [...get().cart];
		const existing = cart.find((c) => c.product.id === product.id);
		if (existing) existing.quantity += quantity; else cart.push({ product, quantity });
		set({ cart });
		AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
	},
	removeFromCart(productId) {
		const cart = get().cart.filter((c) => c.product.id !== productId);
		set({ cart });
		AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
	},
	clearCart() {
		set({ cart: [] });
		AsyncStorage.setItem(CART_KEY, JSON.stringify([]));
	},
	placeOrder() {
		const items = get().cart;
		const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
		const order: Order = { id: String(Date.now()), items, total, createdAt: new Date().toISOString() };
		const orders = [order, ...get().orders];
		set({ orders });
		AsyncStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
		get().clearCart();
	},
	async load() {
		const [cartRaw, ordersRaw, productsRaw] = await Promise.all([
			AsyncStorage.getItem(CART_KEY),
			AsyncStorage.getItem(ORDERS_KEY),
			AsyncStorage.getItem(PRODUCTS_KEY),
		]);
		set({
			cart: cartRaw ? JSON.parse(cartRaw) : [],
			orders: ordersRaw ? JSON.parse(ordersRaw) : [],
			products: productsRaw ? JSON.parse(productsRaw) : get().products,
		});
	},
}));


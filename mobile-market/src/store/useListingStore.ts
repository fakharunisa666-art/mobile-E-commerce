import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from './useCommerceStore';

type ListingState = {
	myListings: Product[];
	createListing: (listing: Product) => void;
	editListing: (id: string, updates: Partial<Product>) => void;
	removeListing: (id: string) => void;
	load: () => Promise<void>;
};

const KEY = 'listings:mine';

export const useListingStore = create<ListingState>((set, get) => ({
	myListings: [],
	createListing(listing) {
		const myListings = [listing, ...get().myListings];
		set({ myListings });
		AsyncStorage.setItem(KEY, JSON.stringify(myListings));
	},
	editListing(id, updates) {
		const myListings = get().myListings.map((l) => (l.id === id ? { ...l, ...updates } : l));
		set({ myListings });
		AsyncStorage.setItem(KEY, JSON.stringify(myListings));
	},
	removeListing(id) {
		const myListings = get().myListings.filter((l) => l.id !== id);
		set({ myListings });
		AsyncStorage.setItem(KEY, JSON.stringify(myListings));
	},
	async load() {
		const raw = await AsyncStorage.getItem(KEY);
		set({ myListings: raw ? JSON.parse(raw) : [] });
	},
}));


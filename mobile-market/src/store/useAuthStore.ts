import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = { id: string; email: string; name: string } | null;

type AuthState = {
	user: User;
	initialized: boolean;
	login: (email: string, name?: string) => Promise<void>;
	logout: () => Promise<void>;
	bootstrap: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	initialized: false,
	async login(email, name = 'User') {
		const user = { id: email, email, name } as NonNullable<User>;
		await AsyncStorage.setItem('auth:user', JSON.stringify(user));
		set({ user });
	},
	async logout() {
		await AsyncStorage.removeItem('auth:user');
		set({ user: null });
	},
	async bootstrap() {
		const raw = await AsyncStorage.getItem('auth:user');
		set({ user: raw ? (JSON.parse(raw) as NonNullable<User>) : null, initialized: true });
	},
}));


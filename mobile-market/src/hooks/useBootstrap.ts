import { useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useCommerceStore } from '../store/useCommerceStore';
import { useListingStore } from '../store/useListingStore';

export function useBootstrap() {
	const { bootstrap: authBootstrap, initialized: authInitialized } = useAuthStore();
	const loadCommerce = useCommerceStore((s) => s.load);
	const loadListings = useListingStore((s) => s.load);

	useEffect(() => {
		if (!authInitialized) authBootstrap();
		loadCommerce();
		loadListings();
	}, [authInitialized, authBootstrap, loadCommerce, loadListings]);
}


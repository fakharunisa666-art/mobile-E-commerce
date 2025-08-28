import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { useCommerceStore } from '../../src/store/useCommerceStore';

export default function ProductScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const router = useRouter();
	const { products, addToCart } = useCommerceStore();
	const product = useMemo(() => products.find((p) => p.id === id), [products, id]);

	if (!product) return null;

	return (
		<View style={styles.container}>
			<Image source={{ uri: product.image }} style={styles.image} />
			<Text style={styles.title}>{product.title}</Text>
			<Text style={styles.price}>${product.price.toFixed(2)}</Text>
			<Text style={styles.description}>{product.description ?? 'High quality product description goes here.'}</Text>
			<Button title="Add to Cart" onPress={() => { addToCart(product); router.push('/(tabs)/cart'); }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 },
	image: { width: '100%', height: 280, borderRadius: 12 },
	title: { fontSize: 22, fontWeight: '700' },
	price: { fontSize: 18, fontWeight: '700' },
	description: { fontSize: 14, color: '#333' },
});


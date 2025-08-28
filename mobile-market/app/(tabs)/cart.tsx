import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { useCommerceStore } from '../../src/store/useCommerceStore';

export default function CartScreen() {
	const router = useRouter();
	const { cart, removeFromCart } = useCommerceStore();
	const subtotal = cart.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Your Cart</Text>
			<FlatList
				data={cart}
				keyExtractor={(i) => i.product.id}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Text style={styles.itemTitle}>{item.product.title} x{item.quantity}</Text>
						<Text>${(item.product.price * item.quantity).toFixed(2)}</Text>
						<Button title="Remove" onPress={() => removeFromCart(item.product.id)} />
					</View>
				)}
			/>
			<Text>Subtotal: ${subtotal.toFixed(2)}</Text>
			<Button title="Checkout" onPress={() => router.push('/checkout')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 },
	title: { fontSize: 22, fontWeight: '700' },
	item: { paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' },
	itemTitle: { fontWeight: '700' },
});


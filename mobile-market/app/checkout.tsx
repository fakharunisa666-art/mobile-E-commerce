import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useCommerceStore } from '../src/store/useCommerceStore';

export default function CheckoutScreen() {
	const router = useRouter();
	const { placeOrder } = useCommerceStore();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Checkout</Text>
			<TextInput placeholder="Full name" style={styles.input} />
			<TextInput placeholder="Address" style={styles.input} />
			<TextInput placeholder="City" style={styles.input} />
			<TextInput placeholder="ZIP" style={styles.input} keyboardType="number-pad" />
			<Button title="Place Order" onPress={() => { placeOrder(); router.replace('/orders'); }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 },
	title: { fontSize: 22, fontWeight: '700' },
	input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12 },
});


import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useCommerceStore } from '../src/store/useCommerceStore';

export default function OrdersScreen() {
	const orders = useCommerceStore((s) => s.orders);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>My Orders</Text>
			<FlatList
				data={orders}
				keyExtractor={(o) => o.id}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Text style={styles.itemTitle}>Order {item.id}</Text>
						<Text>${item.total.toFixed(2)} • {new Date(item.createdAt).toLocaleDateString()}</Text>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 },
	title: { fontSize: 22, fontWeight: '700' },
	item: { paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' },
	itemTitle: { fontWeight: '700' },
});


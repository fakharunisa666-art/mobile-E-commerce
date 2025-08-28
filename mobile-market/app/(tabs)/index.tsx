import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useCommerceStore } from '../../src/store/useCommerceStore';

export default function HomeScreen() {
	const products = useCommerceStore((s) => s.products);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Discover</Text>
			<FlatList
				data={products}
				keyExtractor={(item) => item.id}
				numColumns={2}
				renderItem={({ item }) => (
					<Link href={{ pathname: '/product/[id]', params: { id: item.id } }} asChild>
						<TouchableOpacity style={styles.card}>
							<Image source={{ uri: item.image }} style={styles.image} />
							<Text numberOfLines={1} style={styles.cardTitle}>{item.title}</Text>
							<Text style={styles.price}>${item.price.toFixed(2)}</Text>
						</TouchableOpacity>
					</Link>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, gap: 12, backgroundColor: '#fff' },
	title: { fontSize: 28, fontWeight: '700', marginBottom: 4 },
	card: { flex: 1, backgroundColor: '#f7f7f7', margin: 6, borderRadius: 12, padding: 8 },
	image: { width: '100%', height: 120, borderRadius: 8, marginBottom: 8 },
	cardTitle: { fontSize: 14, fontWeight: '600' },
	price: { marginTop: 4, fontSize: 13, fontWeight: '700' },
});


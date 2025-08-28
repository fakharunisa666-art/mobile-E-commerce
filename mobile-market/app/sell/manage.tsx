import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useListingStore } from '../../src/store/useListingStore';

export default function ManageListingsScreen() {
	const { myListings, load, removeListing } = useListingStore();
	useEffect(() => { load(); }, [load]);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>My Listings</Text>
			<FlatList
				data={myListings}
				keyExtractor={(l) => l.id}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Text style={styles.itemTitle}>{item.title}</Text>
						<Text>${item.price.toFixed(2)}</Text>
						<Button title="Remove" onPress={() => removeListing(item.id)} />
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


import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { useListingStore } from '../../src/store/useListingStore';
import { nanoid } from 'nanoid/non-secure';

export default function SellScreen() {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const createListing = useListingStore((s) => s.createListing);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.heading}>Create Listing</Text>
			<Image style={styles.image} source={{ uri: 'https://picsum.photos/seed/new/600/400' }} />
			<TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
			<TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="decimal-pad" style={styles.input} />
			<TextInput placeholder="Description" value={description} onChangeText={setDescription} multiline style={[styles.input, { height: 100 }]} />
			<Button title="Publish" onPress={() => {
				if (!title || !price) return;
				createListing({ id: nanoid(), title, price: Number(price), description, image: 'https://picsum.photos/seed/new/600/400' });
				setTitle(''); setPrice(''); setDescription('');
			}} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: { padding: 16, gap: 12, backgroundColor: '#fff' },
	heading: { fontSize: 22, fontWeight: '700' },
	image: { width: '100%', height: 200, borderRadius: 12, backgroundColor: '#eee' },
	input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12 },
});


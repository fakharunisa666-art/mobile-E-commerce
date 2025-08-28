import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const data = ['Phone', 'Headphones', 'Shoes', 'Watch', 'Backpack'];

export default function SearchScreen() {
	const [query, setQuery] = useState('');
	const results = data.filter((d) => d.toLowerCase().includes(query.toLowerCase()));
	return (
		<View style={styles.container}>
			<TextInput placeholder="Search products" style={styles.input} value={query} onChangeText={setQuery} />
			<FlatList data={results} keyExtractor={(i) => i} renderItem={({ item }) => (
				<Text style={styles.item}>{item}</Text>
			)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 },
	input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12 },
	item: { paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' },
});


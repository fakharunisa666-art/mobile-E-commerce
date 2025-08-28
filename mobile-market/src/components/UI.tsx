import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>{title}</Text>
			{children}
		</View>
	);
}

export function PrimaryButton({ title, onPress, style }: { title: string; onPress: () => void; style?: ViewStyle }) {
	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	section: { marginVertical: 12 },
	sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
	button: { backgroundColor: '#111827', paddingVertical: 12, alignItems: 'center', borderRadius: 10 },
	buttonText: { color: 'white', fontWeight: '700' },
});


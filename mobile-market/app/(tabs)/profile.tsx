import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useAuthStore } from '../../src/store/useAuthStore';

export default function ProfileScreen() {
	const { user, initialized, bootstrap, logout } = useAuthStore();
	useEffect(() => { if (!initialized) { bootstrap(); } }, [initialized, bootstrap]);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Profile</Text>
			{user ? (
				<>
					<Text>{user.name}</Text>
					<Text>{user.email}</Text>
					<Button title="Logout" onPress={() => logout()} />
				</>
			) : (
				<Link href="/auth/(auth)/login" asChild>
					<Button title="Login / Register" />
				</Link>
			)}
			<Link href="/orders" asChild>
				<Button title="My Orders" />
			</Link>
			<Link href="/sell/manage" asChild>
				<Button title="My Listings" />
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 },
	title: { fontSize: 22, fontWeight: '700' },
});


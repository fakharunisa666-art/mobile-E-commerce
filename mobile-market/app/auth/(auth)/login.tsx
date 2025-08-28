import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useAuthStore } from '../../../src/store/useAuthStore';

export default function LoginScreen() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const login = useAuthStore((s) => s.login);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome back</Text>
			<TextInput value={email} onChangeText={setEmail} placeholder="Email" autoCapitalize="none" keyboardType="email-address" style={styles.input} />
			<TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry style={styles.input} />
			<Button title="Login" onPress={async () => { await login(email); router.replace('/(tabs)/profile'); }} />
			<Link href="/auth/(auth)/register" asChild>
				<Button title="Create account" />
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 },
	title: { fontSize: 22, fontWeight: '700' },
	input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12 },
});


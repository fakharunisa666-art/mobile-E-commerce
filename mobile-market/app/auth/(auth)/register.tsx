import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../../src/store/useAuthStore';

export default function RegisterScreen() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const login = useAuthStore((s) => s.login);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Create account</Text>
			<TextInput value={name} onChangeText={setName} placeholder="Name" style={styles.input} />
			<TextInput value={email} onChangeText={setEmail} placeholder="Email" autoCapitalize="none" keyboardType="email-address" style={styles.input} />
			<TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry style={styles.input} />
			<Button title="Register" onPress={async () => { await login(email, name); router.replace('/(tabs)/profile'); }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#fff', padding: 16, gap: 12 },
	title: { fontSize: 22, fontWeight: '700' },
	input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12 },
});


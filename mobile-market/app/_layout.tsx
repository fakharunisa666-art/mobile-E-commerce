import React from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useBootstrap } from '../src/hooks/useBootstrap';

export default function RootLayout() {
	const [loaded] = useFonts({});
	if (!loaded) return null;
  useBootstrap();

	return (
		<>
			<StatusBar style="dark" />
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(tabs)" />
				<Stack.Screen name="product/[id]" />
				<Stack.Screen name="auth/(auth)" />
				<Stack.Screen name="checkout" />
			</Stack>
		</>
	);
}

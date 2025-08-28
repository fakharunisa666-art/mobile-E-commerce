import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />) }} />
			<Tabs.Screen name="search" options={{ title: 'Search', tabBarIcon: ({ color, size }) => (<Ionicons name="search" color={color} size={size} />) }} />
			<Tabs.Screen name="sell" options={{ title: 'Sell', tabBarIcon: ({ color, size }) => (<Ionicons name="add-circle" color={color} size={size} />) }} />
			<Tabs.Screen name="cart" options={{ title: 'Cart', tabBarIcon: ({ color, size }) => (<Ionicons name="cart" color={color} size={size} />) }} />
			<Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color, size }) => (<Ionicons name="person" color={color} size={size} />) }} />
		</Tabs>
	);
}

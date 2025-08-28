## Mobile Market (Expo + TypeScript)

An e-commerce mobile app where users can buy and sell goods. Built with Expo, Expo Router, Zustand, and AsyncStorage.

### Features
- Home feed with products
- Product details with Add to Cart
- Cart and Checkout flow (local orders)
- Auth mock (login/register) with persisted session
- Sell: create listings and manage my listings
- Orders history

### Tech
- Expo SDK 53, React Native 0.79
- Expo Router for file-based navigation
- Zustand for state management
- AsyncStorage for local persistence

### Getting Started
1. Install dependencies:
```bash
cd /workspace/mobile-market
npm install
```
2. Run the app:
```bash
npm run android
# or
npm run ios
# or
npm run web
```

### Project Structure
```
app/                 # Expo Router pages
  _layout.tsx       # Root stack
  (tabs)/           # Bottom tabs: Home, Search, Sell, Cart, Profile
  product/[id].tsx  # Product details
  checkout.tsx      # Checkout
  orders.tsx        # Orders
  auth/(auth)/      # Auth stack: login/register
src/
  store/            # Zustand stores (auth, commerce, listings)
  hooks/            # Bootstrap for persistence
  components/       # Shared UI components
```

### Notes
- Payments are not implemented; orders are stored locally.
- Replace mock data with a backend as needed (REST/GraphQL/Firebase/Supabase).


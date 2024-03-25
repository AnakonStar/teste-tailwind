import { AuthUserProvider } from '@/contexts';
import { Routes } from '@/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthUserProvider>
        <Routes />
      </AuthUserProvider>
    </SafeAreaProvider>
  );
}

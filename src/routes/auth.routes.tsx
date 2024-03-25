import { Login, Register } from '@/screens';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

type StackRoutes = {
  Login: undefined;
  Register: undefined;
};

export type StackNavigation = NativeStackNavigationProp<StackRoutes>;
const { Screen, Navigator } = createNativeStackNavigator<StackRoutes>();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}

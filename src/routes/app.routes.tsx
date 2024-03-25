import { useUser } from '@/contexts/User';
import { Home, Profile } from '@/screens';
import { Ionicons } from '@expo/vector-icons';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import colors from 'tailwindcss/colors';

type TabRoutes = {
  Home: undefined;
  Profile: undefined;
};

export type TabNavigation = BottomTabNavigationProp<TabRoutes>;
const { Screen, Navigator } = createBottomTabNavigator<TabRoutes>();

export function AppRoutes() {
  const { handleLogout } = useUser();

  var iconSize = 32;

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: colors.slate[400],
        tabBarActiveTintColor: colors.green[500],
        tabBarLabel: '',
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Tela inicial',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={iconSize} color={color} />
          ),
          headerRight: () => (
            <Ionicons
              name="log-out"
              size={40}
              color={colors.green[500]}
              onPress={handleLogout}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={iconSize} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}

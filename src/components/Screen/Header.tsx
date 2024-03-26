import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import colors from 'tailwindcss/colors';

type Props = {
  headerHasGoBack: boolean;
};

export function Header({ headerHasGoBack }: Props) {
  return (
    <View>
      {headerHasGoBack && (
        <Ionicons name="arrow-back" size={30} color={colors.green[500]} />
      )}
      <Text>Testando</Text>
    </View>
  );
}

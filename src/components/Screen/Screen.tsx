import { ChildrenType } from '@/dtos';
import { styled } from 'nativewind';
import { View } from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import { Header } from './Header';

type Props = ChildrenType & {
  headerHasGoBack?: boolean;
  style?: string;
};

type LinearProps = ChildrenType & LinearGradientProps;

function LinearGradientReturn({ colors, children }: LinearProps) {
  return <LinearGradient colors={colors}>{children}</LinearGradient>;
}

const LinearBackground = styled(LinearGradientReturn, {
  props: {
    colors: '',
  },
});

export function Screen({ style, headerHasGoBack, ...rest }: Props) {
  return (
    <View className={style}>
      {headerHasGoBack && <Header headerHasGoBack={headerHasGoBack} />}
      {rest.children}
    </View>
  );
}

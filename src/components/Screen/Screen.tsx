import { ChildrenType } from '@/dtos';
import { View } from 'react-native';
import { Header } from './Header';

type Props = ChildrenType & {
  headerHasGoBack?: boolean;
  style?: string;
};

// type LinearProps = ChildrenType & LinearGradientProps

// function LinearGradientReturn({ colors, children}: LinearProps) {
//     return (
//         <LinearGradient colors={colors}>
//             {children}
//         </LinearGradient>
//     )
// }

// const LinearBackground = styled(LinearGradientReturn, {
// props: {
//     colors: [colors.green[500], colors.green[100]]
// }
// });

export function Screen({ style, headerHasGoBack, ...rest }: Props) {
  return (
    <View className={style}>
      {headerHasGoBack && <Header headerHasGoBack={headerHasGoBack} />}
      {rest.children}
    </View>
  );
}

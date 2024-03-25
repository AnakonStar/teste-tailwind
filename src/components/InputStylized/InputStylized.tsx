import { InputStylizedType } from '@/dtos/InputStylized';
import { useState } from 'react';
import { TextInput } from 'react-native';
import colors from 'tailwindcss/colors';

export function InputStylized({
  value,
  isPassword,
  clearInput,
  ...rest
}: InputStylizedType) {
  const [passwordVisible, setPasswordVisible] = useState(isPassword);

  return (
    <TextInput
      className="p-3.5 text-lg bg-slate-300 rounded-full"
      placeholderTextColor={colors.slate[400]}
      secureTextEntry={passwordVisible}
      {...rest}
    />
  );
}

{
  /* <View className="px-2 bg-slate-300 rounded-full flex-row items-center justify-between my-2.5">
<TextInput
  className="h-full bg-slate-400"
  placeholderTextColor={colors.slate[400]}
  secureTextEntry={passwordVisible}
  {...rest}
/>
{isPassword ? (
  <Ionicons
    name={passwordVisible ? 'eye-outline' : 'eye-off-outline'}
    size={30}
    color={colors.slate[400]}
    onPress={() => setPasswordVisible(!passwordVisible)}
  />
) : (
  value && (
    <Ionicons
      name="close"
      size={30}
      color={colors.slate[400]}
      onPress={clearInput}
    />
  )
)}
</View> */
}

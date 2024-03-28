import { ButtonStylizedType } from '@/dtos';
import { Text, TouchableOpacity } from 'react-native';

export function ButtonStylized({ text, ...rest }: ButtonStylizedType) {
  return (
    <TouchableOpacity
      {...rest}
      className="rounded-full p-3.5 items-center bg-green-500"
    >
      <Text className="text-lg text-slate-100">{text}</Text>
    </TouchableOpacity>
  );
}

import { TextInputProps } from 'react-native';

export type InputStylizedType = TextInputProps & {
  isPassword?: boolean;
  clearInput: () => void;
};

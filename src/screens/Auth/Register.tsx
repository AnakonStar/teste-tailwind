import { ButtonStylized, InputStylized } from '@/components';
import { useUser } from '@/contexts/User';
import { StackNavigation } from '@/routes/auth.routes';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import colors from 'tailwindcss/colors';

export function Register() {
  const navigation = useNavigation<StackNavigation>();

  const { handleRegister } = useUser();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const id = uuid.v4().toString();

  const [errorMessage, setErrorMessage] = useState<string>();

  async function handleRegisterVerification() {
    function emailValidation(email: string): boolean {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if (!email || !password)
      return setErrorMessage('Preencha todos os campos!');
    else setErrorMessage('');
    if (!emailValidation(email))
      return setErrorMessage('Composição de email inválida!');
    else setErrorMessage('');

    await handleRegister({ id, email, password }, setErrorMessage);
  }

  return (
    <View className="p-4 flex-1 justify-center content-center">
      <View className="py-6 px-3.5 justify-center rounded-2xl bg-slate-200 gap-y-5">
        <View className="gap-x-2 flex-row items-center">
          <Ionicons name="log-in-outline" size={30} color={colors.green[500]} />
          <Text className="text-green-500 font-bold text-2xl">Register</Text>
        </View>

        <InputStylized
          placeholder="Email"
          value={email}
          clearInput={() => setEmail('')}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <InputStylized
          placeholder="Senha"
          clearInput={() => setPassword('')}
          isPassword
          value={password}
          onChangeText={setPassword}
        />
        {errorMessage && (
          <Text className="text-red-400 text-base text-center">
            {errorMessage}
          </Text>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-green-700 text-right">
            Já possuí uma conta? Logar.
          </Text>
        </TouchableOpacity>

        <ButtonStylized
          text="Criar conta"
          onPress={handleRegisterVerification}
        />
      </View>
    </View>
  );
}

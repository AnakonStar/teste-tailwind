import { ButtonStylized, InputStylized, Screen } from '@/components';
import { useUser } from '@/contexts/User';
import { StackNavigation } from '@/routes/auth.routes';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import colors from 'tailwindcss/colors';

export function Login() {
  const navigation = useNavigation<StackNavigation>();

  const { handleLogin } = useUser();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>();
  const id = uuid.v4().toString();

  const [errorMessage, setErrorMessage] = useState<string>();

  function handleLoginVerification() {
    if (!email || !password)
      return setErrorMessage('Preencha todos os campos!');

    handleLogin({ id, email, password }, setErrorMessage);
  }

  return (
    <Screen style="p-4 flex-1 justify-center content-center">
      <View className="py-6 px-3.5 justify-center rounded-2xl bg-slate-200 gap-y-5">
        <View className="gap-x-2 flex-row items-center">
          <Ionicons name="log-in-outline" size={30} color={colors.green[500]} />
          <Text className="text-green-500 font-bold text-2xl">Login</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text className="text-green-700 text-right">
            Ainda não possuí uma conta? Registrar.
          </Text>
        </TouchableOpacity>

        <ButtonStylized text="Entrar" onPress={handleLoginVerification} />
      </View>
    </Screen>
  );
}

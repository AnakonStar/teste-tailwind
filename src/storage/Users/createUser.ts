import { UserType } from '@/dtos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USERS_COLLECTION } from '../storageCollection';

export async function createUser(data: UserType[]) {
  try {
    await AsyncStorage.setItem(USERS_COLLECTION, JSON.stringify(data));
    console.log('Usuário criado com sucesso');
  } catch (error) {
    console.error('Falha ao cadastrar novo usuário');
  }
}

import { UserType } from '@/dtos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USERS_COLLECTION } from '../storageCollection';

export async function getUsers() {
  try {
    const response = await AsyncStorage.getItem(USERS_COLLECTION);

    if (response) return JSON.parse(response);
    else return [] as UserType[];
  } catch (error) {
    console.error('Falha ao puxar usuários', error);
  }
}

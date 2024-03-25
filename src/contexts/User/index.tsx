import { ChildrenType, UserType } from '@/dtos';
import { createUser } from '@/storage/Users/createUser';
import { getUsers } from '@/storage/Users/getUsers';
import { createContext, useContext, useEffect, useState } from 'react';

type UserContextType = {
  user: UserType;
  handleLogout: () => void;
  handleLogin: (
    data: UserType,
    setErrorMessage: (text: string) => void,
  ) => Promise<void>;
  handleRegister: (
    data: UserType,
    setErrorMessage: (text: string) => void,
  ) => Promise<void>;
};

const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: ChildrenType) {
  const [user, setUser] = useState({} as UserType);
  const [usersList, setUsersList] = useState([] as UserType[]);

  function handleLogout() {
    setUser({} as UserType);
  }

  async function handleGetUsersList() {
    const users: UserType[] = await getUsers();

    if (users) setUsersList(users);
    else setUsersList([] as UserType[]);
  }

  async function handleRegister(
    data: UserType,
    setErrorMessage: (text: string) => void,
  ) {
    if (!data) return;

    const usersList: UserType[] = await getUsers();

    console.log(usersList, data);

    function userAlreadyExists(): boolean {
      return usersList.some(item => item.email === data.email);
    }

    if (userAlreadyExists())
      return setErrorMessage('Este email já está cadastrado!');
    else setErrorMessage('');

    alert('Usuário criado com sucesso');

    await createUser([...usersList, data]);
    setUser(data);
    handleGetUsersList();
  }

  async function handleLogin(
    data: UserType,
    setErrorMessage: (text: string) => void,
  ) {
    if (!data) return;

    function userVerification(): boolean {
      return usersList.some(
        item => item.email === data.email && item.password === data.password,
      );
    }

    if (userVerification()) return setUser(data);
    else setErrorMessage('Email ou senha incorretos');
  }

  useEffect(() => {
    handleGetUsersList();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, handleLogin, handleLogout, handleRegister }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

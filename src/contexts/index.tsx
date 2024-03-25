import { ChildrenType } from '@/dtos';
import { UserProvider } from './User';

export function AuthUserProvider({ children }: ChildrenType) {
  return <UserProvider>{children}</UserProvider>;
}

import { PostSchema } from '@/schemas/PostSchema';
import Realm from 'realm';

export async function getRealm() {
  return Realm.open({
    schema: [PostSchema],
  });
}

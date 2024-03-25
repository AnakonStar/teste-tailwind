import { PostItem } from '@/components';
import { useUser } from '@/contexts/User';
import { FlatList, Text, View } from 'react-native';

export function Profile() {
  const { user } = useUser();

  const data = [
    {
      id: '1',
      user: user.email,
      title: 'Teste',
    },
    {
      id: '2',
      user: user.email,
      title: 'Teste',
    },
  ];

  return (
    <View className="flex-1">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PostItem title={item.title} user={item.user} />
        )}
        ListHeaderComponent={() => (
          <View className="bg-slate-300 flex-row items-center gap-x-3 p-3.5">
            <View className="rounded-full h-14 w-14 bg-slate-600" />
            <Text className="text-2xl">{user.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

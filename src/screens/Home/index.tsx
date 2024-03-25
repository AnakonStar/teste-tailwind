import { PostItem } from '@/components';
import { useUser } from '@/contexts/User';
import { FlatList, View } from 'react-native';

export function Home() {
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
    {
      id: '3',
      user: 'junior@gmail.com',
      title: 'Teste',
    },
    {
      id: '4',
      user: 'junior@gmail.com',
      title: 'Teste',
    },
    {
      id: '5',
      user: 'junior@gmail.com',
      title: 'Teste',
    },
    {
      id: '6',
      user: 'junior@gmail.com',
      title: 'Teste',
    },

    {
      id: '7',
      user: 'junior@gmail.com',
      title: 'Teste',
    },
    {
      id: '8',
      user: 'junior@gmail.com',
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
          <FlatList
            showsHorizontalScrollIndicator={false}
            className="bg-slate-300 py-3"
            data={data}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View className="rounded-full h-14 w-14 bg-slate-600 ml-4" />
            )}
          />
        )}
      />
    </View>
  );
}

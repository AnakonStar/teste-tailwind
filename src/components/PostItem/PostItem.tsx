import { Text, View } from 'react-native';

type Props = {
  title: string;
  user: string;
};

export function PostItem({ title, user }: Props) {
  return (
    <View className="gap-y-3 p-4 b border-b-2 border-slate-300">
      <View className="flex-row items-center gap-x-2">
        <View className="aspect-square w-12 h-12 rounded-full bg-slate-700" />
        <Text className="text-lg">{user}</Text>
      </View>

      <View>
        <Text className="text-2xl mb-2">{title}</Text>
        <View className="aspect-square w-full bg-slate-700 rounded-lg" />
      </View>
    </View>
  );
}

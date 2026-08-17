import { Ionicons } from "@expo/vector-icons";
import { router, type Href } from "expo-router";
import { Pressable, Text, View } from "react-native";

interface Props {
  title: string;
  href?: Href;
}

const SectionHeader = ({ title, href }: Props) => {
  return (
    <View className="flex-row justify-between items-center px-4 mb-2">
      <Text className="font-bold text-2xl text-white">{title}</Text>
      (href && (
      <Pressable
        onPress={() => router.push(href as Href)}
        className="flex-row items-center gap-1"
      >
        <Text>Ver mas</Text>
        <Ionicons name="chevron-forward" size={16} color="#8B5CF6" />
      </Pressable>
      ))
    </View>
  );
};

export default SectionHeader;

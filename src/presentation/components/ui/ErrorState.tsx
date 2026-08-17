import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

interface Props {
  message?: string;
  onRetry?: () => void;
}

const ErrorState = ({ message, onRetry }: Props) => {
  return (
    <View className="flex-1 justify-center items-center gap-4 px-6">
      <Ionicons name="cloud-offline-outline" size={48} color="#71717A" />
      <Text className="text-gray-400 text-center">{message}</Text>
      {onRetry && (
        <Pressable
          onPress={onRetry}
          className="bg-purple-600 rounded-xl px-6 py-2.5"
        >
          <Text className="text-white font-semibold">Reintentar</Text>
        </Pressable>
      )}
    </View>
  );
};

export default ErrorState;

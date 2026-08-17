import { View } from "react-native";
import Skeleton from "./Skeleton";

const HomeSkeleton = () => {
  return (
    <View className="flex-1 pt-14 px-4 gap-6">
      <Skeleton height={32} width="50%" />
      <Skeleton height={250} borderRadius={20} />
      <View className="gap-3">
        <Skeleton height={24} width="40%" />
        <View className="flex-row gap-3">
          <Skeleton height={130} width={85} />
          <Skeleton height={130} width={85} />
          <Skeleton height={130} width={85} />
        </View>
      </View>
      <View className="gap-3">
        <Skeleton height={24} width="40%" />
        <View className="flex-row gap-3">
          <Skeleton height={130} width={85} />
          <Skeleton height={130} width={85} />
          <Skeleton height={130} width={85} />
        </View>
      </View>
    </View>
  );
};

export default HomeSkeleton;

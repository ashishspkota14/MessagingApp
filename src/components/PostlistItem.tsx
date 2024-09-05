import { Text, View, Image } from "react-native";
import posts from "~/assets/data/post.json";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

const post = posts[0];

export default function PostListItem({ post }) {
  return (
    <View className="bg-white">
      {/* Header */}
      <View className="p-3 flex-row items-center gap-2">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>

      <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" />
      {/*Footer*/}
      <View style={{ flexDirection: "row", padding: 12, alignItems: "center" }}>
        {/* Icons */}
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />

        {/* Spacer to push bookmark icon to the right */}
        <View style={{ flex: 1 }} />

        {/* Bookmark Icon */}
        <Feather name="bookmark" size={20} />
      </View>
    </View>
  );
}

import { FlatList, View } from "react-native";
import PostListItem from "~/src/components/PostlistItem";
import posts from "~/assets/data/post.json";

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

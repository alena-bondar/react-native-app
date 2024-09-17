import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { Task } from "@/app/task/task";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Task />
    </View>
  );
}

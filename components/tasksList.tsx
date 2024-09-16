import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { FC } from "react";
import { TaskItem } from "@/components/taskItem";

type TaskListProps = {
  tasks: Task[];
};

export const TasksList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Task list</Text>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

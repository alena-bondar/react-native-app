import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FC } from "react";
import { TaskItem } from "@/components/taskItem";

type TaskListProps = {
  tasks: Task[];
  deleteTask: (id: string) => void;
};

export const TasksList: FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Task list</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => <TaskItem task={item} deleteTask={deleteTask}/>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  listContainer: {
    width: "100%",
    marginTop: 20
  },
});

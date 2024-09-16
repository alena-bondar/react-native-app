import { StatusBar, StyleSheet, View, Text } from "react-native";
import { FC } from "react";

type TaskItemProps = {
  task: Task;
};

export const TaskItem: FC<TaskItemProps> = ({ task }) => {
  return (
      <View style={styles.item}>
          <Text style={styles.title}>{task.title}</Text>
          <Text>{task.description}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

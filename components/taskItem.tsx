import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { FC } from "react";
import { DeleteButtonIcon } from "@/assets/images/icons/DeleteButton";

type TaskItemProps = {
  task: Task;
  deleteTask: (id: string) => void;
};

export const TaskItem: FC<TaskItemProps> = ({ task, deleteTask }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Text style={styles.title}>{task.title}</Text>
        <Text>{task.description}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
        <DeleteButtonIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
  },
});

import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormData, initialValuesTask, taskSchema} from "@/app/task/validation";
import taskStore from "@/store/store";
import {TasksList} from "@/components/tasksList";


export const Task = () => {
    const {tasks, addTask} = taskStore();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(taskSchema),
        defaultValues: initialValuesTask,
    });

    const onSubmit = (data: Omit<Task, "id">) => {
        const id = Math.floor(10000 + Math.random() * 90000).toString();
        addTask({...data, id});
    };

    return (
      <View>
        <Controller
          control={control}
          name="title"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="Add new task"
            />
          )}
        />
        {errors.title && <Text style={styles.error}>error</Text>}
        <Text style={styles.label}>Description</Text>
        <Controller
          control={control}
          name="description"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              numberOfLines={4}
              maxLength={50}
              value={value}
              placeholder="Add description"
            />
          )}
        />
        {errors.description && (
          <Text style={styles.error}>error</Text>
        )}
        <Button title="Create" onPress={handleSubmit(onSubmit)} />
          <TasksList tasks={tasks} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    label: {
        display: "flex",
        justifyContent: "flex-start",
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: "lightgray",
        borderWidth: 1,
        marginBottom: 16,
        width: "100%",
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    error: {
        color: "red",
        marginBottom: 8,
    },
});

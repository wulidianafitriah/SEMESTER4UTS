import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Tipe data Todo (harus sama dengan yang di HomeScreen)
type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

type Props = {
  task: Todo;
};

export default function TaskItem({ task }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{task.task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});

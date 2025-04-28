import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import TaskItem from "./TaskItem";
import useTodoStore from "../hooks/useTodoStore";

export default function ListScreen() {
  const { todos } = useTodoStore();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDoList-App</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>List Kegiatan</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: {
    fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 16
  },
  button: {
    backgroundColor: "#2563eb", padding: 14, borderRadius: 8,
    alignItems: "center", marginBottom: 20
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 }
});
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import TaskItem from "../../../components/TaskItem";
import useTodoStore from "../../../hooks/useTodoStore";

// Mendefinisikan tipe data untuk Todo
type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

export default function HomeScreen() {
  // Mendapatkan data todos dari store
  const { todos } = useTodoStore();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Amanin-App</Text>
        {/* Tambahkan ikon profil di kanan atas jika diperlukan */}
      </View>

      <Text style={styles.sectionTitle}>Today's tasks</Text>

      {/* Menggunakan FlatList untuk menampilkan daftar tugas */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()} // Memastikan ID adalah string
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5ecec",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
});

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodoListScreen() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Belajar React Native', done: false },
    { id: '2', text: 'Kerjakan tugas kuliah', done: false },
    { id: '3', text: 'Review materi JavaScript', done: false },
    { id: '4', text: 'Push project ke GitHub', done: false },
    { id: '5', text: 'Meeting kelompok', done: false },
    { id: '6', text: 'Buat desain UI di Figma', done: false },
  ]);
  

  const toggleDone = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.text}</Text>
      <TouchableOpacity
        style={[
          styles.checkbox,
          { backgroundColor: item.done ? '#0A84FF' : '#fff' },
        ]}
        onPress={() => toggleDone(item.id)}
      >
        {item.done && <Ionicons name="checkmark" size={16} color="#fff" />}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDoList-App</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>List Kegiatan</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  button: {
    backgroundColor: '#0A84FF', padding: 12, borderRadius: 8,
    alignItems: 'center', marginBottom: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  listContainer: { paddingBottom: 20 },
  todoItem: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', padding: 15, backgroundColor: '#f5faff',
    borderRadius: 10, marginBottom: 10,
  },
  todoText: { fontSize: 16 },
  checkbox: {
    width: 24, height: 24, borderRadius: 12,
    borderWidth: 2, borderColor: '#ccc', justifyContent: 'center',
    alignItems: 'center',
  },
});
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Belajar React Native', done: false },
    { id: '2', text: 'Kerjakan tugas kuliah', done: true },
    { id: '3', text: 'Cek email dosen', done: false },
  ]);

  const toggleDone = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>To-Do List</ThemedText>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.todoItem}
            onPress={() => toggleDone(item.id)}
          >
            <View style={[styles.checkbox, item.done && styles.checkboxChecked]}>
              {item.done && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={[styles.todoText, item.done && styles.todoTextDone]}>
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#666',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoText: {
    fontSize: 18,
    marginLeft: 12,
  },
  todoTextDone: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});

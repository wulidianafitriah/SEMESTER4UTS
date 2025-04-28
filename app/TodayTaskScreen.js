import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodayTasksScreen() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Belajar React Native', done: false },
    { id: '2', text: 'Kerjakan tugas kuliah', done: false },
    { id: '3', text: 'Review materi JavaScript', done: false },
    { id: '4', text: 'Push project ke GitHub', done: false },
    { id: '5', text: 'Meeting kelompok', done: false },
    { id: '6', text: 'Buat desain UI di Figma', done: false },
  ]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity
        style={[
          styles.checkbox,
          { backgroundColor: item.done ? '#0A84FF' : '#fff' },
        ]}
        onPress={() => toggleTask(item.id)}
      >
        {item.done && <Ionicons name="checkmark" size={16} color="#fff" />}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Amanin-App</Text>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Content Box */}
      <View style={styles.contentBox}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', paddingTop: 50, paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 20,
  },
  title: {
    fontSize: 18, fontWeight: 'bold',
  },
  contentBox: {
    backgroundColor: '#f0f4f4',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1, padding: 20,
  },
  sectionTitle: {
    fontSize: 20, fontWeight: '600', marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', padding: 15, borderRadius: 12,
    backgroundColor: '#fff', marginBottom: 12,
  },
  taskText: { fontSize: 16 },
  checkbox: {
    width: 24, height: 24, borderRadius: 12,
    borderWidth: 2, borderColor: '#ccc', alignItems: 'center',
    justifyContent: 'center',
  },
});

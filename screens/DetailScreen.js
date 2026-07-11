import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { deleteItem, updateItem } from "../services/api";

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;

  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  async function handleUpdate() {
    try {
      await updateItem(item.id, {
        title,
        description,
      });

      Alert.alert("Éxito", "Elemento actualizado correctamente");
      navigation.navigate("Items");
    } catch (error) {
      Alert.alert("Error", "No se pudo actualizar el elemento");
    }
  }

  async function handleDelete() {
    Alert.alert(
      "Eliminar",
      "¿Deseas eliminar este elemento?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteItem(item.id);
              navigation.navigate("Items");
            } catch (error) {
              Alert.alert("Error", "No se pudo eliminar el elemento");
            }
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Descripción</Text>

      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Pressable style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Guardar cambios</Text>
      </Pressable>

      <Pressable style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f7fb",
  },

  label: {
    fontWeight: "bold",
    color: "#666",
    marginTop: 12,
    marginBottom: 4,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  updateButton: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 10,
  },

  updateButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  deleteButton: {
    backgroundColor: "#dc2626",
    padding: 14,
    borderRadius: 8,
  },

  deleteButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
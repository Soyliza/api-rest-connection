import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { createItem } from "../services/api";

// Esta pantalla permite capturar un nuevo elemento para agregarlo al listado.
export default function AddItemScreen({ navigation }) {

  // Aquí guardo el título y la descripción que escribe el usuario.
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Verifico que los campos no estén vacíos antes de guardar la información.
  async function handleSave() {
  if (title.trim() === '' || description.trim() === '') {
    return;
  }

  try {
    await createItem({
      title,
      description,
    });

    navigation.navigate("Items");
  } catch (error) {
    console.log(error);
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: Revisar proyecto"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe el elemento"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Este botón guarda el nuevo elemento en la lista. */}
      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  // Aquí defino el diseño de la pantalla para agregar elementos.
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f7fb',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
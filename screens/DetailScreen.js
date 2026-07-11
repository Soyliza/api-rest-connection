import { StyleSheet, Text, View } from "react-native";

// Esta pantalla muestra la información completa del elemento seleccionado.
export default function DetailScreen({ route }) {

  // Aquí recibo los datos enviados desde la pantalla del listado.
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.label}>Descripción</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Defino el diseño que tendrá la pantalla de detalle.
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f7fb',
  },
  label: {
    fontWeight: 'bold',
    color: '#666',
    marginTop: 12,
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});
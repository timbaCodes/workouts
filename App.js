import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import exercices from "./assets/data/exercises.json";

export default function App() {
  const exercice = exercices[0];
  console.log(exercice);
  return (
    <View style={styles.container}>
      <View style={styles.exerciceContainer}>
        <Text style={styles.exerciceName}>{exercice.name}</Text>
        <Text style={styles.exerciceSubtitle}>
          {exercice.muscle.toUpperCase()} | {exercice.equipment.toUpperCase()}
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    justifyContent: "center",
    padding: 10,
  },
  exerciceContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap:5
  },
  exerciceName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciceSubtitle: {
    color: "dimgray",
  },
});

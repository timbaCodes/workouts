import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Stack, useLocalSearchParams } from "expo-router";
import exercices from "../../assets/data/exercises.json";

export default function ExerciceDetailsScreen() {
  const params = useLocalSearchParams();

  const exercice = exercices.find((item) => item.name === params.name);
  if (!exercice) {
    return <Text>Exercice not found</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: exercice.name }} />
      <View style={styles.panel}>
        <Text style={styles.exerciceName}>{exercice.name}</Text>
        <Text style={styles.exerciceSubtitle}>
          <Text style={styles.subValue}>{exercice.muscle}</Text> |{" "}
          <Text style={styles.subValue}>{exercice.equipment}</Text>
        </Text>
      </View>

      <View style={styles.panel}>
        <Text style={styles.instructions}>{exercice.instructions}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap : 10
  },
  exerciceName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciceSubtitle: {
    color: "dimgray",
  },
  subValue: {
    textTransform: "capitalize",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});

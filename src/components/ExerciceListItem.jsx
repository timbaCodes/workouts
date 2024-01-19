import { StyleSheet, Text, View } from "react-native";
const ExerciceListItem = ({ item }) => {
  return (
    <View style={styles.exerciceContainer}>
      <Text style={styles.exerciceName}>{item.name}</Text>
      <Text style={styles.exerciceSubtitle}>
        {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
      </Text>
    </View>
  );
};
export default ExerciceListItem;
const styles = StyleSheet.create({
  exerciceContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciceName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciceSubtitle: {
    color: "dimgray",
  },
});

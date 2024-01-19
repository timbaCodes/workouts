import { StyleSheet, Text, View } from "react-native";
const ExerciceListItem = ({ item }) => {
  return (
    <View style={styles.exerciceContainer}>
      <Text style={styles.exerciceName}>{item.name}</Text>
      <Text style={styles.exerciceSubtitle}>
        <Text style={styles.subValue}>{item.muscle}</Text> |{" "}
        <Text style={styles.subValue}>{item.equipment}</Text>
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
    marginHorizontal : 2,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
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
});

import { FlatList, StyleSheet, Text, View } from "react-native";
import exercices from "./assets/data/exercises.json";
import ExerciceListItem from "./src/components/ExerciceListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercices}
        contentContainerStyle={{ gap: 5 }}
        keyExtractor={(item,index) => item.name + index}
        renderItem={({ item }) => <ExerciceListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    justifyContent: "center",
    padding: 10,
    paddingTop: 70,
  },
});

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { scaleSize } from "../constants/Layout";

export default function Table(props) {
  if (props.show !== "") {
    let value = props.show;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.company}> {value.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>OPEN</Text>
          <Text style={styles.number}>{value.open}</Text>
          <Text style={styles.name}>LOW</Text>
          <Text style={styles.number}>{value.low}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>CLOSE</Text>
          <Text style={styles.number}>{value.close}</Text>
          <Text style={styles.name}>HIGH</Text>
          <Text style={styles.number}>{value.high}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.name}>VOLUME</Text>
          <Text style={styles.number}>{value.volumes}</Text>
          <Text style={styles.name}></Text>
          <Text style={styles.number}></Text>
        </View>
      </View>
    );
  } else return <View></View>;
}
const styles = StyleSheet.create({
  // FixMe: add styles here ...
  // use scaleSize(x) to adjust sizes for small/large screens
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  company: {
    flex: 3,
    fontSize: scaleSize(20),
    color: "white",
    textAlign: "center",
    margin: scaleSize(2),
    padding: scaleSize(7),
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#323234",
  },
  row: {
    flex: 2,
    flexDirection: "row",
    margin: scaleSize(2),
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#323234",
    height: scaleSize(40),
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    flex: 1,
    fontSize: scaleSize(14),
    color: "#8D8D92",
  },
  number: {
    flex: 1,
    textAlign: "right",
    fontSize: scaleSize(14),
    color: "white",
    textAlignVertical: "center",
    margin: scaleSize(10),
  },
});

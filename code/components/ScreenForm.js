import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { scaleSize } from "../constants/Layout";
export default function Form(props) {
  if (props.state !== undefined) {
    return (
      <ScrollView style={styles.container}>
        {props.state.map((value, index) => {
          return (
            <TouchableOpacity
              style={styles.row}
              onPress={() => props.setShow(value)}
              key={value + index}
            >
              <View style={styles.viewsymbol}>
                <Text style={styles.symbol}> {value.symbol}</Text>
              </View>
              <View style={styles.viewclose}>
                <Text style={styles.close}> {value.close}</Text>
              </View>
              <View
                style={[
                  styles.viewper,
                  {
                    backgroundColor:
                      value.percentage > 0 ? "#17c623" : "#FF3A30",
                  },
                ]}
              >
                <Text style={styles.per}>
                  {value.percentage > 0
                    ? "+" + (value.percentage * 100).toFixed(2) + "%"
                    : (value.percentage * 100).toFixed(2) + "%"}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  } else return <ScrollView></ScrollView>;
}

const styles = StyleSheet.create({
  // FixMe: add styles here ...
  // use scaleSize(x) to adjust sizes for small/large screens
  container: {
    flex: 1,
    margin: scaleSize(2),
  },
  row: {
    flexDirection: "row",
    margin: scaleSize(2),
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#323234",
    height: scaleSize(40),
  },
  viewsymbol: {
    flex: 3,
    justifyContent: "center",
  },
  symbol: {
    color: "white",
    fontSize: scaleSize(14),
  },
  viewclose: {
    flex: 2,
    justifyContent: "center",
    marginRight: scaleSize(10),
  },
  close: {
    color: "white",
    textAlign: "right",

    fontSize: scaleSize(14),
  },
  viewper: {
    flex: 2,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
  },
  per: {
    color: "white",
    textAlign: "center",
    fontSize: scaleSize(14),
  },
});

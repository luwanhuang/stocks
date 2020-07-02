import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text, Image } from "react-native";
import { scaleSize } from "../constants/Layout";

export default function SearchBar(props) {
  const [word, setWord] = useState("");
  useEffect(() => {
    props.setState(word);
  }, [word]);
  return (
    <View>
      <Text style={style.title}>Type a conpany names or stock symbol</Text>
      <View style={style.total}>
        <Image
          style={style.image}
          source={require("../assets/images/search.png")}
        ></Image>
        <TextInput
          style={style.search}
          onChangeText={(text) => setWord(text)}
          value={word}
          placeholder="Search"
        ></TextInput>
      </View>
    </View>
  );
}

let style = StyleSheet.create({
  title: {
    color: "#8D8D92",
    textAlign: "center",
    fontSize: scaleSize(14),
  },
  total: {
    margin: scaleSize(6),
    flexDirection: "row",
    height: scaleSize(40),
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#323234",
    backgroundColor: "#1C1C1E",
  },
  image: {
    width: scaleSize(18),
    margin: scaleSize(6),
    resizeMode: "center",
  },
  search: {
    flex: 1,
    padding: scaleSize(6),
    fontSize: scaleSize(16),
    color: "white",
  },
});

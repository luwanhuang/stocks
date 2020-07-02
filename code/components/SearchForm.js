import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView ,
  TouchableOpacity,
} from "react-native";
import { scaleSize } from "../constants/Layout";

export default function Form(props) {
  const [stocks, setStocks] = useState([]);
  const [state, setState] = useState(0);
  useEffect(() => {
    // if (props.state===""){
    //   let a = []
    //   setStocks(a);
    //   setState(state+1);
    //   console.log("haha");
    // }
    setStocks(
      props.stock.filter(
        (stock) =>
          stock.symbol.toLowerCase().indexOf(props.state.toLowerCase()) !==
            -1 ||
          stock.name.toLowerCase().indexOf(props.state.toLowerCase()) !== -1
      )
    );
  }, [props.state]);
  return (
    <ScrollView 
    style={style.scrollview}
    >
      {stocks.map((value, index) => (
        <TouchableOpacity
          style={style.flexRow}
          onPress={() => {
            props.add(value.symbol);
            props.navigation.jumpTo("Stocks", { symbol: value.symbol });
            // console.log(props)
          }}
          key={index}
        >
          <View>
            <Text style={style.symbol}> {value.symbol}</Text>
            <Text style={style.industry}> {value.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

let style = StyleSheet.create({
  scrollview:{
    flex: 1,
  },
  flexRow: {
    margin: scaleSize(5),
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#323234",
  },
  symbol: {
    fontSize: scaleSize(18),
    color: "#FFFFFF",
  },
  industry: {
    fontSize: scaleSize(13),
    color: "#8D8D92",
  },
});

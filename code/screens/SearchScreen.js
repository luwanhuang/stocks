import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard /* include other react native components here as needed */,
} from "react-native";
import { useStocksContext } from "../contexts/StocksContext";
import SearchBar from "../components/SearchBar";
import Form from "../components/SearchForm";
// FixMe: implement other components and functions used in SearchScreen here (don't just put all the JSX in SearchScreen below)

export default function SearchScreen({ navigation }) {
  const { ServerURL, addToWatchlist } = useStocksContext();
  const [state, setState] = useState("");
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    fetch(`${ServerURL}/all`)
      .then((res) => res.json())
      .then((stocks) =>
        stocks.map((stock) => ({
          symbol: stock.symbol,
          name: stock.name,
          industry: stock.industry,
        }))
      )
      .then((stocks) => {
        setStocks(stocks);
      });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* SearchBar for input search value, the Form to show the search reasult */}
        <SearchBar setState={setState} />
        <Form
          state={state}
          stock={stocks}
          add={addToWatchlist}
          navigation={navigation}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // FixMe: add styles here ...
  // use scaleSize(x) to adjust sizes for small/large screens
  container: {
    flex: 1,
  },
});

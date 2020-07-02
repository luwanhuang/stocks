import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View /* include other react-native components here as needed */,
} from "react-native";
import { useStocksContext } from "../contexts/StocksContext";
import Form from "../components/ScreenForm";
import Table from "../components/Table";

// FixMe: implement other components and functions used in StocksScreen here (don't just put all the JSX in StocksScreen below)
const list = [];
const check = [];
export default function StocksScreen({ route }) {
  const { ServerURL, watchList } = useStocksContext();
  const [state, setState] = useState([]);
  const [show, setShow] = useState("");
  // can put more code here
  useEffect(() => {
    // FixMe: fetch stock data from the server for any new symbols added to the watchlist and save in local StocksScreen state
    if (watchList === null || watchList === [] || watchList === undefined) {
      var m = 0;
    } else {
      var m = watchList.length;
    }
    if (m > 0) {
      let result = watchList.map((value) => {
        if (check.indexOf(value) === -1) {
          check.push(value);
          let m = fetch(`${ServerURL}/history?symbol=${value} `)
            .then((res) => res.json())
            .then((stocks) => ({
              symbol: stocks[0].symbol,
              close: stocks[0].close,
              open: stocks[0].open,
              high: stocks[0].high,
              low: stocks[0].low,
              name: stocks[0].name,
              volumes: stocks[0].volumes,
              percentage: (stocks[0].close - stocks[0].open) / stocks[0].open,
            }))
            .then((stocks) => {
              list.push(stocks);
              setShow(stocks);
              return Promise.resolve("ok");
            });
          return m;
        }
      });
      Promise.all(result).then(() => {
        setState([...list]);
      });
    }
  }, [watchList]);
  useEffect(() => {
    if (route.params !== undefined) {
      state.map((value) => {
        if (value.symbol === route.params.symbol) {
          setShow(value);
        }
      });
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      {/* the Form show the watchlist, the table show one stock details*/}
      <View style={styles.form}>
        <Form state={state} setShow={setShow} />
      </View>
      <View style={styles.table}>
        <Table show={show} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 5,
  },
  table: {
    flex: 2,
  },
});

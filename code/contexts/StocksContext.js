import React, { useState, useContext, useEffect } from "react";
import { AsyncStorage } from "react-native";

const StocksContext = React.createContext();

export const StocksProvider = ({ children }) => {
  const [state, setState] = useState([]);
  return (
    <StocksContext.Provider value={[state, setState]}>
      {children}
    </StocksContext.Provider>
  );
};

export const useStocksContext = () => {
  const [state, setState] = useContext(StocksContext);
  // can put more code here
  function addToWatchlist(newSymbol) {
    //FixMe: add the new symbol to the watchlist, save it in useStockContext state and persist to AsyncStorage
    AsyncStorage.getItem("list", (err, result) => {
      if (err) {
        AsyncStorage.setItem("list", JSON.stringify([]));
        addToWatchlist(newSymbol);
      } else {
        let newArray = JSON.parse(result);
        if (newArray.indexOf(newSymbol) === -1) {
          newArray.push(newSymbol);
          AsyncStorage.setItem("list", JSON.stringify(newArray), () => {
            setState(newArray);
            console.log(newArray);
          });
        }
      }
    });
  }

  useEffect(() => {
    // FixMe: Retrieve watchlist from persistent storage
    AsyncStorage.getItem("list", (err, result) => {
      setState(JSON.parse(result));
      if (err) {
        AsyncStorage.setItem("list", JSON.stringify([]));
      }
    });
  }, []);

  return {
    ServerURL: "http://131.181.190.87:3001",
    watchList: state,
    addToWatchlist,
  };
};

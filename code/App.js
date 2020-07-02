import * as React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { StocksProvider } from "./contexts/StocksContext";
import { scaleSize } from "./constants/Layout";

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <View style={styles.container}>
      <StocksProvider>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer theme={DarkTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={BottomTabNavigator}
              options={{
                headerTitleStyle: {
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: scaleSize(32),
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StocksProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


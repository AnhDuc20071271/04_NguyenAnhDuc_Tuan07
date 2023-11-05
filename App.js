import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen1 from "./Screen/Screen1";
import Screen2 from "./Screen/Screen2";
import { StyleSheet } from "react-native";

export default function App() {
  var stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name="Screen1" component={Screen1} />
        <stack.Screen name="Screen2" component={Screen2} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

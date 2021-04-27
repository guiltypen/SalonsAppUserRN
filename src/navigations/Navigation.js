import React from "react";

// Importing NavigationContainer
import { NavigationContainer } from "@react-navigation/native";
//import stack navigator
import { createStackNavigator } from "@react-navigation/stack";

// Importing components
import DrawerComponents from "./Drawer";
import AuthHome from "../components/AuthPages/AuthHome";
import SplashScreen from "../components/AuthPages/SplashScreen";
import Signin from "../components/AuthPages/SignIn";
import Signup from "../components/AuthPages/SignUp";
import Gender from "../components/AuthPages/Gender";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"splash"}
          screenOptions={{
            headerShown: false,
            // headerTransparent: true,
            // headerBackTitleVisible: false,
            // headerTintColor: "white",
          }}
        >
          <Stack.Screen name="SignIn" component={Signin} />
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen
            name="AuthHome"
            component={AuthHome}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Gender" component={Gender} />
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{ headerTitle: false }}
          />
          <Stack.Screen name="Drawer" component={DrawerComponents} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

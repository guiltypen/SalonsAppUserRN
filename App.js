import React from "react";
// Importing expo status bar
import { StatusBar } from "expo-status-bar";
// Importing theme provider
import { ThemeProvider } from "styled-components/native";

// Importing reqs from react native
// import { View, Text, ScrollView } from "react-native";
// Importing reqs from native base
// import { Content } from "native-base";

// Importing navigation component
import Navigation from "./src/navigations/Navigation";

// Defining app theme
const theme = {
  male: {
    backgroundColor: "#132239",
    purple: "#876AEA",
    darkPurple: "#463973",
    blue: "#156596",
    lightStatus: "light",
    darkStatus: "dark",
  },
  female: {
    backgroundColor: "#132239",
    purple: "#876AEA",
    darkPurple: "#463973",
    blue: "#156596",
    lightStatus: "light",
    darkStatus: "dark",
  },
};

const App = () => {
  return (
    <>
      {/* <ScrollView
        style={{
          flex: 1,
          width: "100%",
        }}
      > */}
      <ThemeProvider theme={theme.male}>
        <Navigation />
        {/* <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}

        {/* <View>
              <Text>Open up App.js to start working on your app!</Text>
            </View> */}
        {/* </View> */}
      </ThemeProvider>
      {/* </ScrollView> */}
      <StatusBar style={theme.male.lightStatus} />
    </>
  );
};

export default App;

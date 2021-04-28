import React, { useState } from "react";
// Importing reqs from react-native
import { View, ImageBackground } from "react-native";
// Importing Drawer Navigators
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
// Importing for animation
import Animated from "react-native-reanimated";
// Importing stack navigator
import { createStackNavigator } from "@react-navigation/stack";
// Importing Linear gradient
import { LinearGradient } from "expo-linear-gradient";

// Importing Stores
import userStore from "../stores/UserStore";
import { observer } from "mobx-react";

// Importing components
import SalonList from "../components/salonPages/SalonList";
import SalonDetails from "../components/salonPages/SalonDetails";
import CategoryDetails from "../components/salonPages/Category/CategoryDetails";
import ServiceDetails from "../components/salonPages/Service/ServiceDetails";
import Profile from "../components/AuthPages/Profile";
import AuthHome from "../components/AuthPages/AuthHome";
<<<<<<< HEAD
import AppointmentDetail from "../components/salonPages/AppointmentDetail";
=======
import AppointmentDetail from "../components/salonPages/Booking/AppointmentDetail";
>>>>>>> 9c15ec828295318bffaca6251a048bd4526f7490

import MenuIcons from "../components/NavBar/NavBarIcons";

const SalonPages = createStackNavigator();

const Screens = ({ style }) => {
  return (
    <>
      <Animated.View style={[{ flex: 1, overflow: "hidden" }, style]}>
        <SalonPages.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: "#132239" },
            // headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerRight: () => <MenuIcons navigation={navigation} />,
          })}
        >
          <SalonPages.Screen
            name="Salons"
            component={SalonList}
            options={{ headerLeft: null }}
          />
          <SalonPages.Screen name="SalonDetails" component={SalonDetails} />
          <SalonPages.Screen
            name="CategoryDetails"
            component={CategoryDetails}
          />
          <SalonPages.Screen name="ServiceDetails" component={ServiceDetails} />
<<<<<<< HEAD
          {/* <SalonPages.Screen name="Appointment" component={AppointmentDetail} /> */}
=======
          <SalonPages.Screen
            name="AppointmentDetail"
            component={AppointmentDetail}
          />
>>>>>>> 9c15ec828295318bffaca6251a048bd4526f7490
        </SalonPages.Navigator>
      </Animated.View>
    </>
  );
};

/////////////////////////////////

const ProfilePage = createStackNavigator();

const ProfileScreens = ({ style }) => {
  return (
    <>
      <Animated.View style={[{ flex: 1, overflow: "hidden" }, style]}>
        <ProfilePage.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: "#132239" },
            // headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerRight: () => <MenuIcons navigation={navigation} />,
          })}
        >
          <ProfilePage.Screen
            name="Profile"
            component={Profile}
            options={{ headerLeft: null }}
          />
          <ProfilePage.Screen name="AuthHome" component={AuthHome} />
        </ProfilePage.Navigator>
      </Animated.View>
    </>
  );
};

/////////////////////////////////

const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
  const handleSubmit = async () => {
    await userStore.signout();
    props.navigation.replace("AuthHome");
  };
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <DrawerItem
        label="Salons"
        labelStyle={{ color: "white" }}
        onPress={() => props.navigation.navigate("Salons")}
      />
      <DrawerItem
        label="Profile"
        labelStyle={{ color: "white" }}
        onPress={() => props.navigation.navigate("ProfileScreens")}
      />
      <DrawerItem
        label="logOut"
        labelStyle={{ color: "white" }}
        onPress={handleSubmit}
      />
    </DrawerContentScrollView>
  );
};

const DrawerComponents = ({ navigation }) => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.85],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  const screensStyles = { borderRadius, transform: [{ scale }] };
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#156596", "#132239", "#132239"]}
    >
      {/* <View style={{ flex: 1, backgroundColor: "#156596" }}> */}
      <Drawer.Navigator
        initialRouteName="splash"
        drawerType="slide"
        drawerStyle={{ width: "40%", backgroundColor: "transparent" }}
        overlayColor="transparent"
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "green",
          inactiveTintColor: "green",
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} navigation={navigation} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={screensStyles} />}
        </Drawer.Screen>
        <Drawer.Screen name="ProfileScreens">
          {(props) => <ProfileScreens {...props} style={screensStyles} />}
        </Drawer.Screen>
      </Drawer.Navigator>
      {/* </View> */}
    </LinearGradient>
  );
};

export default observer(DrawerComponents);

{
  /* <SalonPages.Screen
options={{ headerShown: false }}
name="SignIn"
component={Signin}
/>
<SalonPages.Screen
options={{ headerShown: false }}
name="SignUp"
component={Signup}
/>
<SalonPages.Screen
name="AuthHome"
component={AuthHome}
options={{ headerShown: false }}
/>
<SalonPages.Screen
options={{ headerShown: false }}
name="Gender"
component={Gender}
/>
<SalonPages.Screen
name="splash"
component={SplashScreen}
options={{ headerShown: false }}
/>
<SalonPages.Screen
name="Salons"
component={SalonList}
options={{ headerLeft: null,  }}
/> */
}

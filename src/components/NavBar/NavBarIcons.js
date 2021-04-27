import React from "react";
// Icon
import Icon from "react-native-vector-icons/Ionicons";
import { View } from "react-native";

const MenuIcons = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
      }}
    >
      <Icon
        name="funnel-outline"
        size={25}
        color="white"
        onPress={() => navigation.openDrawer()}
      />
      <Icon
        name="menu"
        size={30}
        color="white"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default MenuIcons;

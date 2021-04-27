import React from "react";
import { View } from "react-native";
import {
  AuthImg,
  GenderImg,
  AuthContainer,
  AuthTitle,
  BackgroundSq,
} from "../../styles";

const Gender = ({ navigation }) => {
  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/PurpleRec.png")} />
      <AuthImg source={require("../../../assets/logosolidwhite.png")} />
      <View style={{ alignItems: "center" }}>
        <GenderImg
          onPress={() => navigation.navigate("SignUp")}
          source={require("../../../assets/maleIcon.png")}
        />
        <AuthTitle>Male</AuthTitle>
      </View>
      <GenderImg source={require("../../../assets/femaleIcon.png")} />
      <AuthTitle>Female</AuthTitle>
    </AuthContainer>
  );
};

export default Gender;

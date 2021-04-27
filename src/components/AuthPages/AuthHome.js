import React from "react";
import userStore from "../../stores/UserStore";
import { observer } from "mobx-react";

import {
  AuthImg,
  AuthContainer,
  AuthTitle,
  AuthButtonB,
  AuthButtonText,
  BackgroundSq,
} from "../../styles";

const AuthHome = ({ navigation }) => {
  if (userStore.user) navigation.replace("Drawer");
  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <AuthImg source={require("../../../assets/logosolidwhite.png")} />
      <AuthButtonB onPress={() => navigation.navigate("SignIn")}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButtonB>
      <AuthButtonB onPress={() => navigation.navigate("SignUp")}>
        <AuthButtonText>Sign Up</AuthButtonText>
      </AuthButtonB>
      <AuthTitle onPress={() => navigation.navigate("Gender")}>
        Create an account later
      </AuthTitle>
    </AuthContainer>
  );
};

export default observer(AuthHome);

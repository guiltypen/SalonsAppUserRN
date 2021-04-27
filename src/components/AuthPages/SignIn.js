import React, { useState } from "react";
import {
  AuthImg,
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonP,
  AuthButtonText,
  BackgroundSq,
} from "../../styles";
import userStore from "../../stores/UserStore";
import { observer } from "mobx-react";

const SignIn = ({ navigation }) => {
  if (userStore.user) navigation.replace("Drawer");

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await userStore.signin(user);
  };

  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/PurpleRec.png")} />
      <AuthImg source={require("../../../assets/logosolidwhite.png")} />
      <AuthTitle>Please enter your username and password</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButtonP onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButtonP>
    </AuthContainer>
  );
};

export default observer(SignIn);

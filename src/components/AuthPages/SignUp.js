import React, { useState } from "react";
import {
  AuthImgSignUp,
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  BackgroundSq,
  AuthButtonB,
  GenderContainer,
  GenderImg,
  GenderTitle,
  AuthText,
} from "../../styles";
import userStore from "../../stores/UserStore";
import { Text, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";

const SignUp = ({ navigation }) => {
  if (userStore.user) navigation.replace("Drawer");
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
  });

  const handleSubmit = async () => {
    await userStore.signup(user);
    // navigation.replace("Salons");
    // console.log("user:",user)
  };

  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <AuthImgSignUp source={require("../../../assets/logosolidwhite.png")} />
      <AuthTitle>Create a new Account</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="First Name"
        required
        autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <AuthTextInput
        placeholder="Last Name"
        required
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <AuthTextInput
        placeholder="Phone Number"
        required
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
        onChangeText={(phone) => setUser({ ...user, phone })}
      />
      <AuthTextInput
        placeholder="Email"
        required
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <AuthTextInput
        placeholder="Password"
        required
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <GenderContainer>
        <GenderTitle> Gender : {user.gender}</GenderTitle>
        {/* <AuthText>{user.gender}</AuthText> */}
      </GenderContainer>
      <GenderContainer>
        <TouchableOpacity onPress={() => setUser({ ...user, gender: "male" })}>
          <GenderImg source={require("../../../assets/maleIcon.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setUser({ ...user, gender: "female" })}
        >
          <GenderImg source={require("../../../assets/femaleIcon.png")} />
        </TouchableOpacity>
      </GenderContainer>
      <AuthButtonB onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButtonB>
    </AuthContainer>
  );
};

export default observer(SignUp);

import React, { useState } from "react";
import {
  AuthImgSignUp,
  GenderTitle,
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  BackgroundSq,
  AuthButtonUpdate,
  ProfileText,
  GenderContainer,
  AuthText,
  GenderImg,
} from "../../styles";
import { TouchableOpacity } from "react-native";
import userStore from "../../stores/UserStore";
import { observer } from "mobx-react";

const Profile = ({ navigation }) => {
  // if (userStore.user) navigation.replace("Gender"); //Replace in home

  //   if (!userStore.user) return <Text> loading</Text>;

  const [user, setUser] = useState({
    username: userStore.user.username,
    id: userStore.user.id,
    firstName: userStore.user.firstName,
    lastName: userStore.user.lastName,
    phone: userStore.user.phone,
    email: userStore.user.email,
    gender: userStore.user.gender,
  });

  console.log(user);

  const handleSubmit = async () => {
    await userStore.updateUser(user);
    // console.log("user:",user)
  };

  return (
    <AuthContainer>
      <AuthTitle>Edit Profile</AuthTitle>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      {/* <AuthImgSignUp source={require("../../../assets/logosolidwhite.png")} /> */}
      <ProfileText>UserName</ProfileText>
      <AuthTextInput
        value={user.username}
        placeholderTextColor="#A6AEC1"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <ProfileText>fisrt name</ProfileText>
      <AuthTextInput
        value={user.firstName}
        placeholderTextColor="#A6AEC1"
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <ProfileText>last name</ProfileText>
      <AuthTextInput
        value={user.lastName}
        placeholderTextColor="#A6AEC1"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <ProfileText>phone Number</ProfileText>
      <AuthTextInput
        value={user.phone}
        keyboardType="numeric"
        placeholderTextColor="#A6AEC1"
        onChangeText={(phone) => setUser({ ...user, phone })}
      />
      <ProfileText>email</ProfileText>
      <AuthTextInput
        value={user.email}
        placeholderTextColor="#A6AEC1"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <GenderContainer>
        <GenderTitle>Choose Gender :</GenderTitle>
        <AuthText>{user.gender}</AuthText>
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

      <AuthButtonUpdate onPress={handleSubmit}>
        <AuthButtonText>Update Profile</AuthButtonText>
      </AuthButtonUpdate>
    </AuthContainer>
  );
};

export default observer(Profile);

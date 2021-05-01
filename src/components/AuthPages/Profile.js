import React, { useState } from "react";
import {
  GenderTitle,
  AuthContainer,
  ProfilePageContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  BackgroundSq,
  AuthButtonUpdate,
  ProfileText,
  GenderContainer,
  GenderImg,
} from "../../styles";
import { TouchableOpacity, Text } from "react-native";
import userStore from "../../stores/UserStore";
import { observer } from "mobx-react";
import Loading from "../Loading/Loading";

import styled from "styled-components/native";

const Profile = ({ navigation }) => {
  // if (userStore.user) navigation.replace("Gender"); //Replace in home

  const [user, setUser] = useState(
    userStore.user
      ? {
          username: userStore.user.username,
          id: userStore.user.id,
          firstName: userStore.user.firstName,
          lastName: userStore.user.lastName,
          phone: userStore.user.phone,
          email: userStore.user.email,
          gender: userStore.user.gender,
        }
      : null
  );

  if (!userStore.user) return <Loading />;

  //   console.log(user);

  const handleSubmit = async () => {
    await userStore.updateUser(user);
    // console.log("user:",user)
  };

  return (
    <AuthContainer>
      <AuthTitle>Edit Profile</AuthTitle>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      {/* <AuthImgSignUp source={require("../../../assets/logosolidwhite.png")} /> */}
      <ProfilePageContainer>
        <DifContainer>
          <ProfileText>Username</ProfileText>
        </DifContainer>
        <AuthTextInput
          value={user.username}
          placeholderTextColor="#A6AEC1"
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <DifContainer>
          <ProfileText>Fisrt name</ProfileText>
        </DifContainer>
        <AuthTextInput
          value={user.firstName}
          placeholderTextColor="#A6AEC1"
          onChangeText={(firstName) => setUser({ ...user, firstName })}
        />
        <DifContainer>
          <ProfileText>Last name</ProfileText>
        </DifContainer>
        <AuthTextInput
          value={user.lastName}
          placeholderTextColor="#A6AEC1"
          onChangeText={(lastName) => setUser({ ...user, lastName })}
        />
        <DifContainer>
          <ProfileText>Phone Number</ProfileText>
        </DifContainer>
        <AuthTextInput
          value={user.phone}
          keyboardType="numeric"
          placeholderTextColor="#A6AEC1"
          onChangeText={(phone) => setUser({ ...user, phone })}
        />

        <DifContainer>
          <ProfileText>email</ProfileText>
        </DifContainer>

        <AuthTextInput
          value={user.email}
          placeholderTextColor="#A6AEC1"
          onChangeText={(email) => setUser({ ...user, email })}
        />
        <GenderContainer>
          <GenderTitle> Gender : {user.gender}</GenderTitle>
          {/* <AuthText>{user.gender}</AuthText> */}
        </GenderContainer>
        <GenderContainer>
          <TouchableOpacity
            onPress={() => setUser({ ...user, gender: "male" })}
          >
            <GenderImg source={require("../../../assets/maleIcon.png")} />
          </TouchableOpacity>
          {/* <TouchableOpacity
          onPress={() => setUser({ ...user, gender: "female" })}
        >
          <GenderImg source={require("../../../assets/femaleIcon.png")} />
        </TouchableOpacity> */}
        </GenderContainer>

        <AuthButtonUpdate onPress={handleSubmit}>
          <AuthButtonText>Update Profile</AuthButtonText>
        </AuthButtonUpdate>
      </ProfilePageContainer>
    </AuthContainer>
  );
};

export default observer(Profile);

const DifContainer = styled.View`
  width: 230px;
  height: 40px;
  /* background-color: red; */
  justify-content: center;
`;

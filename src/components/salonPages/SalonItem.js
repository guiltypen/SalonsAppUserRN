import { TouchableOpacity } from "react-native";
import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components/native";
// import salonStore from "../../stores/SalonStore";
// Importing Icons
import { Entypo } from "@expo/vector-icons";
const SalonItem = ({ salon, navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("SalonDetails", { thisSalon: salon })
        }
      >
        <ItemsWrapper>
          <ItemsContainer>
            <ImageContainer>
              <Image source={{ uri: `${salon.image}` }} />
            </ImageContainer>
            <TextContainer>
<<<<<<< HEAD
<<<<<<< HEAD
              <SalonTitle> {salon.username}</SalonTitle>
              <SalonTitle> {salon.address}</SalonTitle>
=======
              <SalonTitle> Salon: {salon.username}</SalonTitle>
              <SalonTitle> Location: {salon.address}</SalonTitle>
>>>>>>> 9c15ec828295318bffaca6251a048bd4526f7490
=======
              <SalonTitle> {salon.username}</SalonTitle>
              <LocationContainer>
                <Entypo name="location" size={22} color="white" />
                <SalonTitle>{salon.address}</SalonTitle>
              </LocationContainer>
>>>>>>> 7e29bbb90b28c24519ba8de4bb555fca3d28b1ea
            </TextContainer>
          </ItemsContainer>
        </ItemsWrapper>
      </TouchableOpacity>
    </>
  );
};
export default observer(SalonItem);

const ItemsWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ItemsContainer = styled.View`
  width: 90%;
<<<<<<< HEAD
  height: 120px;
  background-color: #132239;

  align-items: center;
=======
  background-color: #132239;
>>>>>>> 9c15ec828295318bffaca6251a048bd4526f7490
  /* justify-content: space-around; */
  flex-direction: row;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid white;
`;

const ImageContainer = styled.View`
  width: 90px;
  height: 90px;
  /* background-color: grey; */
  background-color: white;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 20px;
  border: 1px solid white;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 18px;
`;

const TextContainer = styled.View`
  height: 80px;
<<<<<<< HEAD

=======
  margin-top: auto;
  margin-bottom: auto;
  /* background-color: green; */
>>>>>>> 9c15ec828295318bffaca6251a048bd4526f7490
  margin: 5px;
  width: 200px;
`;

const SalonTitle = styled.Text`
  color: white;
  padding: 5px;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 20px;
  /* background-color: red; */
  width: 200px;
`;

const LocationContainer = styled.View`
  flex-direction: row;
  /* background-color: red; */
  left: 10px;
  top: 10px;
  width: 100px;
  justify-content: space-between;
  align-items: center;
`;

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
              <SalonTitle> {salon.username}</SalonTitle>
              <LocationContainer>
                <Entypo name="location" size={22} color="white" />
                <SalonTitle>{salon.address}</SalonTitle>
              </LocationContainer>
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
  background-color: #132239;
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
  margin-top: auto;
  margin-bottom: auto;
  /* background-color: green; */
  margin: 5px;
  width: 200px;
`;

const SalonTitle = styled.Text`
  color: white;
  padding: 5px;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 20px;
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

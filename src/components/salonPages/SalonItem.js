import { TouchableOpacity } from "react-native";
import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components/native";
// import salonStore from "../../stores/SalonStore";
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
            <ImageContainer></ImageContainer>
            <TextContainer>
              <SalonTitle> Salon: {salon.username}</SalonTitle>
              <SalonTitle> Location: {salon.address}</SalonTitle>
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
  border: 2px solid white;
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
  font-size: 13px;
  padding: 5px;
  font-weight: bold;
  font-size: 15px;
`;

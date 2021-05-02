import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components/native";
import { AppointmentContainer, BackgroundSq } from "../../../styles";
import DateTime from "./DateTime";
import { View } from "react-native";

const PlacingAppointment = ({ navigation, route }) => {
  //   const { thisSpecialist } = route.params;
  const { found } = route.params;

  const thisService = found[0];
  const thisSpecialist = found[1];
  //   console.log(thisService.foundService);

  return (
    <AppointmentContainer>
      <BackgroundSq source={require("../../../../assets/BlueRec.png")} />
      <ItemsWrapper>
        <ItemsContainer>
          <ImageContainer>
            <Image source={{ uri: `${thisSpecialist.specialist.image}` }} />
          </ImageContainer>
          <TextContainer>
            <SalonTitle> {thisSpecialist.specialist.firstName} </SalonTitle>
            <SalonTitle> {thisSpecialist.specialist.phone} </SalonTitle>
          </TextContainer>
        </ItemsContainer>
      </ItemsWrapper>
      <View>
        <DateTime
          thisSpecialist={thisSpecialist.specialist}
          service={thisService.foundService}
        />
      </View>
    </AppointmentContainer>
  );
};
export default observer(PlacingAppointment);

const ItemsWrapper = styled.View`
  width: 120%;
  justify-content: center;
  align-items: center;
  margin-top: -180px;
`;

const ItemsContainer = styled.View`
  width: 100%;
  background-color: #132239;
  /* justify-content: space-around; */
  flex-direction: row;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
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
  justify-content: center;
`;

const SalonTitle = styled.Text`
  color: white;
  font-size: 20px;
  padding: 5px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

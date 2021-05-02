import React from "react";
import { TouchableOpacity } from "react-native";
import { observer } from "mobx-react";
import styled from "styled-components/native";
import {
  AppointmentContainer,
  BackgroundSq,
  AppointmentText,
  AppointmentTime,
} from "../../../styles";
import salonStore from "../../../stores/SalonStore";

const AppointmentDetail = ({ navigation, route }) => {
  const { found } = route.params;

  const thisSpecialist1 = found[0];
  const thisService = found[1];

  const foundSalon = salonStore.salons.find(
    (salon) => salon.id === thisSpecialist1.thisSpecialist.salonId
  );

  const Date = "12/5/2020";
  const Time = "4:00 PM";

  return (
    <AppointmentContainer>
      <BackgroundSq source={require("../../../../assets/BlueRec.png")} />
      <ItemsContainer>
        <ImageContainer>
          <Image source={{ uri: `${thisSpecialist1.thisSpecialist.image}` }} />
        </ImageContainer>
        <TextContainer>
          <AppointmentTime>{Date}</AppointmentTime>
          <AppointmentTime>{Time}</AppointmentTime>
          <AppointmentText>At {foundSalon.username}</AppointmentText>
          <AppointmentText>
            with {thisSpecialist1.thisSpecialist.firstName}
          </AppointmentText>
          <AppointmentText>For {thisService.service.name}</AppointmentText>
          <AppointmentText>
            Service fees: {thisService.service.price} K.D.
          </AppointmentText>
        </TextContainer>
      </ItemsContainer>
      <TouchableOpacity onPress={() => navigation.navigate("Salons")}>
        <BookingText>Book another appointment.</BookingText>
      </TouchableOpacity>
    </AppointmentContainer>
  );
};
export default observer(AppointmentDetail);

const ItemsWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ItemsContainer = styled.View`
  width: 90%;
  background-color: #132239;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 30px;
  /* border-color: #876aea; */
  border-color: white;
  border-width: 3px;
`;

const ImageContainer = styled.View`
  width: 90px;
  height: 90px;
  /* background-color: grey; */
  background-color: white;
  margin: 5px;
  bottom: 20px;
  border-radius: 20px;
`;

const TextContainer = styled.View`
  height: 80px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 20px;
`;

const BookingText = styled.Text`
  /* color: #876aea; */
  color: white;
  font-size: 15px;
  font-weight: bold;
  margin: 30px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 18px;
`;

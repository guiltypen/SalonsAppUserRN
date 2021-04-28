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

const AppointmentDetail = ({ navigation }) => {
  const Date = "12/5/2020";
  const Time = "4:00 PM";
  const SalonName = "The Hair Cut";
  const SpatialistName = "Ahmad Hashem";
  const ServiceName = "Hair Dyeing";
  return (
    <AppointmentContainer>
      <BackgroundSq source={require("../../../../assets/PurpleRec.png")} />
      <ItemsContainer>
        <ImageContainer></ImageContainer>
        <TextContainer>
          <AppointmentTime>{Date}</AppointmentTime>
          <AppointmentTime>{Time}</AppointmentTime>
          <AppointmentText>At {SalonName}</AppointmentText>
          <AppointmentText>with {SpatialistName}</AppointmentText>
          <AppointmentText>For {ServiceName}</AppointmentText>
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
  border-color: #876aea;
  border-width: 3px;
`;

const ImageContainer = styled.View`
  width: 90px;
  height: 90px;
  background-color: grey;
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
  color: #876aea;
  font-size: 15px;
  font-weight: bold;
  margin: 30px;
`;

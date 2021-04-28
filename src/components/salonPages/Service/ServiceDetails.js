import React, { useEffect } from "react";
// Importing specialistStore
import specialistStore from "../../../stores/specialistStore";
// Importing serviceStore
import serviceStore from "../../../stores/ServiceStore";
// Importing observer
import { observer } from "mobx-react";
//Importing styled
import styled from "styled-components/native";
import { BackgroundSq } from "../styles";
import {
  //   TouchableOpacity,
  ScrollView,
  //   FlatList,
  //   View,
  Text,
  TouchableOpacity,
} from "react-native";

const ServiceDetails = ({ navigation, route }) => {
  const { thisService } = route.params;

  useEffect(() => {
    specialistStore.fetchSpecialists();
  }, []);

  useEffect(() => {
    serviceStore.fetchServices();
  }, []);

<<<<<<< HEAD
=======
  if (specialistStore.loading) return <Text> Loading </Text>;
>>>>>>> 9c15ec828295318bffaca6251a048bd4526f7490
  if (serviceStore.loading) return <Text> Loading </Text>;

  if (specialistStore.loading) return <Text> Loading </Text>;
  const foundService = serviceStore.services.find(
    (service) => service.id === +thisService
  );

  const foundSpecialists = foundService.specialistServices.map(
    (specialist) => specialist.specialistId
  );

  const filteredSpecialist = specialistStore.specialists.filter(
    (specialist) =>
      specialist.id ===
      foundSpecialists.find((specialistId) => specialist.id === specialistId)
  );

  // console.log(specialistStore.specialists.filter((specialist) => specialist.id === +foundService.specialistId));
  //   console.log(thisService);
  //   console.log(foundSpecialists);
  console.log(foundService);
  return (
    <ServiceDetailsWrapper>
      <BackgroundSq source={require("../../../../assets/BlueRec.png")} />

      {/*  */}
      <DescriptionContainer>
        <BoldText> Description</BoldText>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ThinText>{foundService.description}</ThinText>
        </ScrollView>
      </DescriptionContainer>
      {/* <Text> {thisService}</Text> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <ItemsWrapper>
          {filteredSpecialist.map((specialist) => (
            <TouchableOpacity
              style={{ width: "100%", left: "5%" }}
              onPress={() => navigation.navigate("AppointmentDetail")}
            >
              <ItemsContainer key={specialist.id}>
                <ImageContainer></ImageContainer>
                <TextContainer>
                  <SalonTitle> Specialist: {specialist.username}</SalonTitle>
                  <SalonTitle> Phone number: {specialist.phone}</SalonTitle>
                </TextContainer>
              </ItemsContainer>
            </TouchableOpacity>
          ))}
        </ItemsWrapper>
      </ScrollView>
    </ServiceDetailsWrapper>
  );
};

export default observer(ServiceDetails);

const ServiceDetailsWrapper = styled.View`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  background-color: ${(props) => props.theme.backgroundColor};
`;

const DescriptionContainer = styled.View`
  width: 90%;
  height: 110px;
  /* background-color: rgba(255, 255, 255, 0.7); */
  margin-top: 40px;
  /* border: 2px solid white; */
`;

const BoldText = styled.Text`
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  font-size: 20px;
  margin-bottom: 8px;
`;

const ThinText = styled.Text`
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  font-size: 15px;
  margin-bottom: 5px;
  padding: 5px;
  margin-left: 8px;
`;

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
  margin-bottom: 15px;
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

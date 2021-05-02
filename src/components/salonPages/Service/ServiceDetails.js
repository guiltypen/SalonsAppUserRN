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
// Importing DateTime
import DateTime from "../Booking/DateTime";
import Loading from "../../Loading/Loading";

const ServiceDetails = ({ navigation, route }) => {
  const { thisService } = route.params;

  useEffect(() => {
    specialistStore.fetchSpecialists();
  }, []);

  useEffect(() => {
    serviceStore.fetchServices();
  }, []);

  if (specialistStore.loading) return <Loading />;
  if (serviceStore.loading) return <Loading />;

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

  // const times1 = ["3:30 PM", "5:00 PM", "6:00 PM", "8:00 PM"];

  return (
    <ServiceDetailsWrapper>
      <BackgroundSq source={require("../../../../assets/BlueRec.png")} />

      <DescriptionContainer>
        <BoldTextContainer>
          <BoldText>Description</BoldText>
        </BoldTextContainer>
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
            <ItemsContainer key={specialist.id}>
              <ImageContainer>
                <Image source={{ uri: `${specialist.image}` }} />
              </ImageContainer>
              <TextContainer>
                <SalonTitle> {specialist.username}</SalonTitle>
                <TimeButtonsWrapper>
                  <DateTime
                    thisSpecialist={specialist}
                    service={foundService}
                    navigation={navigation}
                  />
                </TimeButtonsWrapper>
              </TextContainer>
            </ItemsContainer>
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

const BoldTextContainer = styled.View`
  width: 140px;
  height: 40px;
  background-color: ${(props) => props.theme.backgroundColor};
  justify-content: center;
  border-radius: 10px;
  align-items: center;
`;

const BoldText = styled.Text`
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  font-size: 20px;
`;

const ThinText = styled.Text`
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  font-size: 18px;
  margin-bottom: 5px;
  padding: 5px;
  margin-left: 4px;
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
  left: 10px;
  top: 8px;
  /* align-items: center; */
`;

const SalonTitle = styled.Text`
  color: white;
  font-size: 20px;
  /* padding: 5px; */
  font-weight: bold;
  text-transform: capitalize;
`;

const TimeButtonsWrapper = styled.View`
  width: 120%;
  height: 40px;
  flex-direction: row;
  /* background-color: grey; */
  left: 5px;
  margin-top: 3px;
`;

const TimeButtonContainer = styled.View`
  width: 70px;
  height: 25px;
  margin: 3px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const TimeButton = styled.Text`
  font-size: 12px;
`;

{
  /* <ScrollView
horizontal={true}
showsHorizontalScrollIndicator={false}
>
{times1.map((time) => (
 <TouchableOpacity
key={time.id}
onPress={() =>
navigation.navigate("PlacingAppointment", {
found: [{ foundService }, { specialist }],
})
}
>
<TimeButtonContainer>
  <TimeButton>{time}</TimeButton>
</TimeButtonContainer>
</TouchableOpacity>
))}
</ScrollView> */
}

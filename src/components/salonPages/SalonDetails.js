import React, { useEffect } from "react";

// Importing store
import salonStore from "../../stores/SalonStore";

//Importing styled
import styled from "styled-components/native";
import { BackgroundSq } from "./styles";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const SalonDetails = ({ navigation, route }) => {
  const { thisSalon } = route.params;

  //   useEffect(() => {
  //     salonStore.fetchSalons()
  //   }, [])

  const foundSalon = salonStore.salons.find(
    (salon) => salon.id === +thisSalon.id
  );

  return (
    <SalonDetailsWrapper>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <SalonDetailsContainer>
        <ImagesContainer>
          {/* <Image
            source={foundSalon.image}
            style={{ width: "30%", height: "10%" }}
          /> */}
        </ImagesContainer>
        <SalonInfoContainer>
          <BoldText> Salon Information</BoldText>
          <ThinText> Location: {foundSalon.address}</ThinText>
          <ThinText> Working hours: </ThinText>
        </SalonInfoContainer>

        {/*  */}
        <CategoriesContainer>
          <BoldText> Categories</BoldText>
          {foundSalon.categories.length > 0 ? (
            <CategoriesIconsWrapper>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {foundSalon.categories.map((category) => (
                  <IconNameContainer>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("CategoryDetails", {
                          thisCategory: category,
                        })
                      }
                    >
                      <IconStyle
                        category={category}
                        key={category.id}
                        navigation={navigation}
                      ></IconStyle>
                      <IconName> {category.name} </IconName>
                    </TouchableOpacity>
                  </IconNameContainer>
                ))}
              </ScrollView>
            </CategoriesIconsWrapper>
          ) : (
            <ThinText> This salon has no categories yet! </ThinText>
          )}
        </CategoriesContainer>

        {/*  */}
        <ContactInfoContainer>
          <BoldText> Contact</BoldText>
          <ThinText> Phone: {foundSalon.phone}</ThinText>
        </ContactInfoContainer>
      </SalonDetailsContainer>
    </SalonDetailsWrapper>
  );
};

export default SalonDetails;

const SalonDetailsWrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const SalonDetailsContainer = styled.View`
  width: 90%;
  min-height: 100%;
  margin-top: 30px;
`;

const ImagesContainer = styled.View`
  height: 180px;
  background-color: white;
  flex-wrap: wrap;
`;

const SalonInfoContainer = styled.View`
  height: 140px;
  /* background-color: grey; */
  margin-top: 30px;
  justify-content: center;
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

const CategoriesContainer = styled.View`
  height: 180px;
  /* background-color: pink; */
  margin-top: 30px;
`;

const CategoriesIconsWrapper = styled.View`
  width: 98%;
  height: 160px;
  flex-direction: row;
  /* background-color: green; */
  align-self: center;
  /* justify-content: center; */
  align-items: center;
`;

const IconNameContainer = styled.View`
  width: 120px;
  height: 160px;
  /* background-color: blue; */
  margin-right: 5px;
  justify-content: center;
  align-items: center;
`;
const IconStyle = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 60px;
  background-color: black;
`;

const IconName = styled.Text`
  width: 100px;
  height: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  font-size: 15px;
  /* background-color: purple; */
  margin-top: 8px;
  text-align: center;
`;

const ContactInfoContainer = styled.View`
  height: 160px;
  /* background-color: red; */
  margin-top: 30px;
`;

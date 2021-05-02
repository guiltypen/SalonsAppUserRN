import React from "react";

// Importing store
import salonStore from "../../stores/SalonStore";

// Importing Icons
import { Entypo, MaterialIcons, Feather } from "@expo/vector-icons";

//Importing styled
import styled from "styled-components/native";
import { BackgroundSq } from "./styles";
import { TouchableOpacity, ScrollView } from "react-native";

const SalonDetails = ({ navigation, route }) => {
  const { thisSalon } = route.params;

  const foundSalon = salonStore.salons.find(
    (salon) => salon.id === +thisSalon.id
  );

  return (
    <SalonDetailsWrapper>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <SalonDetailsContainer>
        <ImagesContainer>
          <SalonImage source={{ uri: `${foundSalon.image}` }} />
        </ImagesContainer>
        <SalonInfoContainer>
          <TimeLocationContainer>
            <Entypo name="location" size={24} color="white" />
            <ThinText>{foundSalon.address}</ThinText>
          </TimeLocationContainer>
          <TimeLocationContainer>
            <MaterialIcons name="access-time" size={28} color="white" />
            <ThinText>10 - 8</ThinText>
          </TimeLocationContainer>
          <TimeLocationContainer>
            <Feather name="phone-call" size={24} color="white" />
            <ThinText> {foundSalon.phone}</ThinText>
          </TimeLocationContainer>
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
                  <IconNameContainer key={category}>
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
                      >
                        <CategoryImage source={{ uri: `${category.image}` }} />
                      </IconStyle>
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

const SalonImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ImagesContainer = styled.View`
  height: 180px;
  background-color: white;
  flex-wrap: wrap;
  border-radius: 10px;
`;

const SalonInfoContainer = styled.View`
  height: 140px;
  /* background-color: grey; */
  margin-top: 20px;
  justify-content: space-between;
  left: 5px;
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
  font-size: 18px;
  margin-bottom: 5px;
  padding: 5px;
  margin-left: 15px;
  text-transform: capitalize;
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

const CategoryImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 60px;
`;

const IconStyle = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 60px;
  background-color: #132239;
  border: 2px solid white;
  /* justify-content: center; */
  /* flex-wrap: wrap; */
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

const TimeLocationContainer = styled.View`
  flex-direction: row;
`;

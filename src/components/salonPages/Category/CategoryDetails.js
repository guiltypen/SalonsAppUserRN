import React from "react";

//Importing styled
import styled from "styled-components/native";
import { BackgroundSq } from "../styles";
import { TouchableOpacity } from "react-native";

import { FlatGrid } from "react-native-super-grid";

const CategoryDetails = ({ navigation, route }) => {
  const { thisCategory } = route.params;

  const thisCategoryServicesNames = thisCategory.services;
  return (
    <CategoryDetailsWrapper>
      <BackgroundSq source={require("../../../../assets/BlueRec.png")} />
      <ServicesWrapper>
        <FlatGrid
          itemDimension={150}
          //   numColumns={2}
          data={thisCategoryServicesNames}
          keyExtractor={(item) => item.id}
          spacing={20}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ServiceDetails", {
                  thisService: item.id,
                })
              }
            >
              <ServiceInfoContainer>
                <ServiceInfoText>{item.name}</ServiceInfoText>
              </ServiceInfoContainer>
            </TouchableOpacity>
          )}
        />
      </ServicesWrapper>

      {/* <Text>Category Details page {thisCategory.name}</Text> */}
    </CategoryDetailsWrapper>
  );
};

export default CategoryDetails;

const CategoryDetailsWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const ServicesWrapper = styled.View`
  width: 100%;
  height: 93%;
  top: -10px;
  /* background-color: grey; */
`;

const ServiceInfoContainer = styled.View`
  width: 180px;
  height: 180px;
  background-color: #132239;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 2px solid white;
`;
const ServiceInfoText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

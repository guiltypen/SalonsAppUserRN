import React from "react";
// Importing splash screen Image
import splashImage from "../../../assets/Salonslogo.png";
// Importing splash background
import splashBackground from "../../../assets/headerBG.png";

//Importing styled
import styled from "styled-components/native";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("AuthHome");
  }, 3000);
  return (
    <>
      <SplashBackground source={splashBackground}>
        <SplashInfoContainer>
          <SplashImage source={splashImage} />
          <SplashText>Him & Her</SplashText>
        </SplashInfoContainer>
      </SplashBackground>
    </>
  );
};

export default SplashScreen;

const SplashBackground = styled.ImageBackground`
  flex: 1;
`;

const SplashInfoContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SplashImage = styled.Image`
  width: 50%;
  height: 30%;
`;

const SplashText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

{
  /* <ImageBackground
        source={require("../../../assets/headerBG.png")}
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView /// comment out scrollView
          style={{
            width: "100%",
          }}
        >
        <Text>Splash screen</Text>
        </ScrollView>
      </ImageBackground> */
}

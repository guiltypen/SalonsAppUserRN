import React from "react";
import { Spinner } from "native-base";
import styled from "styled-components/native";
import { BackgroundSq } from "../../styles";

const Loading = () => {
  return (
    <LoadingWrapper>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <Spinner color={"white"} size="large" />
    </LoadingWrapper>
  );
};

export default Loading;

const LoadingWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

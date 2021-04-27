import React, { useState } from "react";
import userStore from "../../stores/UserStore";
import salonStore from "../../stores/SalonStore";
import SalonItem from "./SalonItem";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import { AuthContainer, BackgroundSq, AuthBackgroundImg } from "./styles";
import { View, Text, ScrollView } from "react-native";

const SalonList = ({ navigation }) => {
  const [query, setQuery] = useState("");

  if (!userStore.user) return <Text> loading</Text>;

  const salonslist = salonStore.salons.filter(
    (salon) => salon.gender === userStore.user.gender
  );

  const filtredsalons = salonslist
    .filter((salon) =>
      salon.username.toLowerCase().includes(query.toLowerCase())
    )
    .map((salon) => (
      <SalonItem salon={salon} key={salon.id} navigation={navigation} />
    ));
  return (
    // <ScrollView style={{ flex: 1, width: "100%" }}>
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      {/* <SearchBar setQuery={setQuery} /> */}
      {/* <AuthBackgroundImg source={require("../../../assets/BlueRec.png")}> */}
      <View style={{ width: "100%" }}>{filtredsalons}</View>
      {/* </AuthBackgroundImg> */}
    </AuthContainer>
    // </ScrollView>
  );
};

export default observer(SalonList);
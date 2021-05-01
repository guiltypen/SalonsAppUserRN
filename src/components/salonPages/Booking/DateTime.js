import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import AuthTextInput from "../styles";
import bookingStore from "../../../stores/BookingStore";
import styled from "styled-components/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const DateTime = ({ thisSpecialist, service, navigation }) => {
  const [picker, setPicker] = useState(false);
  const [picker2, setPicker2] = useState(false);

  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    service: service.name,
    salonId: thisSpecialist.salonId,
    specialistId: thisSpecialist.id,
  });

  const handelChange = ({ time, date }) => {
    setAppointment({
      ...appointment,
      time: moment(time).format(`HH:mm A`),
      date: moment(date).format(`MMMM, Do YYYY`),
    });
    setPicker(!picker);
    setPicker2(!picker);
  };

  const pickerStatus = () => {
    setPicker(!picker);
  };

  const pickerStatus2 = () => {
    setPicker2(!picker2);
  };

  const handelSubmit = async () => {
    await bookingStore.newBooking(appointment);
    navigation.navigate("AppointmentDetail", {
      found: [{ thisSpecialist }, { service }],
    });
  };

  // console.log(appointment);
  return (
    <View>
      <IconsContainer>
        <IconsStyle>
          <TouchableOpacity onPress={pickerStatus}>
            <MaterialIcons name="access-time" size={26} color="white" />
          </TouchableOpacity>
        </IconsStyle>
        <IconsStyle>
          <TouchableOpacity onPress={pickerStatus2}>
            <AntDesign name="calendar" size={26} color="white" />
          </TouchableOpacity>
        </IconsStyle>
        {appointment.date ? (
          <IconsStyle>
            <TouchableOpacity onPress={handelSubmit}>
              <Book>
                <BookText> Book</BookText>
              </Book>
            </TouchableOpacity>
          </IconsStyle>
        ) : (
          <IconsStyle>
            <Select>
              <BookText> Select</BookText>
            </Select>
          </IconsStyle>
        )}
      </IconsContainer>
      <DateTimePickerModal
        isVisible={picker}
        mode={`time`}
        onConfirm={handelChange}
        onCancel={pickerStatus}
        cancelTextIOS={`Close`}
        cancelTextStyle={{ color: "red" }}
        headerTextIOS="Choose a time"
        date={new Date()}
      />
      <DateTimePickerModal
        isVisible={picker2}
        mode={`date`}
        onConfirm={handelChange}
        onCancel={pickerStatus2}
        cancelTextIOS={`Close`}
        cancelTextStyle={{ color: "red" }}
        headerTextIOS="Pick a date"
        onDateChange={handelChange}
      />
    </View>
  );
};

export default DateTime;

const IconsContainer = styled.View`
  flex-direction: row;
  /* background-color: red; */
  width: 100px;
  /* justify-content: space-between; */
  height: 30px;
  align-items: center;
  left: -15px;
  margin-top: 10px;
`;

const IconsStyle = styled.View`
  /* background-color: grey; */
  height: 100%;
  width: 90px;
  justify-content: center;
  align-items: center;
  left: -20px;
`;

const Book = styled.View`
  width: 70px;
  height: 25px;
  background-color: green;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid white;
  /* margin-left: 55px; */
`;

const Select = styled.View`
  width: 70px;
  height: 25px;
  background-color: red;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid white;
  /* margin-left: 55px; */
`;

const BookText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 12px;
`;

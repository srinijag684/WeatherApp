import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import RowText from "../components/rowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    high,
    low
  } = styles

  const { 
    main: {temp, feels_like, temp_max, temp_min}
    , weather
  } = weatherData

  const weatherCondition = weather[0].main
  
  return(
    <SafeAreaView style = {wrapper}>
      <View style = {container}>
        <Feather name={weatherType[weatherCondition].icon}size={100} color="black" />
        <Text style = {tempStyles}>{`  ${temp}°`}</Text>
        <Text style = {feels}>{`Feels Like ${feels_like}°`}</Text>
        <RowText 
          messageOne = {`High: ${temp_max}°   `} 
          messageTwo = {`Low: ${temp_min}° `} 
          containerStyles = {highLowWrapper} 
          messageOneStyles = {high} 
          messageTwoStyles = {low}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles:{
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  high:{
    color: 'black',
    fontSize: 20
  },
  low:{
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  }
})
export default CurrentWeather
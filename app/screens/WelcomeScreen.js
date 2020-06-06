import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("./../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.myView} >
        <Image source={require("./../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  myView: {
    alignItems: "center",
    position: 'absolute',
    top: 85
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: '#fc5c65'
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: '#4ecdc4'
  }
});

export default WelcomeScreen;
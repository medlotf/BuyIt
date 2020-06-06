import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.buttOne} />
            <View style={styles.buttTwo} />
            <Image resizeMode="contain" style={styles.img} source={require('./../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    buttOne: {
        width: 60,
        height: 60,
        backgroundColor: '#4ecdc4',
        position: "absolute",
        top: 30,
        left: 20
    },
    buttTwo: {
        width: 60,
        height: 60,
        backgroundColor: '#fc5c65',
        position: "absolute",
        top: 30,
        right: 20
    },
    img: {
        width: "100%",
        height: "100%"
    }
})

export default ViewImageScreen;
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import AppColors from '../Constaint/AppColors';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Navigations/AuthProvider';

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;


const Splash = () => {

    const navigation = useNavigation();
    const [user, setUser] = useState(AuthContext);

    user ? setTimeout(() => {
        navigation.replace("Login")
    }, 2000) : setTimeout(() => {
        navigation.replace("home")
    }, 2000);


    return (
        <View style={styles.Screen}>
            <View style={styles.container}>
                <Image style={styles.Logo} source={require("../assets/Images/logo.png")} />
                <View style={styles.textContainer}>
                    <Text style={styles.logoText}>Reverr</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: AppColors.primarycolor
    },
    container: {
        alignItems: 'center'
    },
    Logo: {
        marginTop: 100
    },
    logoText: {
        color: 'gray',
        fontFamily: "Poppins-Bold",
        fontSize: 35,
    },
    textContainer: {
        position: 'absolute',
        marginTop: 320

    }
})

export default Splash; 

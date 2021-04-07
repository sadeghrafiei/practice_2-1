import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';

function Header(props) {
    return (
        <View style={styles.headerContainer}>
            <Image
                style={styles.logo}
                resizeMode={"contain"}
                source={require('./images/logo.png')} />
            <View style={styles.headerRightButtonsContainer}>
                {props.headerRightButtonsIcons.map((image) => (<Image
                    style={styles.headerRightButtons}
                    source={image} />))}
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        height: 45,
        backgroundColor: "#FFF",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    },
    headerRightButtonsContainer: {
        flexDirection: "row-reverse",
        marginRight: 10
    },
    logo: {
        height: 45,
        width: 100,
        alignSelf: "center",
        marginRight: 5
    },
    headerRightButtons: {
        width: 17,
        height: 17,
        alignSelf: "center",
        marginRight: 20
    }

});
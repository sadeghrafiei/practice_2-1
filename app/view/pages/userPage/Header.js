import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Header = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
        height: 30,
        alignContent: 'center',
      }}>
      <TouchableOpacity onPress={() => props.nav.goBack()}>
        <Image
          source={require('../home/images/left_arrow.png')}
          style={{width: 15, height: 15}}
        />
      </TouchableOpacity>
      <Text style={{fontWeight: 'bold'}}>{props.title}</Text>
      <Image
        source={require('../home/images/more.png')}
        style={{width: 15, height: 15}}
      />
    </View>
  );
};

export default Header;

import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Story = ({item}) => {
  return item.id == 1 ? (
    // My Story
    <TouchableOpacity style={styles.story}>
      <View>
        <Image style={styles.myStoryUserImage} source={item.userImage} />
        <Image
          style={styles.myStoryUserImagePlus}
          source={require('./images/plus.png')}
        />
      </View>
      <Text
        numberOfLines={1}
        ellipsizeMode={'tail'}
        style={
          item.seen ? styles.seenStoryUserName : styles.notSeenStoryUserName
        }>
        Your Story
      </Text>
    </TouchableOpacity>
  ) : (
    // other Stories
    <TouchableOpacity style={styles.story}>
      <View style={item.seen ? styles.seenStory : styles.notSeenStory}>
        <Image style={styles.storyUserImage} source={item.userImage} />
      </View>
      <Text
        numberOfLines={1}
        ellipsizeMode={'tail'}
        style={
          item.seen ? styles.seenStoryUserName : styles.notSeenStoryUserName
        }>
        {item.userName}
      </Text>
    </TouchableOpacity>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyUserImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  myStoryUserImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
  },
  myStoryUserImagePlus: {
    width: 15,
    height: 15,
    position: 'absolute',
    alignSelf: 'flex-start',
    bottom: 5,
    left: 5,
  },
  seenStory: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 2,
  },
  notSeenStory: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#F56040',
    borderLeftColor: '#F77737',
    borderBottomColor: '#FCAF45',
    borderRightColor: '#FCAF45',
    borderWidth: 2,
  },
  seenStoryUserName: {
    color: '#ccc',
    fontSize: 11,
    textAlign: 'center',
    alignSelf: 'center',
    width: 60,
  },
  notSeenStoryUserName: {
    color: '#000',
    fontSize: 11,
    textAlign: 'center',
    alignSelf: 'center',
    width: 60,
  },
});

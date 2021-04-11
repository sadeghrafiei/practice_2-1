import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const postLeftButtonIcons = [
  require('./images/like.png'),
  require('./images/comment.png'),
  require('./images/direct.png'),
];
const Post = (props) => {
  const {item} = props;
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <TouchableOpacity
          style={styles.userPostHeader}
          onPress={() => {
            props.nav('UserProfile');
          }}>
          <Image style={styles.imageUserPostHeader} source={item.userImage} />
          <Text style={styles.nameUserPostHeader}>{item.userName}</Text>
        </TouchableOpacity>
        <Image
          style={styles.postMoreButton}
          source={require('./images/more.png')}
        />
      </View>
      <Image style={styles.postBodyImage} source={item.image} />
      <View style={styles.postButtonContainer}>
        <View style={styles.leftButtonsPostContainer}>
          {postLeftButtonIcons.map((image) => (
            <Image style={styles.leftButtonsPost} source={image} />
          ))}
        </View>
        <Image
          style={styles.postSaveButton}
          source={require('./images/save.png')}
        />
      </View>
      <View style={styles.postDataContainer}>
        <View style={styles.postLike}>
          <View style={styles.userImageContainerLikedPost}>
            <Image
              style={styles.userImageLikedPostFirst}
              source={require('./images/storyImage/5.jpeg')}
            />
            <Image
              style={styles.userImageLikedPostSecond}
              source={require('./images/storyImage/4.jpeg')}
            />
          </View>
          <Text style={styles.postLikeText}> Liked by </Text>
          <Text style={styles.boldText}>niko</Text>
          <Text> and</Text>
          <Text style={styles.boldText}> {item.numberLiked} others</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.postComment}>
            View all {item.numberComments} comments
          </Text>
        </TouchableOpacity>
        <View style={styles.postDateContainer}>
          <Text style={styles.postDataeText}>{item.date}</Text>
          <Text style={styles.postTranslationText}> . See Translation</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  userImageContainerLikedPost: {
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 5,
  },
  userImageLikedPostFirst: {
    width: 14,
    height: 14,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#FFF',
  },
  userImageLikedPostSecond: {
    width: 14,
    height: 14,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#FFF',
    position: 'absolute',
    left: 10,
  },
  postContainer: {
    marginBottom: 10,
  },
  postHeader: {
    height: 45,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  userPostHeader: {
    flexDirection: 'row-reverse',
    alignSelf: 'center',
  },
  imageUserPostHeader: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  nameUserPostHeader: {
    alignSelf: 'center',
    marginRight: 10,
    fontWeight: '600',
  },
  postMoreButton: {
    width: 15,
    height: 15,
    alignSelf: 'center',
    marginLeft: 10,
  },
  postBodyImage: {
    width: '100%',
    height: 350,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  postButtonContainer: {
    height: 45,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  leftButtonsPostContainer: {
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    marginLeft: 10,
  },
  leftButtonsPost: {
    width: 17,
    height: 17,
    alignSelf: 'center',
    marginLeft: 10,
  },
  postSaveButton: {
    width: 17,
    height: 17,
    alignSelf: 'center',
    marginLeft: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  postComment: {
    color: '#ccc',
    fontSize: 13,
    marginTop: 4,
  },
  postLike: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  postLikeText: {
    fontSize: 13,
    alignSelf: 'center',
  },
  postDataContainer: {
    marginRight: 10,
  },
  postTranslationText: {
    fontSize: 9,
  },
  postDataeText: {
    color: '#ccc',
    fontSize: 9,
  },
  postDateContainer: {
    flexDirection: 'row-reverse',
    marginTop: 4,
  },
});

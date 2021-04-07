import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';


const bottomTabs = [require('./images/home.png'), require('./images/explore.png'), require('./images/add.png'), require('./images/like.png'), require('./images/user.png')];
const postLeftButtonIcons = [require('./images/like.png'), require('./images/comment.png'), require('./images/direct.png')];
const headerRightButtonsIcons = [require('./images/add.png'), require('./images/like.png'), require('./images/direct.png')];
const postsData = [
  {
    id: 1,
    image: require('./images/postImage/post2.jpg'),
    discription: "This is my post in instagram",
    userImage: require('./images/storyImage/5.jpeg'),
    userName: "Amelia",
    numberLiked: 43,
    numberComments: 8,
    date: "6 hourse ago"
  },
  {
    id: 2,
    image: require('./images/postImage/post3.jpg'),
    discription: "This is my post in instagram",
    userImage: require('./images/storyImage/1.jpeg'),
    userName: "Jak",
    numberLiked: 302,
    numberComments: 56,
    date: "12 March"
  },
  {
    id: 3,
    image: require('./images/postImage/post1.jpg'),
    discription: "This is my post in instagram",
    userImage: require('./images/storyImage/5.jpeg'),
    userName: "Nikol",
    numberLiked: 145,
    numberComments: 98,
    date: "10 Jun"
  }


]

const storiesData = [
  {
    id: 1,
    userImage: require('./images/storyImage/2.jpeg'),
    userName: "Jak nik",
    seen: false,

  },
  {
    id: 2,
    userImage: require('./images/storyImage/1.jpeg'),
    userName: "Amelia",
    seen: false,
  },
  {
    id: 3,
    userImage: require('./images/storyImage/3.jpeg'),
    userName: "lili 1994",
    seen: false,

  },
  {
    id: 4,
    userImage: require('./images/storyImage/4.jpeg'),
    userName: "Nikol kidman",
    seen: false,

  },
  {
    id: 5,
    userImage: require('./images/storyImage/5.jpeg'),
    userName: "Jak niksdsdsdsds",
    seen: true,

  },
  {
    id: 6,
    userImage: require('./images/storyImage/6.jpeg'),
    userName: "Jak nik",
    seen: true,

  },
  {
    id: 7,
    userImage: require('./images/storyImage/1.jpeg'),
    userName: "Jak nik",
    seen: true,

  }
]

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.logo}
        resizeMode={"contain"}
        source={require('./images/logo.png')} />
      <View style={styles.headerRightButtonsContainer}>
        {headerRightButtonsIcons.map((image) => (<Image
          style={styles.headerRightButtons}
          source={image} />))}
      </View>
    </View>
  );
}

function Stories() {
  const renderItem = ({ item }) => (
    // my story
    item.id == 1 ?
      <TouchableOpacity style={styles.story}>
        <View>
          <Image
            style={styles.myStoryUserImage}
            source={item.userImage} />
          <Image
            style={styles.myStoryUserImagePlus}
            source={require('./images/plus.png')} />
        </View>
        <Text numberOfLines={1} ellipsizeMode={"tail"} style={item.seen ? styles.seenStoryUserName : styles.notSeenStoryUserName}>Your Story</Text>
      </TouchableOpacity>
      :
      // other Stories
      <TouchableOpacity style={styles.story}>
        <View style={item.seen ? styles.seenStory : styles.notSeenStory}>
          <Image
            style={styles.storyUserImage}
            source={item.userImage} />
        </View>
        <Text numberOfLines={1} ellipsizeMode={"tail"} style={item.seen ? styles.seenStoryUserName : styles.notSeenStoryUserName}>{item.userName}</Text>
      </TouchableOpacity>
  );
  return (
    <View style={styles.storiesContainer}>
      <FlatList
        horizontal={true}
        data={storiesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        inverted={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

function List() {
  const renderItem = ({ item }) => (
    <View >
      <Post item={item} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={postsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

function Post(props) {
  const item = props.item;
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.userPostHeader}>
          <Image
            style={styles.imageUserPostHeader}
            source={item.userImage} />
          <Text style={styles.nameUserPostHeader}>{item.userName}</Text>
        </View>
        <Image
          style={styles.postMoreButton}
          source={require('./images/more.png')} />
      </View>
      <Image
        style={styles.postBodyImage}
        source={item.image} />
      <View style={styles.postButtonContainer}>
        <View style={styles.leftButtonsPostContainer}>
          {postLeftButtonIcons.map((image) => (<Image
            style={styles.leftButtonsPost}
            source={image} />))}
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
              source={require('./images/storyImage/5.jpeg')} />
            <Image
              style={styles.userImageLikedPostSecond}
              source={require('./images/storyImage/4.jpeg')} />
          </View>
          <Text style={styles.postLikeText}> Liked by </Text><Text style={styles.boldText}>niko</Text><Text > and</Text><Text style={styles.boldText}> {item.numberLiked} others</Text>
        </View>
        <TouchableOpacity><Text style={styles.postComment}>View all {item.numberComments} comments</Text></TouchableOpacity>
        <View style={styles.postDateContainer}>
          <Text style={styles.postDataeText}>{item.date}</Text>
          <Text style={styles.postTranslationText}> . See Translation</Text>
        </View>

      </View>
    </View>
  );
}

function BottomTabBar() {
  return (
    <View style={styles.bottomTabBarContainer}>
      {bottomTabs.map((image) => (<Image
        style={styles.bottomTabBarIcon}
        source={image}
      />))}
    </View>
  );
}


function home() {
  return (
    <View style={styles.homeContainer}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        <List />
      </ScrollView>
      <BottomTabBar />
    </View>
  );
}
export default home;


const styles = StyleSheet.create({
  // home
  homeContainer: {
    backgroundColor: "#FFF",
    flex: 1
  },

  // header
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
  },

  // story
  story: {
    width: 70,
    justifyContent: "center",
    alignItems: "center"
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
    margin: 5
  },
  myStoryUserImagePlus: {
    width: 15,
    height: 15,
    position: 'absolute',
    alignSelf: "flex-start",
    bottom: 5,
    left: 5
  },
  storiesContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#FFF",
  },
  seenStory: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#ccc',
    borderWidth: 2
  },
  notSeenStory: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: '#F56040',
    borderLeftColor: '#F77737',
    borderBottomColor: '#FCAF45',
    borderRightColor: '#FCAF45',
    borderWidth: 2
  },
  seenStoryUserName: {
    color: "#ccc",
    fontSize: 11,
    textAlign: "center",
    alignSelf: "center",
    width: 60,
  },
  notSeenStoryUserName: {
    color: "#000",
    fontSize: 11,
    textAlign: "center",
    alignSelf: "center",
    width: 60,
  },

  // post
  userImageContainerLikedPost: {
    flexDirection: "row",
    marginRight: 10,
    marginLeft: 5
  },
  userImageLikedPostFirst: {
    width: 14,
    height: 14,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#FFF"
  },
  userImageLikedPostSecond: {
    width: 14,
    height: 14,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#FFF",
    position: "absolute",
    left: 10
  },
  postContainer: {
    marginBottom: 10
  },
  postHeader: {
    height: 45,
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  },
  userPostHeader: {
    flexDirection: "row-reverse",
    alignSelf: "center"
  },
  imageUserPostHeader: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  nameUserPostHeader: {
    alignSelf: "center",
    marginRight: 10,
    fontWeight: "600"
  },
  postMoreButton: {
    width: 15,
    height: 15,
    alignSelf: "center",
    marginLeft: 10
  },
  postBodyImage: {
    width: "100%",
    height: 350,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  postButtonContainer: {
    height: 45,
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  },
  leftButtonsPostContainer: {
    flexDirection: "row-reverse",
    alignSelf: "center",
    marginLeft: 10
  },
  leftButtonsPost: {
    width: 17,
    height: 17,
    alignSelf: "center",
    marginLeft: 10
  },
  postSaveButton: {
    width: 17,
    height: 17,
    alignSelf: "center",
    marginLeft: 10
  },
  boldText: {
    fontWeight: "bold"
  },
  postComment: {
    color: "#ccc",
    fontSize: 13,
    marginTop: 4
  },
  postLike: {
    flexDirection: "row-reverse",
    alignItems: "center"
  },
  postLikeText: {
    fontSize: 13,
    alignSelf: "center"
  },
  postDataContainer: {
    marginRight: 10
  },
  postTranslationText: {
    fontSize: 9
  },
  postDataeText: {
    color: "#ccc",
    fontSize: 9
  },
  postDateContainer: {
    flexDirection: "row-reverse",
    marginTop: 4
  },

  // bottom tab bar
  bottomTabBarIcon: {
    width: 18,
    height: 18,
    alignSelf: "center"
  },
  bottomTabBarContainer: {
    flexDirection: "row-reverse",
    height: 50,
    justifyContent: "space-around",
    borderTopColor: "#eee",
    borderTopWidth: 0.7
  },
});
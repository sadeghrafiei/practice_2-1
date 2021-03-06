import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import Header from './Header';
import Story from './Story';
import BottomTabBar from './BottomTabBar';
import Post from './Post';

// Static Data
const bottomTabs = [
  require('./images/home.png'),
  require('./images/explore.png'),
  require('./images/add.png'),
  require('./images/like.png'),
  require('./images/user.png'),
];
const postsData = [
  {
    id: 1,
    image: require('./images/postImage/post2.jpg'),
    discription: 'This is my post in instagram',
    userImage: require('./images/storyImage/5.jpeg'),
    userName: 'Amelia',
    numberLiked: 43,
    numberComments: 8,
    date: '6 hourse ago',
  },
  {
    id: 2,
    image: require('./images/postImage/post3.jpg'),
    discription: 'This is my post in instagram',
    userImage: require('./images/storyImage/1.jpeg'),
    userName: 'Jak',
    numberLiked: 302,
    numberComments: 56,
    date: '12 March',
  },
  {
    id: 3,
    image: require('./images/postImage/post1.jpg'),
    discription: 'This is my post in instagram',
    userImage: require('./images/storyImage/5.jpeg'),
    userName: 'Nikol',
    numberLiked: 145,
    numberComments: 98,
    date: '10 Jun',
  },
];

const storiesData = [
  {
    id: 1,
    userImage: require('./images/storyImage/2.jpeg'),
    userName: 'Jak nik',
    seen: false,
  },
  {
    id: 2,
    userImage: require('./images/storyImage/1.jpeg'),
    userName: 'Amelia',
    seen: false,
  },
  {
    id: 3,
    userImage: require('./images/storyImage/3.jpeg'),
    userName: 'lili 1994',
    seen: false,
  },
  {
    id: 4,
    userImage: require('./images/storyImage/4.jpeg'),
    userName: 'Nikol kidman',
    seen: false,
  },
  {
    id: 5,
    userImage: require('./images/storyImage/5.jpeg'),
    userName: 'Jak niksdsdsdsds',
    seen: true,
  },
  {
    id: 6,
    userImage: require('./images/storyImage/6.jpeg'),
    userName: 'Jak nik',
    seen: true,
  },
  {
    id: 7,
    userImage: require('./images/storyImage/1.jpeg'),
    userName: 'Jak nik',
    seen: true,
  },
];

const HomeScreen = ({navigation}) => {
  const {navigate} = navigation;
  const renderStoryItem = ({item}) => <Story item={item} />;
  const renderPostItem = ({item}) => <Post item={item} nav={navigate} />;

  return (
    <View style={styles.homeContainer}>
      {/* Header Section */}
      <Header />
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      {/* Posts Section */}
      <FlatList
        ListHeaderComponent={
          <FlatList
            contentContainerStyle={styles.storiesContainer}
            horizontal
            data={storiesData}
            renderItem={renderStoryItem}
            keyExtractor={(item) => item.id}
            inverted={true}
            showsHorizontalScrollIndicator={false}
          />
        }
        data={postsData}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
      />
      {/* </ScrollView> */}
      {/* Bottom Tab Bar Section */}
      <BottomTabBar bottomTabs={bottomTabs} />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  storiesContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#FFF',
  },
});

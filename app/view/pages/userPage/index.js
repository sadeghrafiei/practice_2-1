import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

import Header from './Header';
import BottomTabBar from '../home/BottomTabBar';

const windowWidth = Dimensions.get('window').width;

// Static Data
const BOTTOM_TAB_NAVIGATION = [
  require('../home/images/home.png'),
  require('../home/images/explore.png'),
  require('../home/images/add.png'),
  require('../home/images/like.png'),
  require('../home/images/user.png'),
];

const USER_PAGE_DATA = {
  userSourceImage: require('../home/images/storyImage/2.jpeg'),
  numberOfPosts: '1,417',
  numberOfFollowers: '236k',
  numberOfFollowing: '1,356',
  userName: 'latermedai',
  userFullName: 'later : social mediasch',
  pageCategory: 'App Page',
  userBio: 'This is bio if page',
  userWebsite: 'www.goole.com',
  idFollowed: true,

  userStoryHighLight: [
    {
      id: 1,
      coverSourceImage: require('../home/images/storyCover1.jpg'),
      title: 'Start Here',
    },
    {
      id: 2,
      coverSourceImage: require('../home/images/storyCover1.jpg'),
      title: 'IG storys',
    },
    {
      id: 3,
      coverSourceImage: require('../home/images/storyCover1.jpg'),
      title: 'linkin ..',
    },
    {
      id: 4,
      coverSourceImage: require('../home/images/storyCover1.jpg'),
      title: 'Start Here',
    },
    {
      id: 5,
      coverSourceImage: require('../home/images/storyCover1.jpg'),
      title: 'IG storys',
    },
    {
      id: 6,
      coverSourceImage: require('../home/images/storyCover1.jpg'),
      title: 'linkin ..',
    },
  ],
  userPosts: [
    {
      id: 1,
      imageSource: require('../home/images/postImage/post1.jpg'),
      discription: 'This is my post in instagram',
      numberLiked: 145,
      numberComments: 98,
      date: '10 Jun',
      type: 'igtv',
    },

    {
      id: 2,
      imageSource: require('../home/images/postImage/post2.jpg'),
      discription: 'This is my post in instagram',
      numberLiked: 145,
      numberComments: 98,
      date: '10 Jun',
      type: 'igtv',
    },

    {
      id: 3,
      imageSource: require('../home/images/postImage/post3.jpg'),
      discription: 'This is my post in instagram',
      numberLiked: 145,
      numberComments: 98,
      date: '10 Jun',
      type: 'igtv',
    },

    {
      id: 4,
      imageSource: require('../home/images/postImage/post2.jpg'),
      discription: 'This is my post in instagram',
      numberLiked: 145,
      numberComments: 98,
      date: '10 Jun',
      type: 'posts',
    },
    {
      id: 5,
      imageSource: require('../home/images/postImage/post3.jpg'),
      discription: 'This is my post in instagram',
      numberLiked: 145,
      numberComments: 98,
      date: '10 Jun',
      type: 'posts',
    },
    {
      id: 6,
      imageSource: require('../home/images/postImage/post3.jpg'),
      discription: 'This is my post in instagram',
      numberLiked: 145,
      numberComments: 98,
      date: '10 Jun',
      type: 'taged',
    },
    {
      id: 7,
      imageSource: require('../home/images/postImage/post1.jpg'),
      discription: 'This is my post in instagram',
      numberLiked: 145,
      numberComments: 98,
      date: '10 Jun',
      type: 'posts',
    },
  ],
};

const StoryItem = ({item}) => (
  <View>
    <TouchableOpacity
      style={{
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: '#ccc',
          borderWidth: 2,
        }}>
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={item.coverSourceImage}
        />
      </View>
      <Text
        numberOfLines={1}
        ellipsizeMode={'tail'}
        style={{
          color: '#ccc',
          fontSize: 11,
          textAlign: 'center',
          alignSelf: 'center',
          width: 60,
        }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  </View>
);

const PostItem = ({item}) => (
  <View>
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
      }}>
      <Image
        style={{width: (windowWidth - 2) / 3, height: (windowWidth - 2) / 3}}
        source={item.imageSource}
      />
    </TouchableOpacity>
  </View>
);

const IgtvItem = ({item}) => (
  <View>
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 4,
      }}>
      <Image
        style={{
          width: (windowWidth - 20) / 2,
          height: (windowWidth - 20) / 2 + 80,
          borderRadius: 20,
        }}
        source={item.imageSource}
      />
    </TouchableOpacity>
  </View>
);

const UserScreen = ({navigation}) => {
  const [postStatus, setPostStatus] = useState('posts'); // posts | igtv | taged
  const renderStoryItem = ({item}) => <StoryItem item={item} />;
  const renderPostItem = ({item}) => <PostItem item={item} />;
  const renderIgtvItem = ({item}) => <IgtvItem item={item} />;

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Header title={USER_PAGE_DATA.userName} nav={navigation} />
      <FlatList
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: 'row-reverse',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View style={styles.userImageContainer}>
                <Image
                  source={USER_PAGE_DATA.userSourceImage}
                  style={styles.userImage}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row-reverse',
                  marginLeft: 30,
                  justifyContent: 'space-between',
                }}>
                <View style={{marginLeft: 20}}>
                  <Text style={styles.countNumber}>
                    {USER_PAGE_DATA.numberOfPosts}
                  </Text>
                  <Text style={styles.countName}>Posts</Text>
                </View>

                <View style={{marginLeft: 20}}>
                  <Text style={styles.countNumber}>
                    {USER_PAGE_DATA.numberOfFollowers}
                  </Text>
                  <Text style={styles.countName}>Followers</Text>
                </View>

                <View style={{marginLeft: 20}}>
                  <Text style={styles.countNumber}>
                    {USER_PAGE_DATA.numberOfFollowing}
                  </Text>
                  <Text style={styles.countName}>Following</Text>
                </View>
              </View>
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text style={{fontWeight: 'bold'}}>
                {USER_PAGE_DATA.userFullName}
              </Text>
              <Text style={{color: '#ccc'}}>{USER_PAGE_DATA.pageCategory}</Text>
              <Text>{USER_PAGE_DATA.userBio}</Text>
              <TouchableOpacity>
                <Text style={{color: '#0B0080'}}>
                  {USER_PAGE_DATA.userWebsite}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                marginVertical: 15,
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#ccc',
                  borderRadius: 5,
                  paddingVertical: 4,
                  borderWidth: 1,
                  width: 95,
                }}>
                <Text style={{fontSize: 12}}>Following</Text>
                <Image
                  source={require('../home/images/arrow_down.png')}
                  style={{
                    width: 9,
                    height: 9,
                    marginTop: 3,
                    marginRight: 3,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#ccc',
                  borderRadius: 5,
                  borderWidth: 1,
                  width: 95,
                }}>
                <Text style={{fontSize: 12}}>Message</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#ccc',
                  borderRadius: 5,
                  paddingVertical: 4,
                  borderWidth: 1,
                  width: 95,
                }}>
                <Text style={{fontSize: 12}}>Email</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#ccc',
                  borderRadius: 5,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderWidth: 1,
                }}>
                <Image
                  source={require('../home/images/arrow_down.png')}
                  style={{
                    width: 10,
                    height: 10,
                    marginTop: 3,
                    marginRight: 3,
                  }}
                />
              </View>
            </View>
            <FlatList
              style={{marginRight: 10, paddingBottom: 15}}
              contentContainerStyle={
                StyleSheet.contentContainerStyleFlatListStory
              }
              horizontal
              data={USER_PAGE_DATA.userStoryHighLight}
              renderItem={renderStoryItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              inverted
            />
            <View style={styles.tabBarContainer}>
              <TouchableOpacity
                style={{
                  width: (windowWidth - 2) / 3,
                  alignItems: 'center',
                  padding: 10,
                  borderBottomWidth: postStatus == 'posts' ? 2 : 0,
                  borderBottomColor: '#ccc',
                  marginHorizontal: 1,
                }}
                onPress={() => {
                  setPostStatus('posts');
                }}>
                <Image
                  source={require('../home/images/posts.png')}
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: (windowWidth - 2) / 3,
                  alignItems: 'center',
                  padding: 10,
                  borderBottomWidth: postStatus == 'igtv' ? 2 : 0,
                  borderBottomColor: '#ccc',
                  marginHorizontal: 1,
                }}
                onPress={() => {
                  setPostStatus('igtv');
                }}>
                <Image
                  source={require('../home/images/igtv.png')}
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: (windowWidth - 2) / 3,
                  alignItems: 'center',
                  padding: 10,
                  borderBottomWidth: postStatus == 'taged' ? 2 : 0,
                  borderBottomColor: '#ccc',
                  marginHorizontal: 1,
                }}
                onPress={() => {
                  setPostStatus('taged');
                }}>
                <Image
                  source={require('../home/images/taged.png')}
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
            </View>
          </>
        }
        contentContainerStyle={styles.contentContainerStyleFlatList}
        data={USER_PAGE_DATA.userPosts.filter(
          (item) => item.type == postStatus,
        )}
        renderItem={postStatus == 'igtv' ? renderIgtvItem : renderPostItem}
        key={postStatus == 'igtv' ? '_' : '#'}
        keyExtractor={(item) => (postStatus == 'igtv' ? '_' : '#' + item.id)}
        showsHorizontalScrollIndicator={false}
        numColumns={postStatus == 'igtv' ? 2 : 3}
      />
      <BottomTabBar bottomTabs={BOTTOM_TAB_NAVIGATION} />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  contentContainerStyleFlatList: {
    paddingBottom: 10,
    borderTopWidth: 0.3,
    borderColor: '#eee',
  },
  contentContainerStyleFlatListStory: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  userImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#F56040',
    borderLeftColor: '#F77737',
    borderBottomColor: '#FCAF45',
    borderRightColor: '#FCAF45',
    borderWidth: 2,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  countName: {
    textAlign: 'center',
    fontSize: 12,
  },
  countNumber: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tabBarContainer: {
    flexDirection: 'row-reverse',
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
});

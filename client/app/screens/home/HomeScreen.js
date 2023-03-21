import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Constant from '../../utils/Constant';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PublicNavigator from './navigation/PublicNavigator';
import PrivateNavigator from './navigation/PrivateNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="PublicScreen"
        component={PublicNavigator}
        options={{
          tabBarLabel: () => <Icon name="th" size={24} color="gray" />,
        }}
      />
      <Tab.Screen
        name="PrivateScreen"
        component={PrivateNavigator}
        options={{
          tabBarLabel: () => <Icon name="info-circle" size={24} color="gray" />,
        }}
      />
    </Tab.Navigator>
  );
}

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.rootView}>
      <View style={styles.headerView}>
        <View style={styles.mediaView}>
          <Image
            style={styles.coverMediaImg}
            source={{
              uri: 'http://imgs.baobacgiang.com.vn/2018/04/09/16/20180409164528-dl3.jpg',
            }}
          />
          <View style={styles.avatarView}>
            <Image
              style={styles.avatarImg}
              source={{
                uri: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
              }}
            />
            <Text style={styles.displayName}>fun E</Text>
          </View>
        </View>

        <View style={styles.statisticalView}>
          <View style={styles.criteriaView}>
            <Text style={styles.total}>14</Text>
            <Text style={styles.criteria}>Posts</Text>
          </View>
          <View style={styles.criteriaView}>
            <Text style={styles.total}>4</Text>
            <Text style={styles.criteria}>Follower</Text>
          </View>
          <View style={styles.criteriaView}>
            <Text style={styles.total}>3</Text>
            <Text style={styles.criteria}>Following</Text>
          </View>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followBtnTitle}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>

      <NavigationContainer
        independent={true}
        style={{
          height: 500,
        }}>
        <MyTabs />
      </NavigationContainer>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.closeModalBtn}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeModalBtnText}>x</Text>
            </Pressable>
            <View style={styles.bodyModal}>
              <TouchableOpacity style={styles.functionBtn}>
                <Text style={styles.nameBtn}>Add Pic/Video</Text>
                <Text style={styles.arrowIcon}> &gt; </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.functionBtn}>
                <Text style={styles.nameBtn}>Add Livestream</Text>
                <Text style={styles.arrowIcon}> &gt; </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.functionBtn}>
                <Text style={styles.nameBtn}>Choose Products</Text>
                <Text style={styles.arrowIcon}> &gt; </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.functionBtn}>
                <Text style={styles.nameBtn}>Add Product</Text>
                <Text style={styles.arrowIcon}> &gt; </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.addBtn} onPress={() => setModalVisible(true)}>
        <Text style={styles.addBtnTitle}>+</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: Constant.colors.white,
  },
  headerView: {},
  mediaView: {},
  coverMediaImg: {
    position: 'relative',
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  avatarView: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  avatarImg: {
    width: 55,
    aspectRatio: 1,
    borderRadius: 99,
  },
  displayName: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
    color: Constant.colors.white,
    fontSize: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 4,
    fontWeight: 'bold',
  },
  statisticalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  criteriaView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Constant.colors.black,
  },
  criteria: {
    color: Constant.colors.textColor,
    fontSize: 13,
  },
  followBtn: {
    padding: 10,
    backgroundColor: Constant.colors.primary,
    borderRadius: 10,
  },
  followBtnTitle: {
    color: Constant.colors.white,
    fontWeight: 'bold',
  },
  addBtn: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: 99,
    backgroundColor: Constant.colors.primary,
    width: 60,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Constant.colors.white,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    // alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bodyModal: {
    marginTop: 24,
    justifyContent: 'flex-start',
  },
  closeModalBtn: {
    position: 'absolute',
    top: 5,
    right: 5,
    paddingHorizontal: 10,
  },
  closeModalBtnText: {
    color: Constant.colors.primary,
    fontSize: 25,
  },
  functionBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 4,
  },
  nameBtn: {
    color: Constant.colors.textColor,
    fontSize: 16,
  },
  arrowIcon: {
    color: Constant.colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

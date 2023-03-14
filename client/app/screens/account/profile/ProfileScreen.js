import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Constant from '../../../utils/Constant';
import NavigateCard from '../../../components/card/NavigateCard';

const ProfileScreen = ({route, navigate}) => {
  return (
    <View style={styles.rootView}>
      <View style={styles.headerProfile}>
        <Image
          style={styles.avatarView}
          source={{
            uri: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
          }}
        />
        <View style={styles.infoView}>
          <Text style={styles.nameUser}>fun E</Text>
          <Text style={styles.emailUser}>test@gmail.com</Text>
        </View>
      </View>

      <View style={styles.contactDetailView}>
        <Text style={styles.contactHeader}>Contact Details</Text>
        <View style={styles.contactBody}>
          <NavigateCard
            icon="user-alt"
            name="Edit Profile"
            screenName="EditProfile"
          />
          <NavigateCard icon="mail-bulk" name="Email address" />
          <NavigateCard icon="phone-alt" name="Phone number" />
          <NavigateCard icon="map-marker-alt" name="Residential addresses" />
          <NavigateCard
            icon="sign-out-alt"
            name="Sign out"
            screenName="SignIn"
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  headerProfile: {
    backgroundColor: Constant.colors.white,
    paddingVertical: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarView: {
    borderRadius: 99,
    width: 64,
    aspectRatio: 1,
    resizeMode: 'contain',
    backgroundColor: 'gray',
  },
  infoView: {
    marginLeft: 14,
  },
  nameUser: {
    color: Constant.colors.primary,
    fontSize: 18,
  },
  emailUser: {
    color: Constant.colors.textColor,
    fontSize: 14,
  },
  contactDetailView: {
    marginTop: 20,
  },
  contactHeader: {
    marginLeft: 20,
    fontSize: 13,
    color: Constant.colors.textColor,
  },
});

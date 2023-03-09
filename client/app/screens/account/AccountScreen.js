import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Constant from '../../utils/Constant';
import NavigateCard from '../../components/card/NavigateCard';

function AccountScreen() {
  const navigation = useNavigation();

  const showSignInScreen = () => {
    navigation.navigate('SignIn');
  };

  const showSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.rootView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.parentView}>
          <Text style={styles.parentTitle}>Account Settings</Text>
          <View style={styles.childrenView}>
            <NavigateCard
              icon="user-alt"
              cardName="Profile"
              screenName="SignIn"
            />
            <NavigateCard
              icon="qrcode"
              cardName="My QR Code"
              screenName="SignIn"
            />
            <NavigateCard
              icon="project-diagram"
              cardName="Analytics"
              screenName="SignIn"
            />
            <NavigateCard
              icon="credit-card"
              cardName="Payment"
              screenName="SignIn"
            />
            <NavigateCard
              icon="wallet"
              cardName="My Wallet"
              screenName="SignIn"
            />
            <NavigateCard
              icon="wallet"
              cardName="My Community Wallet"
              screenName="SignIn"
            />
            <NavigateCard
              icon="store-alt"
              cardName="Store Info"
              screenName="SignIn"
            />
          </View>
        </View>

        <View style={styles.parentView}>
          <Text style={styles.parentTitle}>Security Settings</Text>
          <View style={styles.childrenView}>
            <NavigateCard
              icon="ellipsis-h"
              cardName="Password reset"
              screenName="SignIn"
            />
            <NavigateCard
              icon="lock"
              cardName="Face ID and PIN"
              screenName="SignIn"
            />
          </View>
        </View>

        <View style={styles.parentView}>
          <Text style={styles.parentTitle}>App Settings</Text>
          <View style={styles.childrenView}>
            <NavigateCard
              icon="ellipsis-h"
              cardName="Password reset"
              screenName="SignIn"
            />
            <NavigateCard
              icon="lock"
              cardName="Face ID and PIN"
              screenName="SignIn"
            />
          </View>
        </View>
      </ScrollView>
    </View>

    // <View style={styles.rootView}>
    //   <TouchableOpacity style={styles.signInBtn} onPress={showSignInScreen}>
    //     <Text style={styles.signInText}>Sign In</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={styles.signInBtn} onPress={showSignUpScreen}>
    //     <Text style={styles.signInText}>Sign Up</Text>
    //   </TouchableOpacity>
    // </View>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  signInBtn: {
    margin: 10,
    padding: 10,
    backgroundColor: 'green',
  },
  signInText: {
    color: Constant.colors.white,
  },
  parentView: {
    marginTop: 20,
  },
  parentTitle: {
    marginBottom: 6,
    marginLeft: 10,
    color: Constant.colors.textColor,
  },
});

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Constant from '../../utils/Constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import Checkbox from '../../components/button/Checkbox';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = ({route, navigate}) => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const showSignInScreen = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.rootView}>
      <LinearGradient
        colors={[Constant.colors.primary, Constant.colors.white]}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text style={styles.headerTitle}>Sign Up</Text>

        <View style={styles.content}>
          <View style={styles.inputView}>
            <Icon name="phone" size={20} />
            <TextInput
              style={styles.inputText}
              onChangeText={setPhoneNumber}
              placeholder={'Phone Number'}
              value={phoneNumber}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputView}>
            <Icon name="user" size={20} />
            <TextInput
              style={styles.inputText}
              onChangeText={setUsername}
              placeholder={'Username'}
              value={username}
            />
          </View>

          <View style={styles.inputView}>
            <Icon name="lock" size={20} />
            <TextInput
              style={styles.inputText}
              onChangeText={setPassword}
              placeholder={'Password'}
              secureTextEntry={true}
              value={password}
            />
          </View>

          <View style={styles.inputView}>
            <Icon name="lock" size={20} />
            <TextInput
              style={styles.inputText}
              onChangeText={setRePassword}
              placeholder={'RePassword'}
              secureTextEntry={true}
              value={rePassword}
            />
          </View>

          <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.signInView}>
            <Text style={styles.text1}>Already an account?</Text>
            <TouchableOpacity
              style={styles.signInBtn}
              onPress={showSignInScreen}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: Constant.colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    padding: 20,
    backgroundColor: Constant.colors.white,
    borderRadius: 10,
    shadowColor: 'black',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
    borderColor: Constant.colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputText: {
    marginLeft: 10,
    width: Constant.screen.width * 0.6,
  },
  anotherChoiceView: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberMeView: {},
  signUpBtn: {
    backgroundColor: Constant.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
  signUpText: {
    color: Constant.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text1: {},
  signInBtn: {
    marginLeft: 5,
  },
  signInText: {
    color: Constant.colors.secondary,
  },
});

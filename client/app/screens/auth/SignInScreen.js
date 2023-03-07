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

const SignInScreen = ({route, navigate}) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = newValue => {
    setRememberMe(newValue);
  };

  const showSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.rootView}>
      <LinearGradient
        colors={[Constant.colors.primary, Constant.colors.white]}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text style={styles.headerTitle}>Sign In</Text>

        <View style={styles.content}>
          <View style={styles.inputView}>
            <Icon name="user" size={20} />
            <TextInput
              style={styles.inputText}
              onChangeText={setUsername}
              placeholder={'Username'}
              autoComplete="username"
            />
          </View>

          <View style={styles.inputView}>
            <Icon name="lock" size={20} />
            <TextInput
              style={styles.inputText}
              onChangeText={setPassword}
              placeholder={'Password'}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.anotherChoiceView}>
            <View style={styles.rememberMeView}>
              <Checkbox
                label="Remember me"
                value={rememberMe}
                onChange={handleRememberMeChange}
              />
            </View>
            <TouchableOpacity style={styles.forgotPasswordBtn}>
              <Text style={styles.forgotPasswordName}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.signUpView}>
            <Text style={styles.text1}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.signUpBtn}
              onPress={showSignUpScreen}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SignInScreen;

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
  signInBtn: {
    backgroundColor: Constant.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
  signInText: {
    color: Constant.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text1: {},
  signUpBtn: {
    marginLeft: 5,
  },
  signUpText: {
    color: Constant.colors.secondary,
  },
});

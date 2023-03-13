import {
  ActivityIndicator,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Constant from '../../../utils/Constant';
import Icon from 'react-native-vector-icons/FontAwesome5';

const EditProfileScreen = ({route, navigate}) => {
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');

  const [updateTitle, setUpdateTitle] = useState('Update');
  const [buttonColor, setButtonColor] = useState('#F83E69');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = () => {
    setButtonColor('#bbbbbb');
    setUpdateTitle('PROGRESSING...');
    setIsLoading(true);

    // Wait for 2 seconds (2000 milliseconds)
    setTimeout(function () {
      // Change the background color back to its original state and text to 'Update'
      setButtonColor('#F83E69');
      setUpdateTitle('Update');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.rootView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.avatarView}>
          <View style={styles.avatarImg}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg',
              }}
            />
            <Icon
              name="image"
              size={20}
              color="black"
              style={styles.iconAddAvatar}
            />
          </View>
        </View>

        {/* begin upload caver media */}
        <View style={styles.updateCoverMediaView}>
          <Text style={styles.updateCoverMediaTitle}>Update Cover media</Text>
          <View style={styles.updateCoverMediaBody}>
            <Icon
              name="cloud-upload-alt"
              size={40}
              color="lightgray"
              style={styles.cloudUploadIcon}
            />
            <Text style={styles.uploadDescription}>
              Let's upload photos and videos
            </Text>
            <View style={styles.uploadBtnsView}>
              <TouchableOpacity style={styles.uploadBtn}>
                <Icon
                  name="cloud-upload-alt"
                  size={13}
                  color={Constant.colors.white}
                />
                <Text style={styles.buttonName}>OPEN GALLERY</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.uploadBtn}>
                <Icon
                  name="cloud-upload-alt"
                  size={13}
                  color={Constant.colors.white}
                />
                <Text style={styles.buttonName}>OPEN CAMERA</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: 'http://imgs.baobacgiang.com.vn/2018/04/09/16/20180409164528-dl3.jpg',
              }}
              style={styles.coverPhotoImg}
            />
          </View>
        </View>
        {/* end upload caver media */}

        {/* begin add description */}
        <View style={styles.addDescriptionView}>
          <Text style={styles.addDescriptionTitle}>Add description</Text>
          <TextInput
            multiline
            maxLength={120}
            numberOfLines={4}
            onChangeText={text => setDescription(text)}
            value={description}
            placeholder="Say something..."
            style={styles.textInputDescription}
          />
        </View>
        {/* end add description */}

        {/* begin information */}
        <View style={styles.infoView}>
          <View style={styles.inputInfoView}>
            <Icon
              name="mail-bulk"
              size={20}
              color={Constant.colors.gray}
              style={styles.infoIcon}
            />
            <TextInput
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              value={email}
              keyboardType="email-address"
              style={styles.textInputInfo}
            />
          </View>
          <View style={styles.inputInfoView}>
            <Icon
              name="calendar-alt"
              size={20}
              color={Constant.colors.gray}
              style={styles.infoIcon}
            />
            <TextInput
              placeholder="Date of birth"
              onChangeText={text => setDob(text)}
              value={dob}
              style={styles.textInputInfo}
            />
          </View>
          <View style={styles.inputInfoView}>
            <Icon
              name="transgender"
              size={20}
              color={Constant.colors.gray}
              style={styles.infoIcon}
            />

            <TextInput
              onChangeText={text => setGender(text)}
              value={gender}
              placeholder="Gender"
              style={styles.textInputInfo}
            />
          </View>
          <View style={styles.inputInfoView}>
            <TextInput
              onChangeText={text => setOccupation(text)}
              value={occupation}
              placeholder="Occupation"
              style={{
                position: 'relative',
                paddingLeft: 50,
                color: Constant.colors.textColor,
              }}
            />
          </View>
        </View>
        {/* end information */}

        <TouchableOpacity
          style={{
            backgroundColor: buttonColor,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            paddingVertical: 16,
          }}
          onPress={handleUpdate}>
          <Text style={styles.updateTitle}>{updateTitle}</Text>
        </TouchableOpacity>
        {/* Show loading icon in the middle of the screen */}
        <Modal visible={isLoading} transparent={true}>
          <View style={styles.modal}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: Constant.colors.white,
    padding: 15,
  },
  avatarView: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarImg: {},
  avatar: {
    position: 'relative',
    borderRadius: 20,
    width: 64,
    aspectRatio: 1,
    resizeMode: 'contain',
    backgroundColor: 'gray',
  },
  iconAddAvatar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  updateCoverMediaView: {
    marginVertical: 15,
  },
  updateCoverMediaTitle: {
    fontWeight: 'bold',
    color: Constant.colors.textColor,
    marginBottom: 5,
  },
  updateCoverMediaBody: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Constant.colors.gray,
    padding: 16,
    alignItems: 'center',
  },
  cloudUploadIcon: {
    marginBottom: 16,
  },
  uploadDescription: {
    color: Constant.colors.gray,
    paddingVertical: 16,
  },
  uploadBtnsView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  uploadBtn: {
    backgroundColor: Constant.colors.black,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 6,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonName: {
    color: Constant.colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  coverPhotoImg: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Constant.colors.black,
    resizeMode: 'cover',
  },
  addDescriptionView: {},
  addDescriptionTitle: {
    fontWeight: 'bold',
    color: Constant.colors.textColor,
    marginBottom: 5,
  },
  textInputDescription: {
    borderColor: Constant.colors.gray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: Constant.colors.textColor,
  },
  infoView: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Constant.colors.gray,
    marginVertical: 20,
  },
  inputInfoView: {},
  infoIcon: {
    position: 'absolute',
    left: 10,
    top: 20,
  },
  textInputInfo: {
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: Constant.colors.gray,
    paddingLeft: 50,
    marginVertical: 8,
    color: Constant.colors.textColor,
  },
  updateBtn: {
    backgroundColor: Constant.colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 16,
  },
  updateTitle: {
    textTransform: 'uppercase',
    color: Constant.colors.white,
    fontWeight: 'bold',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

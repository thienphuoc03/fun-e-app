import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Constant from '../../../utils/Constant';
import Icon from 'react-native-vector-icons/FontAwesome';

const PublicNavigator = () => {
  return (
    <View style={styles.rootView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Text style={styles.containerHeaderName}>Postings</Text>
            <TouchableOpacity style={styles.btn}>
              <Icon name="cut" size={20} color={Constant.colors.textColor} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Icon
                name="trash-o"
                size={20}
                color={Constant.colors.textColor}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.containerBody}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PublicNavigator;

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: Constant.colors.white,
    flex: 1,
  },
  container: {
    paddingVertical: 10,
  },
  containerHeader: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  containerHeaderName: {
    color: Constant.colors.textColor,
    fontSize: 18,
  },
  containerBody: {
    padding: 5,
  },
});

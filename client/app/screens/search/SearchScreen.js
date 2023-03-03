import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constant from '../../utils/Constant';
import ProductCard from '../../components/card/ProductCard';
import {useNavigation} from '@react-navigation/native';

const recentlyViewed = [
  {
    id: 1,
    thumbnail:
      'https://nhungcuonsachhay.com/wp-content/uploads/2021/05/Thang-quy-nho-Nguyen-Nhat-Anh.jpg',
    price: '¥11',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
  {
    id: 2,
    thumbnail:
      'https://nhungcuonsachhay.com/wp-content/uploads/2021/05/Thang-quy-nho-Nguyen-Nhat-Anh.jpg',
    price: '¥11',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
  {
    id: 3,
    thumbnail:
      'https://nhungcuonsachhay.com/wp-content/uploads/2021/05/Thang-quy-nho-Nguyen-Nhat-Anh.jpg',
    price: '¥11',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
  {
    id: 4,
    thumbnail:
      'https://nhungcuonsachhay.com/wp-content/uploads/2021/05/Thang-quy-nho-Nguyen-Nhat-Anh.jpg',
    price: '¥11',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
  {
    id: 5,
    thumbnail:
      'https://nhungcuonsachhay.com/wp-content/uploads/2021/05/Thang-quy-nho-Nguyen-Nhat-Anh.jpg',
    price: '¥11',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
  {
    id: 6,
    thumbnail:
      'https://nhungcuonsachhay.com/wp-content/uploads/2021/05/Thang-quy-nho-Nguyen-Nhat-Anh.jpg',
    price: '¥11',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
  {
    id: 7,
    thumbnail:
      'https://nhungcuonsachhay.com/wp-content/uploads/2021/05/Thang-quy-nho-Nguyen-Nhat-Anh.jpg',
    price: '¥11',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
  {
    id: 8,
    thumbnail:
      'https://nhungcuonsachhay.com/wp-content/uploads/2021/05/Thang-quy-nho-Nguyen-Nhat-Anh.jpg',
    price: '¥11',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
];

const recommended = [
  {
    id: 1,
    name: 'Denim Jeans',
  },
  {
    id: 2,
    name: 'Mini Skirt',
  },
  {
    id: 3,
    name: 'Jacket',
  },
  {
    id: 4,
    name: 'Accessories',
  },
  {
    id: 5,
    name: 'Sports Accessories',
  },
  {
    id: 6,
    name: 'Yoga Pants',
  },
  {
    id: 7,
    name: 'Eye Shadow',
  },
];

const SearchScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');

  const showSearchResult = () => {
    navigation.navigate('SearchResult');
    // navigation.dispatch(StackActions.push(Constant.nameScreens.DetailContact))
  };

  return (
    <View style={styles.rootView}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchInput}
          onChangeText={setText}
          value={text}
          placeholder={'Please type here…'}
        />
        <TouchableOpacity style={styles.searchBtn} onPress={showSearchResult}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={24}
            color={Constant.colors.black}
          />
        </TouchableOpacity>
      </View>

      {/* begin Recently Viewed */}
      <View style={styles.listView}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderLeft}>Recently Viewed</Text>
          <TouchableOpacity style={styles.cleanBtn}>
            <Text style={styles.listHeaderRight}>Clear</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.flatList}
          data={recentlyViewed}
          renderItem={({item, index}) => <ProductCard product={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* end Recently Viewed */}

      {/* begin Recommended */}
      <View style={styles.listView}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderLeft}>Recommended</Text>
          <TouchableOpacity style={styles.cleanBtn}>
            <Text style={styles.listHeaderRight}>Refresh</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recommendedView}>{/* content */}</View>
      </View>
      {/* end Recommended */}

      {/* begin You May Also Like */}
      <View style={styles.listView}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderLeft}>You May Also Like</Text>
        </View>

        <FlatList
          style={styles.flatList}
          data={recentlyViewed}
          renderItem={({item, index}) => <ProductCard product={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* end You May Also Like */}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: Constant.colors.white,
    padding: 14,
  },
  searchView: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: Constant.colors.white,
    borderColor: Constant.colors.gray,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    flex: 1,
    position: 'relative',
  },
  searchBtn: {
    position: 'absolute',
    right: 10,
  },
  listView: {
    marginTop: 20,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listHeaderLeft: {
    fontSize: 14,
    color: Constant.colors.textPrimary,
  },
  cleanBtn: {},
  listHeaderRight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Constant.colors.textColor,
  },
  flatList: {
    marginVertical: 15,
  },
  recommendedView: {
    paddingVertical: 5,
    width: '100%',
  },
});

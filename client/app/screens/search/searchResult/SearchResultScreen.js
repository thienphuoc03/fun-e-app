import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Constant from '../../../utils/Constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../../../components/card/ProductCard';

const searchResults = [
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
    price: '¥12',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
  {
    id: 3,
    thumbnail:
      'https://nhungcuonsachhay.com/wp-content/uploads/2021/05/Thang-quy-nho-Nguyen-Nhat-Anh.jpg',
    price: '¥13',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
  {
    id: 4,
    thumbnail:
      'https://nhungcuonsachhay.com/wp-content/uploads/2021/05/Thang-quy-nho-Nguyen-Nhat-Anh.jpg',
    price: '¥14',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
  {
    id: 5,
    thumbnail:
      'https://nhungcuonsachhay.com/wp-content/uploads/2021/05/Thang-quy-nho-Nguyen-Nhat-Anh.jpg',
    price: '¥15',
    name: 'Thằng quỷ nhỏ Nguyễn Nhật Ánh',
  },
];

const SearchResultScreen = ({route, navigation}) => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.rootView}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchInput}
          onChangeText={setText}
          value={text}
          placeholder={'Please type here…'}
        />
        <TouchableOpacity style={styles.searchBtn}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={24}
            color={Constant.colors.black}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.filterView}>
        <TouchableOpacity style={styles.filterBtn}>
          <Icon name="signal" style={styles.filterIcon} />
          <Text style={styles.filterName}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Icon name="filter" style={styles.filterIcon} />
          <Text style={styles.filterName}>Filter</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.flatList}
        data={searchResults}
        renderItem={({item, index}) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchResultScreen;

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
  filterView: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  filterBtn: {
    paddingVertical: 10,
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  filterIcon: {
    color: Constant.colors.black,
  },
  filterName: {
    color: Constant.colors.textColor,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  flatList: {
    marginVertical: 10,
    marginLeft: 25,
  },
});

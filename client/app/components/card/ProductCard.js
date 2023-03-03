import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import Constant from '../../utils/Constant';

const ProductCard = ({product}) => {
  return (
    <View style={styles.rootView} key={product.id}>
      <Image
        style={styles.productThumbnail}
        source={{
          uri: product?.thumbnail,
        }}
      />
      <Text style={styles.priceView}>{product?.price}</Text>
      <Text style={styles.productName} numberOfLines={1}>
        {product?.name}{' '}
      </Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  rootView: {
    width: 120,
    marginHorizontal: 7,
  },
  productThumbnail: {
    borderRadius: 5,
    height: 150,
    width: 'auto',
    resizeMode: 'contain',
  },
  priceView: {
    fontSize: 14,
    color: Constant.colors.textColor,
    paddingTop: 5,
  },
  productName: {
    fontSize: 14,
    color: Constant.colors.textColor,
    paddingTop: 5,
    fontWeight: 'bold',
    width: '100%',
  },
});

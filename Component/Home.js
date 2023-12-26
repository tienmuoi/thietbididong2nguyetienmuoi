// Home.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Header from './Header';


const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const navigateToProductDetail = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <ScrollView>
      <Header/>
      <View style={styles.container}>
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productContainer}
            onPress={() => navigateToProductDetail(product)}
          >
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.productName}>{product.title}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    flexWrap: 'wrap', // Cho phép nhiều dòng
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    aspectRatio: 1, // Tỉ lệ hình ảnh cố định
  },
  productName: {
    marginTop: 5,
    fontSize: 16,
  },
  productPrice: {
    marginTop: 5,
    fontSize: 14,
    color: 'green',
  },
});

export default Home;

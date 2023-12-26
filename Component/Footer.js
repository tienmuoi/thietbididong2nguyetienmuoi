import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToProducts = () => {
    navigation.navigate('product'); 
  };

  const navigateToMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerItem} onPress={navigateToHome}>
        <Icon name="home-outline" size={30} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerItem} onPress={navigateToProducts}>
        <Icon name="cube-outline" size={30} color="black" />
        <Text>Products</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerItem} onPress={navigateToMenu}>
        <Icon name="menu-outline" size={30} color="black" />
        <Text>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'yellow',
    paddingVertical: 10,
  },
  footerItem: {
    alignItems: 'center',
  },
});

export default Footer;

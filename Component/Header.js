import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';


const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/Image/logotgdd.jpg')} style={styles.logoImage} />
      </View>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="Nhập từ khóa..."
        />
      </View>
      <View style={styles.icons}>
        <Image source={require('../assets/Image/cart.jpg')} style={styles.icon} />
        <Image source={require('../assets/Image/list.jpg')} style={styles.icon} />
        <Image source={require('../assets/Image/account.jpg')} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    marginRight: 20,
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  search: {
    backgroundColor: 'white',
    flex: 1,
    marginLeft: 10,
    borderRadius: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});

export default Header;

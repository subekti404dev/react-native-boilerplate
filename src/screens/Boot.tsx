import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import NavigationUtil from '../utils/NavigationUtil';

type ProfileScreenNavigationProp = StackNavigationProp<any>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Boot = (props: Props) => {
  React.useEffect(() => {
    setTimeout(() => {
      NavigationUtil.reset(props.navigation, 'Home')
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Loading</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default Boot;

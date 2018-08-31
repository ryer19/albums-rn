import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Greeting from './components/first';
import AlbumList from './components/AlbumList'


export default class App extends React.Component {
  render() {
    // const { container } = styles;
    return (
      <View>
        <Header headerName={"Header"} />
        <AlbumList />

      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#00ffff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
// });

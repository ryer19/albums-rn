import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AlbumList extends Component {
  state = {
    albumList:['a', 'b', 'c']
  }
  render() {
    let albumList2 = this.state;
    let showAlbums = albumList2.map((album) => {
      <Text> {album} </Text>
    })
    return (
      <View style={styles.listStyle}>
        {showAlbums}
      </View>
    )
  }
}
// const AlbumList = () => {

// }

const styles = StyleSheet.create({
  listStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: 'yellow'
  }
})
export default AlbumList;
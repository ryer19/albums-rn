import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AlbumList extends Component {
  state = {
    albumList: []
  }

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          albumList: responseData
        })
      })
      .catch(err => console.log(err))
  }
  //()
  // this.setState({ albums: responseData }));
  render() {
    let albumList2 = this.state.albumList;
    let showAlbums = albumList2.map((album, i) => {
      return (

        <Text key={i}>  {album} </Text>

      )
    })
    console.log(Array.isArray(showAlbums))
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
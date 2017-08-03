import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  
  state = { albums: [] };

  componentWillMount() {
    // console.log('componenrWillMount in Album List');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => {
        return <AlbumDetail key={album.title} album={album}/>
    });
  }

  render() {
    console.log(this.state);

    return ( 
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles =StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center'
    },
  textStyle: {
    fontSize: 20,
    color: '#683030'
    }
});

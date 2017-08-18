import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView
} from 'react-native';
import AlbumDetail from './AlbumDetail';
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {
  
  componentWillMount(){
      const ds= new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(this.props.libraries);
  }
  
  renderRow(library){
      return <ListItem library = {library}/>;
  }

  render() {
    return(
        <ListView
            dataSource = {this.dataSource}
            renderRow = {this.renderRow}
        />
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

const mapStateToProps = state => {
    return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);
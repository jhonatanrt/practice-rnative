import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

export default class AlbumDetail extends Component {

  render(){
    const { title,thumbnail_image, artist, image , url } = this.props.album;

    return ( 
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                        style={styles.thumbnailStyle}
                        source={{ uri: thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={styles.imageStyle}
                    source={{ uri: image}} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
  }
}


const styles = StyleSheet.create({
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        color: '#000'
    },
    thumbnailStyle:{
        width: 50,
        height: 50
    },
    thumbnailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle:{
        height: 300,
        flex: 1,
        width: null
    }
});
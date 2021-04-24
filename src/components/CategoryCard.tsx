import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ICategory } from "../interface";


export type Props = {
    items: ICategory
}

export class CategoryCard extends Component<Props>{

    getBackgroundColor = (color: string) => {
        return {
            backgroundColor: color,
        }
      }

    render(){
        const {items} = this.props;
        
        return (
            <View style={[styles.card, this.getBackgroundColor(items.bgColor)]}>
                <Image source={items.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{items.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card : {
        width: 240,
        height: 100,
        borderRadius: 18,
        // borderWidth: 1,
        // borderColor: '#E2E2E2',
        // borderStyle:'solid',
        elevation:2,
        backgroundColor:'#FFFFFF',
        marginEnd: 12,
        padding:12,
        flex:1,
        flexDirection:'row'
    },
    cardImage: {
        width:68,
        height:68,
        marginVertical:20,
        alignSelf:'center',
        flex:1,
        flexDirection:'column'
    },
    cardTitle : {
        color: '#3E423F',
        fontSize: 20,
        textAlign: 'left',
        fontWeight:'bold',
        flex:2,
        flexDirection:'column',
        textAlignVertical: 'center',
        paddingStart: 12
    }
})
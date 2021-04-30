import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Props{
    icon:string,
    title:string
}

export class AccountItem extends Component<Props>{

    render(){
        return (
            <View style={{flex:1, flexDirection:'row',paddingVertical:16, borderBottomWidth:1, borderBottomColor:'#E2E2E2'}}>
                <Icon name={this.props.icon} size={26} color='#181725'
                    style={{flex:1, flexDirection:'column', alignSelf:'flex-start'}} />
                <Text style={{flex:4, flexDirection:'row', justifyContent:'center', textAlign:'left',color:'#181725', fontSize:18, fontWeight:'700'}}>
                    {this.props.title}
                </Text>
                <Icon name={'chevron-right'} size={30} color='#181725'
                    style={{flex:1, flexDirection:'column', alignSelf:'flex-end', textAlign:'right'}} />
            </View>
        )
    }
}
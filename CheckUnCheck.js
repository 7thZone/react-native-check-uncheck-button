import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
export default class CheckUnCheck extends Component{
    
    static propTypes = {
		onValueChange: PropTypes.func
    };
    
    static defaultProps = {
        onValueChange: () => null
    };

    constructor(){
        super();
        this.state={
            checked:1,
            width:null,
            height:null,
            padding:10,
            borderRadius:10,
            borderWidth:1,
            borderColor: '#eeeeee',
            color:'#ffffff',
            fontSize:16,
        };
        
    }

    _onPress() {
        const { onValueChange } = this.props;
        if(!this.state.checked){
            this.setState({
                checked:true,
            }, () => onValueChange(this.state.checked))
         } else {
             this.setState({
                checked:false,
             })
         }
       
    }
    render(){
        return(
                <TouchableHighlight 
                    activeOpacity={1}
                    underlayColor='#ffffff'
                    onPress={() => this._onPress()}
                >
                    <View
                        style={[
                            this.state.checked === false? {backgroundColor:this.props.checkedBgColor} : {backgroundColor:this.props.unCheckBgColor}
                           ,{
                                justifyContent:'center',
                                alignItems:'center',
                                width:this.props.CheckBtnWidth || this.state.width,
                                height:this.props.CheckBtnHeight || this.state.height,
                                padding: this.props.CheckBtnPadding || this.state.padding,
                                borderRadius: this.props.CheckBtnRadius || this.state.borderRadius,
                                borderWidth: this.props.borderWidth || this.state.borderWidth,
                                borderColor: this.props.borderColor || this.state.borderColor,
                            }]}
                    >
                        <Text style={[
                            {   
                                color:this.props.textColor || this.state.color,
                                fontSize:this.props.CheckBtnFontSize || this.state.fontSize,
                                fontWeight: this.props.CheckBtnFontWeight || this.state.fontWeight
                            }
                        ]}>
                            {this.props.text}
                        </Text>
                    </View>
                </TouchableHighlight>
        );
    }
}
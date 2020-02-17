import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globleStyle } from '../assets/styles/global';

export default function CustomButton({ title, styleContainar, styleText, onPressFn }) {
    function toggaleModal() {

    }
    return(
        <TouchableOpacity style={styleContainar} onPress={()=> { alert('4444'); onPressFn('data1234')}}>
            <Text style={styleText}>{title}</Text>
        </TouchableOpacity>
    )
}

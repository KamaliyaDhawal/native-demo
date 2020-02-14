import React, { useState } from 'react';
import { View, Modal, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { globleStyle } from '../assets/styles/global';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const width = Math.round(Dimensions.get('window').width);

export default function FilderModal({ visible, navigation }) {
    const styles = globleStyle;
    const [modalState, setModalState] = useState(visible);

    return(
        <Modal
            visible={modalState}
            transparent={true}
        >
                <View style={[styles.modalContainer, styles.selfLeft]}>
                    <ImageBackground style={styles.modelBackgroundImage} source={require('../assets/images/game_bg.png')}>
                        <View style={{
                            flex: 1,
                            alignContent: 'center'
                        }}>
                            <View style={ styles.filterTitleConatiner }>
                                <MaterialCommunityIcons
                                    name='backburger'
                                    size={28}
                                    color='gray'
                                    style={{
                                        marginTop: 5
                                    }}
                                    onPress={()=> {
                                        setModalState(false);
                                    }}
                                />
                                <Text style={{
                                    color: 'gray',
                                    fontSize: 28,
                                    alignSelf: 'center',
                                }}>Channel Finder</Text>
                            </View>
                            <Image
                                source={require('../assets/search.png')}
                                style={{
                                    height: width/2,
                                    width: width/2,
                                    alignSelf: 'center',
                                    marginTop: 24
                                }}
                            />
                        </View>
                        <View style={{
                            flex: 1,
                            alignSelf: 'center',

                        }}>
                            <TouchableOpacity style={styles.sidebarMenuListContainer} onPress={()=> {
                                setModalState(false);
                                navigation.navigate('Home');
                            }} >
                                <MaterialCommunityIcons name='home' size={26} color='gray' />
                                <Text style={[ styles.filterTitleText, {marginLeft: 8}]}>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sidebarMenuListContainer} onPress={()=> {
                                setModalState(false);
                                navigation.navigate('Oprator');
                            }} >
                                <MaterialCommunityIcons name='tower-beach' size={26} color='gray' />
                                    <Text style={[ styles.filterTitleText, {marginLeft: 8}]}>
                                        Oprators
                                    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sidebarMenuListContainer} onPress={()=> {
                                setModalState(false);
                                navigation.navigate('Category');
                            }} >
                                <MaterialCommunityIcons name='view-grid' size={26} color='gray' />
                                <Text style={[ styles.filterTitleText, {marginLeft: 8}]}>Categories</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sidebarMenuListContainer} onPress={()=> {
                                setModalState(false);
                                navigation.navigate('Favorite');
                            }} >
                                <MaterialCommunityIcons name='heart' size={26} color='gray' />
                                <Text style={[ styles.filterTitleText, {marginLeft: 8}]}>Favotites</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
        </Modal>
    )
}

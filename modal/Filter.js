import React, { useState } from 'react';
import { View, Modal, Text, ImageBackground, FlatList, TouchableOpacity, CheckBox } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globleStyle } from '../assets/styles/global';
import { categories } from '../source/categories/data';
import { oprators } from '../source/oprators/data';

export default function FilderModal({ visible }) {
    const styles = globleStyle;
    const [modalState, setModalState] = useState(visible);
    const [categoryStatus, setCategoryState] = useState(true);
    const [categoryIcon, setCategoryIcon] = useState('down');
    const [opratorStatus, setOprarotState] = useState(true);

    function renderList(data, state) {
        alert(state);
        if(state) {
            return(
                <FlatList
                    data={data}
                    renderItem={({item}) => {
                        return(
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    {/* <CheckBox
                                    value={item.key}
                                    onValueChange={() => {alert('test')}}
                                    /> */}
                                    <Text style={{
                                        fontSize: 16,
                                        color: 'gray',
                                        marginTop: 5,
                                    }}>{item.name}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            )
        }
    }

    return(
        <Modal
            visible={modalState}
            transparent={true}
        >
                <View style={[styles.modalContainer, styles.selfRight]}>
                    {/* <ImageBackground style={styles.modelBackgroundImage} source={require('../assets/images/game_bg.png')}> */}
                        <View style={styles.filterTitleConatiner}>
                            <Text style={styles.filterTitleText}>
                                Filter
                            </Text>
                            <AntDesign
                                name="doubleright"
                                size={24}
                                onPress={() => {setModalState(!modalState)}}
                                color = 'gray'
                                style={styles.selfRight}
                            />
                        </View>

                        <TouchableOpacity 
                            style={styles.filterAccordianContainde}
                            onPress={() => {
                                setCategoryState(!opratorStatus);
                                // setCategoryIcon('up');
                            }}
                        >
                            <Text style={{
                                fontSize: 20,
                                color: 'gray'
                            }}>
                                oprators
                            </Text>
                            <AntDesign
                                name={categoryIcon}
                                size={20}
                                onPress={() => {setModalState(!modalState)}}
                                color = 'gray'
                                style={styles.selfRight}
                            />
                        </TouchableOpacity>
                        <View>
                            {renderList(oprators, opratorStatus)}
                        </View>

                        <TouchableOpacity 
                            style={styles.filterAccordianContainde}
                            onPress={() => {
                                setCategoryState(!categoryStatus);
                                // setCategoryIcon('up');
                            }}
                        >
                            <Text style={{
                                fontSize: 20,
                                color: 'gray'
                            }}>
                                Categories
                            </Text>
                            <AntDesign
                                name={categoryIcon}
                                size={20}
                                onPress={() => {setModalState(!modalState)}}
                                color = 'gray'
                                style={styles.selfRight}
                            />
                        </TouchableOpacity>
                        <View>
                            {renderList(categories, categoryStatus)}
                        </View>
                    {/* </ImageBackground> */}
                </View>
        </Modal>
    )
}
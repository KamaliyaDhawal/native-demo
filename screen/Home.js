import React, { useState } from 'react';
import Tabs from '../component/Tabs';
import Header from '../component/Header';
import Slider from '../component/Slider';
import Devider from '../component/Devider';
import { AntDesign } from '@expo/vector-icons';
import { oprators } from '../source/oprators/data';
import { globleStyle } from '../assets/styles/global';
import { categories } from '../source/categories/data';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import FilderModal from '../modal/Profile';

export default function Home({navigation}) {
    const styles = globleStyle;
    const [modalState, setModalState] = useState(true);

    function showModal(state) {
        // alert('Hello');
        return(
            <FilderModal visible={true} navigation={navigation} />
        );
    }

    return(
        <View style={styles.container}>
            {showModal(modalState)}
            {/* <FilderModal visible={true} /> */}
            <Header title="Channel Finder" navigation={navigation} />
            <View style={styles.textContainer}>
                <ScrollView>
                    <View style={styles.titleContainer} >
                        <Text style={styles.sliderTitle}>Oprators</Text>
                        <TouchableOpacity>
                            <AntDesign
                                name="rightcircleo"
                                size={24}
                                color='#999'
                                style={styles.detailClickableIcon}
                                onPress={()=>{
                                    navigation.navigate('Oprator');
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Slider
                        data={oprators}
                        horizontal={true}
                        page = 'home'
                        navigation={navigation}
                        sliderName='oprators'
                    />
                    <Devider/>
                    <View style={styles.titleContainer} >
                        <Text style={styles.sliderTitle}>Categories</Text>
                        <TouchableOpacity>
                            <AntDesign
                                name="rightcircleo"
                                size={24}
                                color='#999'
                                style={styles.detailClickableIcon}
                                onPress={()=>{
                                    navigation.navigate('Category');
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Slider
                        data={categories}
                        horizontal={true}
                        page = 'home'
                        navigation={navigation}
                        sliderName='categories'
                    />
                </ScrollView>
            </View>
        </View>
    )
}

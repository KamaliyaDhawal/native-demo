import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Tabs from '../component/Tabs';
import Slider from '../component/Slider';
import Header from '../component/Header';
import Devider from '../component/Devider';
import { globleStyle } from '../assets/styles/global';
import { categories } from '../source/categories/data';

export default function Home({navigation}) {
    const styles = globleStyle;
    return(
        <View style={styles.container}>
            <Header title="Channel Finder" navigation={navigation} />
            <View style={styles.textContainer}>
                <ScrollView>
                    <View style={styles.titleContainer} >
                        <Text style={styles.sliderTitle}>Oprators</Text>
                        <TouchableOpacity>
                            <Feather
                                name="arrow-right-circle"
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
                        data={categories}
                        horizontal={true}
                        page = 'home'
                    />
                    <Devider/>
                    <View style={styles.titleContainer} >
                        <Text style={styles.sliderTitle}>Categories</Text>
                        <TouchableOpacity>
                            <Feather
                                name="arrow-right-circle"
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
                    />
                </ScrollView>
            </View>
            <Tabs navigation={ navigation } id={1}/>
        </View>
    )
}

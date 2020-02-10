import React from 'react';
import { View, FlatList, Text, Image, SafeAreaView } from 'react-native';
import { globleStyle } from '../assets/styles/global';
import { Feather } from '@expo/vector-icons';

export default function Slider({navigation, data, horizontal, page}) {
    const styles = globleStyle;
    return(
        <View>
            <SafeAreaView>
            <FlatList
                data={data}
                renderItem = {({item}) => {
                    const { name, image } = item;
                    if(page === 'home') {
                        return (
                            <View style={{
                                marginBottom: 10
                            }}>
                                <View style={styles.imageContainer}>
                                    <Image
                                        source={image}
                                        style={styles.sliderImage}
                                    />
                                </View>
                                <Text style={styles.sliderText}>{name}</Text>
                            </View>
                        );
                    } else {
                        return (
                            <View style={styles.card}>
                                <Image
                                    source={image}
                                    style={styles.sliderOneImage}
                                />
                                <View style={styles.sliderTextTopOverLeft}>
                                    <Text style={styles.sliderOneTopText}>{name}</Text>
                                </View>
                                <View style={styles.sliderTextBottomOver}>
                                    <Text style={styles.sliderOneBottomText}>
                                        <Feather
                                            name="tv"
                                            color="#fff"
                                            size={16}
                                        />
                                        452 Channels
                                    </Text>
                                    <Text style={styles.sliderOneBottomText}>
                                        <Feather
                                            name="radio"
                                            color="#fff"
                                            size={16}
                                        />
                                        8 Oprators
                                    </Text>
                                    <Text style={styles.sliderOneBottomText}>
                                        <Feather
                                            name="heart"
                                            color="red"
                                            size={16}
                                            style={{
                                                margin: 50
                                            }}
                                        />
                                        0 Favorites
                                    </Text>
                                </View>
                            </View>
                        );
                    }
                }}
                horizontal = {horizontal}
                contentContainerStyle={{ paddingBottom: 16}}
            />
            </SafeAreaView>
        </View>
    )
}

import React, { useState } from 'react';
import Tabs from '../component/Tabs';
import Header from '../component/Header';
import { globleStyle } from '../assets/styles/global';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { channels } from '../source/channels';
import { categories } from '../source/categories/data';
import { oprators } from '../source/oprators/data';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ChannelList({navigation}) {
    const styles = globleStyle;
    const filter = navigation.getParam('filter');
    
    let [displayContent, setDisplayContent] = useState(channels);
    if(filter) {
        displayContent = channels.filter((item) => {
            let condition = 1 && (filter.category? (item.category ==  filter.category) : 1) &&  (filter.oprator? (item.oprator ==  filter.oprator) : 1);
            return (condition);
        });
    }

    const search = (string) => {
        displayContent = displayContent.filter((item) => {
            return (item.name.toLowerCase().search(string.toLowerCase())>-1 || item.number.search(string)>-1 );
        });
        console.log(displayContent);
        setDisplayContent(displayContent);
    }
    
    console.log('search', search);

    return(
        <View style={styles.container}>
            <Header title="Channel List" navigation={navigation} subpage={true} icon='leftcircleo' searchFn={search} />
                <View style={styles.textContainer}>
                    <FlatList
                        data = {displayContent}
                        renderItem={({item}) => {
                            let oprator = oprators[item.oprator - 1];
                            let category = categories[item.category - 1];
                            return(
                                <View style={[ styles.card, styles.channelListingContainer ]}>
                                    <View style={styles.channelNumberContainer}>
                                        <Text style={styles.channelListHeader}>
                                            {item.name}
                                        </Text>
                                        <Text style={styles.channelListHeader}>
                                            {item.number}
                                        </Text>
                                    </View>
                                    <View style={styles.channelNumberContainer}>
                                        
                                        <MaterialCommunityIcons
                                            name = 'radio-tower'
                                            color = '#fff'
                                            size = {20}
                                        />
                                        <Text style={styles.channelListingText}>
                                            {oprator? (oprator.name.toString().length>8? oprator.name.substring(0, 8)+'....':oprator.name): ''}
                                        </Text>

                                        <Text style={styles.channelListingText}>|</Text>

                                        <MaterialCommunityIcons
                                            name = 'playlist-check'
                                            color = '#fff'
                                            size = {20}
                                        />

                                        <Text style={styles.channelListingText}>
                                            {category? (category.name.toString().length>8? category.name.substring(0, 8)+'....':category.name): ''}
                                        </Text>
                                        
                                        <Text style={styles.channelListingText}>|</Text>
                                        
                                        <MaterialCommunityIcons
                                            name = 'tape-measure'
                                            color = '#fff'
                                            size = {20}
                                        />
                                        <Text style={styles.channelListingText}>
                                            {item.hd==1? 'HD': 'Non HD'}
                                        </Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            <Tabs navigation={ navigation } id={1}/>
        </View>
    )
}

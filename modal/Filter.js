import React, { useState } from 'react';
import { View, Modal, Text, ImageBackground, FlatList, CheckBox, ScrollView, Button } from 'react-native';
import { globleStyle } from '../assets/styles/global';
import { categories } from '../source/categories/data';
import { oprators } from '../source/oprators/data';

export default function FilderModal({ visible }) {
    const styles = globleStyle;
    const [modalState, setModalState] = useState(visible);
    const [categoriesData, setCategoriesData] = useState(categories);
    const [opratorsData, setOpratorsData] = useState(oprators);
    const [opratorsSelectAll, setOpratorSelectAll] = useState(false);
    const [categoriesSelectAll, setCategorySelectAll] = useState(false);
    const [opratorsRefresh, setOpratorRefresh] = useState(false);

    function renderList(data, flag) {
        return(
            <FlatList
                data={data}
                extraData = {opratorsRefresh}
                renderItem={({item}) => {
                    return(
                        <View style={styles.flatListListContainer}>
                            <CheckBox
                                value={data[(+item.key)-1].checked}
                                onValueChange={(event) => {
                                    data[((+item.key)-1)].checked = !data[((+item.key)-1)].checked;
                                    if(flag === 'oprator') {
                                        setOpratorsData(data);
                                        const newData = data.filter((item) => {
                                            return (item.checked === false);
                                        });
                                        if(newData.length > 0) {
                                            setOpratorSelectAll(false);
                                        } else {
                                            setOpratorSelectAll(true);
                                        }
                                    } else if(flag === 'category') {
                                        setCategoriesData(data);
                                        const newData = data.filter((item) => {
                                            return (item.checked === false);
                                        });
                                        if(newData.length > 0) {
                                            setCategorySelectAll(false);
                                        } else {
                                            setCategorySelectAll(true);
                                        }
                                    }
                                    setOpratorRefresh(!opratorsRefresh);
                                }}
                            />
                            <Text style={styles.flatListListText}>
                                {item.name}
                            </Text>
                        </View>
                    )
                }}
                contentContainerStyle={{
                    marginBottom: 5,
                    borderTopColor: '#EFF0F1',
                    borderTopWidth: 4,
                }}
            />
        )
    }

    return(
        <Modal
            visible={modalState}
            transparent={true}
        >
                <View style={[styles.modalContainer, styles.selfRight]}>
                    <ImageBackground style={styles.modelBackgroundImage} source={require('../assets/images/game_bg.png')}>
                        <View style={styles.filterTitleConatiner}>
                            <Text style={styles.filterTitleText}>
                                Filter
                            </Text>
                            <Button
                                title='apply'
                                color='black'
                                onPress={() => {setModalState(!modalState)}}
                            />
                        </View>

                    <ScrollView>
                        <View style={styles.filterAccordianContainde} >
                            <CheckBox
                                value={opratorsSelectAll}
                                onValueChange={(event) => {
                                    setOpratorSelectAll(!opratorsSelectAll);
                                    const newData = opratorsData.map((item) => {
                                        item.checked = !opratorsSelectAll;
                                        return(item);
                                    });
                                    setOpratorsData(newData);
                                    setOpratorRefresh(!opratorsRefresh);
                                }}
                            />
                            <Text style={styles.flatListTitleText}>
                                Oprators
                            </Text>
                        </View>
                        <View style={styles.flatListListWrapper}>
                            {renderList(opratorsData, 'oprator')}
                        </View>

                        <View style={styles.filterAccordianContainde}>
                                <CheckBox
                                    value={categoriesSelectAll}
                                    onValueChange={(event) => {
                                        setCategorySelectAll(!categoriesSelectAll);
                                        const newData = categoriesData.map((item) => {
                                            item.checked = !categoriesSelectAll;
                                            return(item);
                                        });
                                        setCategoriesData(newData);
                                        setOpratorRefresh(!opratorsRefresh);
                                    }}
                                />
                            <Text style={styles.flatListTitleText}>
                                Categories
                            </Text>
                        </View>
                        <View style={styles.flatListListWrapper}>
                            {renderList(categoriesData, 'category')}
                        </View>
                    </ScrollView>
                    </ImageBackground>
                </View>
        </Modal>
    )
}

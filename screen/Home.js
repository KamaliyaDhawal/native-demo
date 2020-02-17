import React, { Component } from 'react';
import Header from '../component/Header';
import Slider from '../component/Slider';
import Devider from '../component/Devider';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { oprators } from '../source/oprators/data';
import { globleStyle } from '../assets/styles/global';
import { categories } from '../source/categories/data';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ProfileModal from '../modal/Profile';
import FilterModal from '../modal/Filter';

export default class Home extends Component  {
    styles = globleStyle;

    constructor(props) {
        super(props);
        this.state = {
            profileStatus: false,
            filterStatus: false,
            modal: ''
        }
        this.openProfile = this.openProfile.bind(this);
        this.openFilter = this.openFilter.bind(this);
    }

    openProfile() {
        this.setState({
            profileStatus: true,
        });
    }

    openFilter() {
        this.setState({
            filterStatus: true,
        });
    }

    componentDidMount() {
        this.props.navigation.setParams({
            openFilter: this.openFilter,
            openProfile: this.openProfile,
        });
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <View style={{
                    marginLeft: 25,
                    marginTop: 4
                }}>
                    <FontAwesome
                        name="home"
                        size={23}
                        color='red'
                        onPress={() => {
                            navigation.state.params.openProfile();
                        }}
                    />
                </View>
            ),
            headerRight: (
                <View style={{
                    marginRight: 20
                }}>
                    <FontAwesome
                        name="filter"
                        size={23}
                        color='yellow'
                        onPress={() => {
                            navigation.state.params.openFilter();
                        }}
                    />
                </View>
            ),
        }
      }

    closeModal=()=> {
        this.setState({
            profileStatus: false,
            filterStatus: false,
        })
    }

    render(){
        return(
            <View style={this.styles.container}>
                <View style={this.styles.textContainer}>
                    <ScrollView>
                        <ProfileModal modalClose={this.closeModal} visible={this.state.profileStatus} navigation={this.props.navigation} />
                        <FilterModal modalClose={this.closeModal} visible={this.state.filterStatus} />
                        <View style={this.styles.titleContainer} >
                            <Text style={this.styles.sliderTitle}>Oprators</Text>
                            <TouchableOpacity>
                                <AntDesign
                                    name="rightcircleo"
                                    size={24}
                                    color='#999'
                                    style={this.styles.detailClickableIcon}
                                    onPress={()=>{
                                        this.props.navigation.navigate('Oprator');
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Slider
                            data={oprators}
                            horizontal={true}
                            page = 'home'
                            navigation={this.props.navigation}
                            sliderName='oprators'
                        />
                        <Devider/>
                        <View style={this.styles.titleContainer} >
                            <Text style={this.styles.sliderTitle}>Categories</Text>
                            <TouchableOpacity>
                                <AntDesign
                                    name="rightcircleo"
                                    size={24}
                                    color='#999'
                                    style={this.styles.detailClickableIcon}
                                    onPress={()=>{
                                        this.props.navigation.navigate('Category');
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Slider
                            data={categories}
                            horizontal={true}
                            page = 'home'
                            navigation={this.props.navigation}
                            sliderName='categories'
                        />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

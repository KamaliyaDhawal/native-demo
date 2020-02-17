import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../component/Header';
import { globleStyle } from '../assets/styles/global';
import Slider from '../component/Slider';
import { categories } from '../source/categories/data';
import ProfileModal from '../modal/Profile';
import FilterModal from '../modal/Filter';
import { FontAwesome } from '@expo/vector-icons';

export default class Category extends Component  {
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
    render() {
        return(
            <View style={this.styles.container}>
                <Header title="Categories" navigation={this.props.navigation} />
                <ProfileModal modalClose={this.closeModal} visible={this.state.profileStatus} navigation={this.props.navigation} />
                <FilterModal modalClose={this.closeModal} visible={this.state.filterStatus} />
                <View style={this.styles.textContainer}>
                    <Slider
                        data={categories}
                        horizontal={false}
                        page = 'category'
                        sliderName = 'categories'
                        navigation={this.props.navigation}
                        />
                </View>
            </View>
        )
    }
}

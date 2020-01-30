import { StyleSheet, Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);
console.log('width', (width-40)/2);
console.log('height', height);
export const globleStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabsContainer: {
        flexDirection: "row",
        backgroundColor: 'black',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-between'
    },
    tabsIcon: {
        alignSelf: 'center',
        marginRight: 10
    },
    headerContainer: {
        flexDirection: "row",
        paddingTop: 32,
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'space-between',
        backgroundColor: 'black'
    },
    headerText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold'
    },
    headerIcon: {
        marginRight: 4,
        marginLeft: 14,
        marginTop: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#333'
    },
    textContainer: {
      flex: 1
    },
    sliderImage: {
        // height: (75*(width-40)/2)/100,
        width: (width-40)/2,
        height: (width-40)/2,
        margin: 10,
        // marginRight: 10,
        borderRadius: 10,
    },
    sliderText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    sliderTitle: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 24,
        color: '#888',
        fontWeight: 'bold',
    },
    deviderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    devider: {
        marginTop: 25,
        marginBottom: 15,
        marginRight: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: (width*20)/100
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailClickableIcon: {
        marginLeft: 10,
        marginTop: 13
    }
})
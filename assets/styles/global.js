import { StyleSheet, Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);
console.log('width', (200*100)/(width)); 

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
        paddingBottom: 0,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'space-between',
        backgroundColor: 'black'
    },
    searchContainer: {
        flexDirection: "row",
        paddingTop: 4,
        backgroundColor: 'black',
        paddingBottom: 10,
        paddingLeft: 9,
        borderBottomColor: '#4444',
        borderBottomWidth: 1
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
      flex: 1,
    },
    sliderImage: {
        width: (width-50)/2,
        height: (width-50)/2,
    },
    imageContainer: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'black',
        padding: 10
    },
    sliderOneImage: {
        height: (width*(200*100)/(width))/100,
        width: (width*(200*100)/(width))/100,
        alignSelf: 'center',
        opacity: 0.5
    },
    card: {
        width: (width-32),
        paddingLeft: 20,
        height: (width-100),
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        borderRadius: 10,
        backgroundColor: 'black',
        padding: 25,
        justifyContent: 'center'
    },
    sliderText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    sliderOneTopText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 22,
        marginLeft: 28,
    },
    sliderOneTopIcon: {
        margin: 22,
        opacity: 0.5,
        alignSelf: 'flex-end',
    },
    sliderOneBottomText: {
        color: '#fff',
        fontWeight: 'bold',
        margin: 0,
        lineHeight: 18,
        marginLeft: 28,
    },
    sliderTextTopOverLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    sliderTextTopOverRight: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    sliderTextBottomOver: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        paddingBottom: 10,
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
        marginTop: 15,
        marginBottom: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: (width*20)/100
    },
    titleContainer: {
        flexDirection: 'row',
    },
    detailClickableIcon: {
        marginLeft: 10,
        marginTop: 13
    },
    searchIcon: {
        position: 'absolute',
        top: 0,
        right: 10,
        bottom: 0,
        left: 0,
        // justifyContent: 'flex-end',
        alignSelf: 'flex-start'
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: (width-40),
        marginLeft: 16,
        marginRight: 16,
        height: 35,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 20,
        padding: 8,
    },
    searchIcon: {
        padding: 10,
    },
    searchInput: {
        color: '#fff',
        flex: 1,
        paddingLeft: 16,
        fontSize: 16
    },
})
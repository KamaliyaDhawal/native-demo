import { StyleSheet, Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

export const globleStyle = StyleSheet.create({
    tabsContainer: {
        flexDirection: "row",
        backgroundColor: 'black',
        paddingTop: 4,
        paddingBottom: 4,
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
    channelListingContainer: {
        height: height/5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'red',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
    },
    channelListingText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    channelNumberContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        padding: 10
    },
    channelListHeader: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '600'
    },
    modalContainer: {
        flex: 1,
        width: '72%',
        backgroundColor: 'white'
    },
    modelBackgroundImage: {
        flex: 1,
        width: '100%'
    },
    selfRight: {
        alignSelf: 'flex-end'
    },
    selfLeft: {
        alignSelf: 'flex-start'
    },
    filterTitleConatiner: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#EFF0F1',
        justifyContent: 'space-between'
    },
    filterTitleText: {
        alignSelf: 'center',
        fontSize: 24,
        color: 'gray'
    },
    filterAccordianContainde: {
        padding: 10,
        marginRight: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    flatListListContainer: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
    },
    flatListListText: {
        fontSize: 16,
        color: 'gray',
        marginTop: 5,
        marginLeft: 5,
    },
    flatListTitleText: {
        fontSize: 20,
        color: 'gray'
    },
    flatListListWrapper: {
        borderBottomColor: '#EFF0F1',
        borderBottomWidth: 4,
    },
    sidebarMenuListContainer: {
        width: '100%',
        flexDirection: 'row',
        padding: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#EFF0F1',
        borderTopWidth: 1,
        borderTopColor: '#EFF0F1'
    },
    favoritePageImage: {
        flex: 1,
        width: width,
        height: width,
    },
    favoriteContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 30,
    },
    loginButton: {
        backgroundColor: 'black',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 26
    },
    loginText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
    }
})
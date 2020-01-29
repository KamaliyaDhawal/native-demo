import { StyleSheet } from 'react-native';

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
        marginTop: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#333'
    },
    textContainer: {
      flex: 1
    },
    cardContainer: {
        height: 170,
        width: 250,
        borderRadius: 4
    },
    sliderImage: {
        height: 130,
        width: 160,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    sliderText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    sliderTitle: {
        margin: 10,
        fontSize: 24,
        color: '#888',
        fontWeight: 'bold',
    }
})
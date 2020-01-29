import { StyleSheet } from 'react-native';

export const globleStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabsContainer: {
        flexDirection: "row",
        backgroundColor: '#111',
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
        justifyContent: 'space-between'
    },
    headerText: {
        color: '#fff',
        fontSize: 28
    },
    headerIcon: {
        marginRight: 4,
        marginTop: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#222'
    },
    textContainer: {
      flex: 1
    }
})
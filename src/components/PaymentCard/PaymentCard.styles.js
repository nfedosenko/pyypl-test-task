import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6ab788',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    cardContainer: {
        height: 250,
        position: 'relative',
        overflow: 'visible'
    },
    numberContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        top: '50%',
        left: 0
    },
    expiryDate: {
        flex: 0,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        color: '#ffffff',
        fontSize: 9,
        textAlign: 'center'
    },
    slash: {
        color: '#b3adaa',
        fontSize: 20
    },
    digit: {
        height: 20,
        width: 15,
    },
    cvvDigit: {
        height: 15,
        width: 10
    },
    expiryCvvContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        top: '70%',
    }
});
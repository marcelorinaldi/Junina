import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#90F7BA',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    viewletra: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberSelectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    numberSelectButton: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    numberSelectButtonText: {
        fontSize: 18,
    },
    numberSelectValue: {
        marginHorizontal: 10,
        fontSize: 18,
    },
    letra2: {
        fontSize: 16,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 0,
    },
    gridItem: {
        width: '45%',
        marginBottom: 20,
        alignItems: 'center',
    },
    viewbotoes: {
        color: 'green',
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default css;

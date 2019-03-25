import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        padding: '5%'
    },

    titleContainer: {
        marginTop: '10%',
        marginBottom: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 20
    },

    languageFilterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '10%'
    },

    languageFilter: {
        width: '30%',
        justifyContent: 'center',
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    repositoriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },

    textButton: {
        fontSize: 20
    },

    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
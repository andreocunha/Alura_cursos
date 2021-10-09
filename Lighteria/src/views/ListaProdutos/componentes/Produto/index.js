import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FONT_FAMILY_SEMI_BOLD } from '../../../../styles/styles';

export const Item = ({ imagem, titulo, estudio, itemDesc, itemName, preco, id }) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.containerItem} onPress={() => navigation.push('DetalhesProduto', {
            itemDesc,
            imagem,
            estudio,
            titulo,
            itemName,
            preco,
            id

        })}>
            <Image source={imagem} style={styles.imagem} resizeMode="contain"/>
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        height: 168,
        backgroundColor: '#fff',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    imagem: {
        height: 84
    },
    texto: {
        marginTop: 8,
        fontSize: 14,
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        color: '#848486'
    }
})
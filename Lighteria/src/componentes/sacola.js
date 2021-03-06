import React, { useContext } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FONT_FAMILY_SEMI_BOLD, RED, WHITE } from '../styles/styles';
import { DataContext } from '../provider';

export const Sacola = () => {
    const navigation = useNavigation();
    const { itensCheckout } = useContext(DataContext);

    return (
        <TouchableOpacity onPress={() => navigation.push('Checkout')}>
            <View style={styles.containerSacola}>
                <Image
                    source={require('../assets/images/icone-sacola.png')}
                    style={styles.imagem}
                />
                {itensCheckout.length > 0 && <View style={styles.containerQuantidade}>
                    <Text style={styles.textQuantidade}>{itensCheckout.reduce((acumulado, atual) => acumulado + atual.quantidade, 0)}</Text>
                </View>}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerSacola: {
        backgroundColor: WHITE,
        padding: 18,
        borderRadius: 30,
    },
    imagem: {
        width: 30,
        height: 30
    },
    containerQuantidade: {
        backgroundColor: RED,
        borderRadius: 100,
        marginTop: -22,
        marginLeft: 11,
    },
    textQuantidade: {
        textAlign: 'center',
        padding: 4,
        fontSize: 10,
        color: WHITE,
        fontFamily: FONT_FAMILY_SEMI_BOLD
    }
});
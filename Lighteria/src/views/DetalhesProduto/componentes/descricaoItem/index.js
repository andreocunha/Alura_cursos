import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import {BLACK, FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR, FONT_SIZE_LARGE, FONT_SIZE_MEDIUM, FONT_SIZE_SMALL, FONT_SIZE_X_LARGE} from '../../../../styles/styles'
import {Botao} from '../../../../componentes/botao'
import { formataValor } from '../../../../utils/utils'
import { useNavigation } from '@react-navigation/native'

export const DescricaoItem = ({
    imagem, estudio, itemDesc, itemName, titulo, preco, id
}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemPosicao}>
                <View style={styles.item}>
                    <View style={styles.textoPosicao}>
                        <View>
                            <Text style={styles.textoSuperior}>{estudio}</Text>
                            <Text style={styles.textoMedio}>{itemName}</Text>
                            <Text style={styles.textoInferior}>{titulo}</Text>
                        </View>
                        <Image source={imagem} style={styles.imagem} />
                    </View>
                    <Text style={styles.textoDescricao}>{itemDesc}</Text>
                    <View style={styles.rodape}>
                        <Text style={styles.moeda}>{formataValor(preco)}</Text>
                        <Botao 
                            titulo="COMPRAR" 
                            width="100%" 
                            onPress={() => navigation.push('Checkout')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 4,
        marginTop: -60,
    },
    itemPosicao: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    item: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 28,
        width: '80%',
        elevation: 4,
    },
    textoPosicao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagem: {
        width: 30,
        height: 72,
    },
    textoSuperior: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: FONT_SIZE_MEDIUM,
        marginBottom: 4,
    },
    textoMedio: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: FONT_SIZE_X_LARGE,
        marginBottom: 4,
    },
    textoInferior: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: FONT_SIZE_SMALL,
        marginBottom: 12,
        color: '#CACACA',
    },
    textoDescricao: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: FONT_SIZE_SMALL,
        marginTop: 10,
        color: '#ACAAAB',
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    moeda: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: FONT_SIZE_LARGE,
        color: BLACK,
    },
})
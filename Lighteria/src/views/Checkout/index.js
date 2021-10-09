import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { DataContext } from '../../provider'
import {
    COR_BOTAO_ACAO,
    FONT_FAMILY_BOLD,
    FONT_FAMILY_SEMI_BOLD,
    FONT_SIZE_LARGE,
    FONT_SIZE_SMALL,
    FONT_SIZE_XX_LARGE,
  } from '../../styles/styles';

export const Checkout = () => {
    const { itensCheckout } = useContext(DataContext)
    const Titulo = ({children}) => <Text style={styles.titulo}>{children}</Text>

    return (
        <View style={styles.container}>
            <Titulo>Checkout</Titulo>
            {itensCheckout.map((item) => {
                <View>
                    <Text>{item.titulo}</Text>
                </View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 24,
    },
    titulo: {
      fontFamily: FONT_FAMILY_SEMI_BOLD,
      fontSize: FONT_SIZE_XX_LARGE,
      marginBottom: 10
    },
    total: {
      fontSize: FONT_SIZE_LARGE,
      fontFamily: FONT_FAMILY_SEMI_BOLD,
      marginVertical: 36,
    },
    continuarTexto: {
      fontFamily: FONT_FAMILY_BOLD,
      fontSize: FONT_SIZE_SMALL,
      color: COR_BOTAO_ACAO,
      marginTop: 20,
      textAlign: 'center',
    },
  });
  
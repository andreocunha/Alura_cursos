import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Background } from './componentes/background';
import { DescricaoItem } from './componentes/descricaoItem';

export const DetalhesProduto = ({route}) => {
    const {titulo, estudio, itemDesc, itemName, imagem, preco, id} = route.params;
    return(
        <View style={styles.constainer}>
            <Background />
            <DescricaoItem 
                imagem={imagem}
                titulo={titulo}
                estudio={estudio}
                itemDesc={itemDesc}
                itemName={itemName}
                preco={preco}
                id={id}               
            />
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,

    }
});
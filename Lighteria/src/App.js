import React from 'react'
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { COR_DE_FUNDO } from './styles/styles'
import ListaProdutos from './views/ListaProdutos'
import { DetalhesProduto } from './views/DetalhesProduto'
import Provider from './provider'
import { Checkout } from './views/Checkout'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Provider>
                <SafeAreaView style={styles.container}>
                    <Stack.Navigator initialRouteName = "ListaProdutos">
                        <Stack.Screen 
                            name = "ListaProdutos" 
                            title = "Lista de Produtos" 
                            component = {ListaProdutos} 
                            options = {{ headerShown: false }}
                        />
                        <Stack.Screen 
                            name = "DetalhesProduto" 
                            title = "Detalhes do produto" 
                            component = {DetalhesProduto} 
                            options = {{ headerShown: false }}
                        />
                        <Stack.Screen 
                            name = "Checkout" 
                            title = "Tela de checkout"
                            component = {Checkout} 
                            options = {{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </SafeAreaView>
            </Provider>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: COR_DE_FUNDO
    }
})

export default App;
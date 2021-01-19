import React from 'react'

import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/home'
import QtdExames from './pages/qtd-exames'
import QtdMunicipiosCasosConfirmados from './pages/qtd-municipios-casos-confirmados'
import QtdObitos from './pages/qtd-obitos'
import QtdObitosPorMunicipio from './pages/qtd-obitos-por-municipios'
import QtdPorDia from './pages/qtd-por-dia-tipo'
import QtdPorFaixaEtaria from './pages/qtd-por-faixa-etaria-sexo'
import QtdMunicipio from './pages/qtd-por-municipio'
import QtdPorTipo from './pages/qtd-por-tipo'
import QtdSuspeitos from './pages/qtd-suspeitos'


export default function Routes() {
    const AppStack = createStackNavigator()

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: true }}>
                <AppStack.Screen
                    name='home'
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <AppStack.Screen
                    name='qtd-exames'
                    component={QtdExames}
                    options={{ title: 'Quantidade de Exames' }}
                />
                <AppStack.Screen
                    name='qtd-municipios-casos-confirmados'
                    component={QtdMunicipiosCasosConfirmados}
                    options={{ title: 'Municipios com Casos Confirmados' }}
                />
                <AppStack.Screen
                    name='qtd-obitos'
                    component={QtdObitos}
                    options={{ title: 'Quantidade de Obitos' }}
                />
                <AppStack.Screen
                    name='qtd-obitos-por-municipios'
                    component={QtdObitosPorMunicipio}
                    options={{ title: 'Obitos Por Municipio' }}
                />
                <AppStack.Screen
                    name='qtd-por-dia-tipo'
                    component={QtdPorDia}
                    options={{ title: 'Casos Por Dia' }}
                />
                <AppStack.Screen
                    name='qtd-por-faixa-etaria-sexo'
                    component={QtdPorFaixaEtaria}
                    options={{ title: 'Casos Por Faixa Etaria e Sexo' }}
                />
                <AppStack.Screen
                    name='qtd-por-municipio'
                    component={QtdMunicipio}
                    options={{ title: 'Casos Por Municipio' }}
                />
                <AppStack.Screen
                    name='qtd-por-tipo'
                    component={QtdPorTipo}
                    options={{ title: 'Casos Por Situacao' }}
                />
                <AppStack.Screen
                    name='qtd-suspeitos'
                    component={QtdSuspeitos}
                    options={{ title: 'Casos Suspeitos' }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
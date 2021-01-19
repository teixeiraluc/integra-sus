import React from 'react'
import { theme } from './styles.js'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default function Home(props) {
    const {navigation}=props
    return (
        <View style={theme.container}>
            <Text style={theme.header}>IntegraSUS</Text>
            <Button
                style={theme.button}
                title="Buscar casos por municipio"
                type="clear"
                onPress={() => navigation.navigate('qtd-por-municipio')}
            />
            <Button
                style={theme.button}
                title="Buscar quantidade de exames"
                type="clear"
                onPress={() => navigation.navigate('qtd-exames')}
            />
            <Button
                style={theme.button}
                title="Buscar quantidade de pessoas com COVID por municipio"
                type="clear"
                onPress={() => navigation.navigate('qtd-municipios-casos-confirmados')}
            />
            <Button
                style={theme.button}
                title="Buscar quantidade de pessoas com COVID por situacao"
                type="clear"
                onPress={() => navigation.navigate('qtd-por-tipo')}
            />
            <Button
                style={theme.button}
                title="Buscar casos por dia"
                type="clear"
                onPress={() => navigation.navigate('qtd-por-dia-tipo')}
            />
            <Button
                style={theme.button}
                title="Buscar quantidade de pessoas por sexo e faixa etaria"
                type="clear"
                onPress={() => navigation.navigate('qtd-por-faixa-etaria-sexo')}
            />
            <Button
                style={theme.button}
                title="Buscar quantidade de obitos ate a presente data"
                type="clear"
                onPress={() => navigation.navigate('qtd-obitos')}
            />
            <Button
                style={theme.button}
                title="Buscar quantidade de obitos por municipio"
                type="clear"
                onPress={() => navigation.navigate('qtd-obitos-por-municipios')}
            />
            <Button
                style={theme.button}
                title="Buscar casos suspeitos"
                type="clear"
                onPress={() => navigation.navigate('qtd-suspeitos')}
            />
            
                
        </View>    
    )
}
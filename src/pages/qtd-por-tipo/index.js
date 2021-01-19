import React, { useState } from 'react'
import useCovid from '../../services/covid_data'

import { Text, FlatList } from 'react-native'

export default function QtdPorTipo(props) {
    const [data, setData] = useState([])
    const { getTipo } = useCovid()

    React.useEffect(() => {
        getTipo().then((e) => setData(e.data))
            .catch((e) => console.log(e))
    }, [])
    return (

        <FlatList
            refreshing={false}
            onRefresh={() => getTipo().then((e) => setData(e.data))}
            data={data}
            renderItem={({ item }) => (
                <Text style={{ fontSize: 17, margin: 10, textAlign: 'center' }}>{`${item.tipo}: ${item.quantidade}`}</Text>
            )}
            keyExtractor={(e, i) => toString(i)}
        />
    )
}
import React, { useState } from 'react'
import useCovid from '../../services/covid_data'

import { Text, FlatList } from 'react-native'

export default function QtdPorDia(props) {
    const [data, setData] = useState([])
    const { getDia } = useCovid()

    React.useEffect(() => {
        getDia().then((e) => setData(e.data))
            .catch((e) => console.log(e))
    }, [])
    return (

        <FlatList
            refreshing={false}
            onRefresh={() => getDia().then((e) => setData(e.data))}
            data={data}
            renderItem={({ item }) => (
                <Text style={{ fontSize: 17, margin: 10}}>{`${item.data}: ${item.quantidade}`}</Text>
            )}
            keyExtractor={(e, i) => toString(i)}
        />
    )
}
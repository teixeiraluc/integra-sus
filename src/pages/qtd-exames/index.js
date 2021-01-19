import React, { useState } from 'react'
import useCovid from '../../services/covid_data'

import { Text, FlatList } from 'react-native'

export default function QtdExames(props) {
    const [data, setData] = useState([])
    const { getExames } = useCovid()

    React.useEffect(() => {
        getExames().then((e) => setData(e.data))
        .catch((e) => console.log(e))
    },[])
    return (

        <FlatList
            refreshing={false}
            onRefresh={() => getExames().then((e) => setData(e.data))}
            data = {data}
            renderItem={({ item }) => (
                <Text style={{fontSize:17, margin:10, textAlign: 'center'}}>{`Exames feitos: ${item.quantidadeExame}`}</Text>
            )}
            keyExtractor={(e, i) => toString(i)}
        />
    )
} 
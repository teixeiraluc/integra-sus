import React from 'react'
import axios from 'axios'

const baseUrl = 'https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus'

export default function useCovid() {
    return {
        getTipo(data = '2020-05-07', idMunicipio = 230440) {
            return axios.get(
                `${baseUrl}/qtd-por-tipo?data=${data}&tipo=Confirmado&idMunicipio=${idMunicipio}`,
            )
        },
        getMunicipios(data = '2020-05-07', idMunicipio = 230440) {
            return axios.get(
                `${baseUrl}/qtd-municipios-casos-confirmados?data=${data}&tipo=Confirmado&idMunicipio=${idMunicipio}`,
            )
        },
        getCasos(data = '2020-05-07', idMunicipio = 230440) {
            return axios.get(
                `${baseUrl}/qtd-por-municipio?data=${data}&tipo=Confirmado&idMunicipio=${idMunicipio}`,
            )
        },
        getDia(data = '2020-05-07', idMunicipio = 230440) {
            return axios.get(
                `${baseUrl}/qtd-por-dia-tipo?data=${data}&tipo=Confirmado&idMunicipio=${idMunicipio}`,
            )
        },
        getPessoas(data = '2020-05-07', idMunicipio = 230440) {
            return axios.get(
                `${baseUrl}/qtd-por-faixa-etaria-sexo?data=${data}&tipo=Confirmado&idMunicipio=${idMunicipio}`,
            )
        },
        getObitosMunicipios(data = '2020-05-07', idMunicipio = 230440) {
            return axios.get(
                `${baseUrl}/qtd-por-municipio?data=${data}&tipo=%C3%93bito&idMunicipio=${idMunicipio}`,
            )
        },
        getObitos(data = '2020-05-07', idMunicipio = 230440) {
            return axios.get(
                `${baseUrl}/qtd-obitos?data=${data}&tipo=%C3%93bito&idMunicipio=${idMunicipio}`,
            )
        },
        getSuspeitos(data = '2020-05-07', idMunicipio = 230440) {
            return axios.get(
                `${baseUrl}/qtd-suspeitos?data=${data}&tipo=Confirmado&idMunicipio=${idMunicipio}`,
            )
        },
        getExames(data = '2020-05-07', idMunicipio = 230440) {
            return axios.get(
                `${baseUrl}/qtd-exames?data=${data}&tipo=Confirmado&idMunicipio=${idMunicipio}`,
            )
        }

    }
}

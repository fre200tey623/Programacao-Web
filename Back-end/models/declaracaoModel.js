const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const declaracaoSchema = new Schema({
    ncm: String,
    nves: String,
    nves_nm: String,
    pais_origem: String,
    fob_kg_minimo_dolar_truncado: Number,
    fob_kg_maximo_dolar_truncado: Number,
    fob_kg_media_dolar_truncado: Number,
    fob_kg_mediana_dolar_truncado: Number,
    fob_kg_desvio_padrao_dolar_truncado: Number,
    fob_kg_quartil1_truncado: Number,
    fob_kg_quartil3_truncado: Number,
    fob_ume_minimo_dolar_truncado: Number,
    fob_ume_maximo_dolar_truncado: Number,
    fob_ume_media_dolar_truncado: Number,
    fob_ume_mediana_dolar_truncado: Number,
    fob_ume_desvio_padrao_dolar_truncado: Number,
    fob_ume_quartil1_truncado: Number,
    fob_ume_quartil3_truncado: Number,
    vmle_soma_dolar_truncado: Number,
    peso_liq_soma_truncado: Number,
    qtd_ume_soma_truncado: Number,
    frete_minimo_dolar_truncado: Number,
    frete_media_dolar_truncado: Number,
    frete_mediana_dolar_truncado: Number,
    frete_maximo_dolar_truncado: Number,
    frete_desvio_padrao_dolar_truncado: Number,
    seguro_minimo_dolar_truncado: Number,
    seguro_media_dolar_truncado: Number,
    seguro_mediana_dolar_truncado: Number,
    seguro_maximo_dolar_truncado: Number,
    seguro_desvio_padrao_dolar_truncado: Number,
    ume: String,
    mes: String
});

const Declaracao = model('Declaracao', declaracaoSchema);

module.exports = Declaracao;
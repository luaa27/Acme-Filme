'use strict'
import {getFilmes, getFilmesId,postFilme, putFilme} from "./filmes.js"


const titulo = document.getElementById('nome')
const sinopse = document.getElementById('sinopse')
const duracao = document.getElementById('duracao')
const dataLancamento = document.getElementById('lancamento')
const dataRelancamento = document.getElementById('relancamento')
const valor = document.getElementById('valor')
const cadastrar = document.getElementById('cadastrar')
const poster = document.getElementById('poster')
const classificacao = document.getElementById('classificacao')

cadastrar.addEventListener('click', ()=>{

    const tituloInput = titulo.value
    const sinopseInput = sinopse.value
    const duracaoInput = duracao.value
    const dataLancamentoInput = dataLancamento.value
    const dataRelancamentoInput = dataRelancamento.value
    const valorInput = valor.value
    const capaInput = poster.src
    const classificacaoInput = classificacao.value
    const insert ={
        nome: tituloInput,
        sinopse: sinopseInput,
        duracao: duracaoInput,
        data_lancamento: dataLancamentoInput,
        data_relancamento: dataRelancamentoInput,
        valor_unitario: valorInput,
        foto_capa: capaInput,
        classificacao_id: classificacaoInput
    }

    postFilme(insert)
    console.log(insert)
    window.location.href = './dashboard.html'
})

// link.addEventListener('keyup', ()=>{
//     poster.src = link.value 
// })



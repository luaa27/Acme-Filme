'use strict';

import { getFilmesId, putFilme } from "./filmes.js";
const id = new URLSearchParams(window.location.search).get('id');

async function dadosFilme() {
    if (id) {
        const infoFilme = await getFilmesId(id);
        const nome = document.getElementById('nome');
        const sinopse = document.getElementById('sinopse');
        const lancamento = document.getElementById('lancamento');
        const relancamento = document.getElementById('relancamento');
        const duracao = document.getElementById('duracao');
        const valor = document.getElementById('valor');
        const poster = document.getElementById('poster');

        nome.value = infoFilme.nome;
        sinopse.value = infoFilme.sinopse;
        duracao.value = tratarDuracao(infoFilme.duracao);
        poster.src = infoFilme.foto_capa;
        valor.value = infoFilme.valor_unitario;
        lancamento.value = infoFilme.data_lancamento.slice(0, 10);
        relancamento.value = infoFilme.data_relancamento;
    } else {
        return false;
    }
}

function tratarDuracao(string) {
    const stringTratada = string.slice(11, 19);
    return stringTratada;
}

const link = document.getElementById('link');
const poster = document.getElementById('poster');

link.addEventListener('keyup', () => {
    poster.src = link.value;
});

const salvar = document.getElementById('salvar');

salvar.addEventListener('click', async () => {
    const nomeInput = document.getElementById('nome').value;
    const sinopseInput = document.getElementById('sinopse').value;
    const duracaoInput = document.getElementById('duracao').value;
    const dataLancamentoInput = document.getElementById('lancamento').value;
    const dataRelancamentoInput = document.getElementById('relancamento').value;
    const precoInput = document.getElementById('valor').value;
    const fotoCapaInput = document.getElementById('poster').src;

    const alteracoes = {
        nome: nomeInput,
        sinopse: sinopseInput,
        duracao: duracaoInput,
        data_lancamento: dataLancamentoInput,
        data_relancamento: dataRelancamentoInput,
        valor_unitario: precoInput,
        foto_capa: fotoCapaInput
    };

    console.log("Alterações:", alteracoes); // Verificar se os valores estão corretos

    try {
        await putFilme(id, alteracoes);
        console.log("Filme atualizado com sucesso:", alteracoes);
        window.location.href = './dashboard.html';
    } catch (error) {
        console.error("Erro ao atualizar filme:", error);
        // Aqui você pode adicionar um código para lidar com erros de atualização, se necessário
    }
});

dadosFilme();

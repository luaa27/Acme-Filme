export async function getFilmes(){
    const url = `http://localhost:8080/v2/FilmesACME/filmes`
    const response = await fetch(url)
    const data = await response.json()
    

    return data.filmes
}

export async function getFilmesId(id){
    const url = `http://localhost:8080/v2/FilmesACME/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme[0]
}

export async function selectNameFilmes(nome){
    const url = `http://localhost:8080/v2/FilmesACME/filmes/filtro?nomeFilme=${nome}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data
}


export async function postFilme(filme){
    const url = 'http://localhost:8080/v2/acmeFilmes/filme'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function putFilme(id, filme){
    const url = `http://localhost:8080/v2/acmeFilmes/filme/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }

    const response = await fetch(url, options)

    return response.ok
}
export async function getClassificacoes(){
    const url = 'http://localhost:8080/v2/FilmesACME/classificacoes'
    const response = await fetch(url)
    const data = await response.json()
    return data.classificacao
}

export async function getClassificacaoFilmePorId(id){
    const url = `http://localhost:8080/v2/FilmesACME/classificacoes/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data.class
}




export async function deleteFilme(id){
    try{
        await fetch(`http://localhost:8080/v2/acmeFilmes/filme/${id}`,{
            method: 'DELETE'
        })
        console.log("Filme excluído com sucesso")
    } catch (error){
        console.error('Erro ao excluir filme: ',error);
    }
}
export async function getGeneros(){
    const url = 'http://localhost:8080/v2/FilmesACME/generos'
    const response = await fetch(url)
    const data = await response.json()
    return data.genero
}

export async function getGeneroFilmePorId(id){
    const url = `http://localhost:8080/v2/FilmesACME/generos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data.genero
}


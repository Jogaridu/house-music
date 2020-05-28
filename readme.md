## Introdução

Projeto desenvolvido para a solução de uma Situação de Aprendizagem Somativa(SAS), com o intuito de colocar em prática todos os conhecimentos em JavaScript e consumo de API adquiridos na matéria de programação web front end, ministrada pelo professor Fernando Leonid.

O projeto em questão foram utilizadas duas APIs: Deezer e LyricsOVH. Para funcionar tudo corretamente ambas devem ter sucesso na requisição, enquanto uma faz uma busca de toda informação como nome da música, artistas etc. A outra fica resposável por acessar as informações retornadas da primeira API e realizar uma requisição na sua para informar o usuário a letra da música.



## Passo a Passo para consumir a api

### Deezer:

1. Nesse projeto foi utilizado o Fetch para consumir a API. Nele adicionamos os seguintes pâmetros: A URL do deezer e um objeto de configuração.

2. A URL utilizada é a "https://deezerdevs-deezer.p.rapidapi.com/search?", com um parâmetro "q" para requisitar qualquer busca do usuário (Nome de música, banda ou artista).

3. No objeto adicionamos dois índices, o method "GET" e o headers que terá um objeto no qual tem mais dois campos: "**x-rapidapi-host**" e "**x-rapidapi-key**" e respectivamente os dados a serem informados são: url e a chave. Ambos podem ser adquiridos no site: [RapidApi](https://rapidapi.com/deezerdevs/api/deezer-1)

4. Depois de informar um artista no parâmetro "q" da url e realizar o passo anterior o fetch irá retornar uma Promise.

5. Por fim basta utilizar o comando _json()_ na promise retornada para assim transforma ela num objeto json.

### Apiary - LyricsOVH:

1. Assim como a API Deezer essa também foi utilizado o fetch mas, com apenas um parâmetro da URL.

2. A URL em questão foi pega no site original: [LyricsOVH](https://api.lyrics.ovh/v1/artist/title). E nela deve informar dois dados para acessar a letra. O nome do artista em seguida o nome da música.

3. Se os dados forem informados corretamente, faça exatamente como o quinto passo para consumir a API Deezer.

## Problemas/Solucoes

[] Problema
[x] Solução

[] API lyricsOVH retorna a letra apenas se o nome da música e artista forem informados corretamente.
[x] Obrigatoriamente deve informar ambos os nomes na url, mesmo que possuam nomes composto e sejam separados por espaços.

[] Caso tenha a necessidade de criar um site com informações além de letras musicáis apenas a API lyricsOVH não irá satifazer.
[x] Buscar outras APIs que possuam mais informações sobre música no geral. 
# Projeto Data Lovers

Bem-vindo ao Projeto Data Lovers, uma plataforma dedicada aos admiradores do Studio Ghibli. Este projeto dá vida a um universo interativo para os fãs, proporcionando uma experiência abrangente para explorar informações detalhadas sobre os filmes do estúdio, diretores e personagens icônicos.

## Definição do Produto

O produto é uma página web interativa e informativa destinada a fornecer aos fãs do Studio Ghibli uma plataforma para explorar e aprender mais sobre a filmografia do estúdio, suas animações, diretores, personagens e detalhes relevantes. Através desta página, os usuários podem mergulhar no mundo das animações do Studio Ghibli, compreendendo melhor os filmes e suas informações respectivas.

## Protótipo de Alta Fidelidade

![Projeto Data Lovers](/Group%2010alta_fidelidade.png)

## Características Principais

### Página Inicial Amigável

A página inicial recebe os usuários com uma breve introdução ao Studio Ghibli, oferecendo contexto. Um botão de navegação direciona os usuários para a página principal de exploração.

### Exploração da Filmografia

A página de navegação exibe uma coleção de cartões interativos representando os filmes do Studio Ghibli. Cada cartão exibe a capa do filme, título, diretor e ano de lançamento.

### Ordenação e Filtros

Os filmes podem ser ordenados alfabeticamente, proporcionando aos usuários uma visualização organizada da filmografia. Além disso, os usuários podem filtrar os filmes por diretor para uma visão específica.

### Detalhes do Filme

Ao clicar em um cartão de filme, os usuários podem expandi-lo para revelar informações detalhadas sobre o filme, incluindo descrição, diretor, ano de lançamento e lista de personagens.

### Porcentagem de Personagens

Dentro da página de detalhes do filme, os usuários podem ver a porcentagem de personagens do filme em relação ao número total de personagens de todas as animações do Studio Ghibli.

![Animação](/2023-08-23-22-22-35.gif)

## Como Executar o Projeto

1. Clone o repositório para a sua máquina local.
2. Use o comando `npm run start` para abrir o arquivo `index.html` no seu navegador na porta 3000, permitindo que você visualize o projeto.
3. Inicie o projeto executando o arquivo `index.html` no seu navegador.
4. Navegue Pelas Páginas:

   - Na página inicial, você encontrará um breve texto introdutório sobre o Studio Ghibli e um botão de navegação. Um menu adicional o levará às áreas de filmografia e à página inicial.
   - Ao clicar no botão ou selecionar "Filmografia" no menu, você será direcionado à página de filmografia.
   - Na página de filmografia, os filmes do estúdio são exibidos em cartões interativos. Opções de filtro por diretor, ordenação alfabética e reversa, bem como filtragem por ano, facilitam a exploração personalizada.
   - Use as opções de ordenação e filtragem para adaptar a visualização dos filmes ao seu gosto.
   - Passe o mouse sobre um cartão para ver informações adicionais.
   - Clique em um cartão para expandi-lo e obter detalhes sobre o filme, diretor e personagens.
   - Utilize as opções de ordenação e filtragem para personalizar a visualização dos filmes.

5. Ao abrir os detalhes de um filme, você verá a porcentagem de personagens desse filme em relação ao número total de personagens de todas as animações do Studio Ghibli.

## Características Principais

1. **Página Inicial Amigável:** A página inicial apresenta uma breve introdução sobre o Studio Ghibli, fornecendo contexto aos usuários. Um botão de navegação direciona os usuários para a página principal de exploração.

2. **Exploração da Filmografia:** Na página de navegação, os usuários encontram uma coleção de cartões, cada um representando um filme do Studio Ghibli. Esses cartões exibem capas de filmes, bem como informações essenciais como título, diretor e ano de lançamento.

3. **Ordenação e Filtros:** Os usuários têm a capacidade de ordenar os filmes alfabeticamente, permitindo uma visualização mais organizada. Além disso, um campo de filtro permite que os usuários selecionem um diretor específico e vejam apenas os filmes relacionados a esse diretor.

4. **Detalhes do Filme:** Ao clicar em um cartão de filme, os usuários podem expandi-lo para revelar informações detalhadas sobre o filme. Isso inclui uma descrição do filme, detalhes do diretor, ano de lançamento e uma lista de personagens presentes na animação.

5. **Porcentagem de Personagens:** Dentro dos detalhes do filme, os usuários também podem ver a porcentagem de personagens desse filme em relação ao número total de personagens de todas as animações do Studio Ghibli.

## Objetivo

O principal objetivo deste projeto é oferecer uma interface web envolvente e intuitiva que permita aos fãs do Studio Ghibli explorar e compreender melhor suas animações favoritas. Ao fornecer informações detalhadas sobre filmes, diretores, personagens e a interconexão entre eles, a página tem como objetivo enriquecer a experiência dos usuários e satisfazer sua curiosidade em relação ao universo das animações do estúdio.

O produto atende à necessidade dos usuários de ter uma plataforma onde possam acessar informações relevantes sobre as animações do Studio Ghibli de maneira organizada e interativa. Isso permitirá que os fãs explorem suas animações favoritas, conheçam detalhes sobre diretores, personagens e aprofundem-se na rica narrativa oferecida pelo estúdio.

## História do Usuário

**Título:** Explorando a Filmografia do Studio Ghibli

**Como** um ávido fã das animações do Studio Ghibli,
**Eu quero** acessar uma página web interativa e informativa
**Para que eu possa** explorar e aprender mais sobre as animações, diretores, personagens e detalhes relevantes do estúdio.

1. **Explorar a Home:**

   - **Dado que** sou um usuário interessado nas animações do Estúdio Ghibli,
   - **Quando** acesso a página inicial,
   - **Então** vejo um breve texto introdutório sobre o estúdio, imagens e um botão de navegação.

2. **Navegar pela Filmografia:**

   - **Dado que** cliquei no botão de navegação,
   - **Quando** acesso a página de navegação,
   - **Então** encontro cards com as capas dos filmes do estúdio.
   - **E** cada card exibe informações breves sobre o filme, incluindo título, diretor e ano de lançamento.
   - **E** os cards são ordenados por ordem alfabética (A-Z) por padrão.

3. **Ordenar Filmes Alfabeticamente:**

   - **Dado que** estou na página de navegação,
   - **Quando** utilizo a opção de ordenação alfabética,
   - **Então** os cards dos filmes são reorganizados em ordem alfabética inversa (Z-A).

4. **Filtrar por Diretor:**

   - **Dado que** estou na página de navegação,
   - **Quando** utilizo o campo de filtro e seleciono um diretor,
   - **Então** vejo apenas os filmes dirigidos por esse diretor nos cards.

5. **Filtrar por Data:**

   - **Dado que** estou na página de navegação,
   - **Quando** utilizo o campo de filtro e seleciono uma data,
   - **Então** vejo apenas os filmes do ano selecionado nos cards.

6. **Detalhes do Filme:**

   - **Dado que** estou na página de navegação e cliquei em um card de filme,
   - **Quando** o card se expande,
   - **Então** vejo informações detalhadas sobre o filme, incluindo descrição, diretor, ano de lançamento e lista de personagens com cards interativos.

7. **Porcentagem de Personagens:**
   - **Dado que** estou visualizando os detalhes de um filme,
   - **Quando** examino a seção de personagens,
   - **Então** vejo a porcentagem representada pelos personagens do filme em relação ao total de personagens de todas as animações do estúdio.


## Desenvolvedores

Este projeto foi desenvolvido por Iris Almeida e Isabela Tenório. Utilizamos HTML, CSS e JavaScript puro para criar uma experiência interativa e informativa para os fãs do Studio Ghibli.

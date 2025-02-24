This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Videoteca

Uma aplicação para explorar, organizar e decidir o que assistir.

## Descrição

O **Videoteca Malaquias** é uma plataforma desenvolvida para ajudar os usuários a pesquisarem por filmes e séries, verificarem informações detalhadas sobre cada título e organizarem uma lista personalizada de títulos favoritos para assistir. Este projeto foi idealizado como um meio de aprimorar habilidades em React, integração com APIs e criação de interfaces responsivas e funcionais.

## Funcionalidades

- **Busca Avançada**: Pesquise filmes e séries usando palavras-chave.
- **Detalhes Completos**: Acesse informações como sinopse, elenco, gênero e avaliações de cada título.
- **Lista de Favoritos**: Crie e gerencie uma lista personalizada de filmes e séries favoritos.
- **Sugestões Populares**: Descubra sugestões baseadas nos títulos mais populares do momento.
- **Interface Responsiva**: Garanta uma experiência fluida em qualquer dispositivo.

## Tecnologias Utilizadas

- **Frontend**: Next.js (React), Tailwind CSS, TypeScript.
- **Backend Simulado**: Node.js, Express (para futuras implementações).
- **API Externa**: The Movie Database (TMDb) para dados de filmes e séries.
- **Ferramentas**: Git, Deploy no Vercel.
- **Outros**: Uso de `localStorage` para gerenciamento de favoritos.

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter os seguintes itens instalados na sua máquina:

- **Node.js** (versão 14 ou superior).
- **Chave de API do TMDb** (cadastre-se [aqui](https://www.themoviedb.org/)).

### Passos para Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/Mariomalaquias/app-videoteca
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd app-videoteca
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure a API Key:
   
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a linha abaixo, substituindo `suas_chave_de_api` pela sua chave da TMDb:

     ```env
     VITE_API_KEY=suas_chave_de_api
     ```

5. Inicie o projeto:

   ```bash
   npm run dev
   ```

6. Acesse no navegador: O projeto estará disponível em [http://localhost:5173](http://localhost:5173).

## Estrutura do Projeto

### Descrição dos Arquivos e Pastas

- `src/app/actions/getDetails.ts`: Contém a função que busca detalhes de um filme na API do TMDb.
- `src/app/detalhes/[id]/page.tsx`: Componente de página que exibe os detalhes de um filme.
- `src/app/components/Header.tsx`: Componente de cabeçalho reutilizável.
- `tailwind.config.ts`: Configuração do Tailwind CSS.
- `tsconfig.json`: Configuração do TypeScript.

## API

A aplicação utiliza a API do TMDb para buscar informações sobre filmes. A função faz uma requisição `GET` para a API do TMDb para obter detalhes de um filme específico.

### Exemplo de uso da função:

```typescript
import { getDetails } from "@/app/actions/getDetails";

const filme = await getDetails(12345);
console.log(filme);
```

## Capturas de Tela

- **Home Page**
- **Detalhes de um Filme**

## Demonstração Online

[Clique aqui](#) para acessar o projeto online (caso esteja deployado).

## Lições Aprendidas

Este projeto foi uma oportunidade valiosa para:

- Consumir APIs públicas, como a TMDb, e entender como estruturar chamadas assíncronas.
- Implementar rotas dinâmicas no Next.js e criar páginas reativas.
- Melhorar a experiência do usuário com estilização moderna utilizando Tailwind CSS.
- Exercitar o uso do `localStorage` para persistência local de dados.
- Criar e utilizar hooks personalizados no React, como o `useFavorite`.

## Futuras Melhorias

- **Autenticação de Usuários**: Permitir que os usuários criem contas e salvem suas listas de favoritos na nuvem.
- **Filtros Avançados**: Adicionar filtros por gênero, ano de lançamento, classificação e outros critérios.
- **Recomendações Personalizadas**: Sugestões baseadas no histórico de visualizações e favoritos do usuário.
- **Responsividade Aprimorada**: Otimizar ainda mais o layout para dispositivos móveis.
- **Testes Automatizados**: Implementar testes unitários e de integração para garantir a robustez do código.

## Autor

Desenvolvido por **Mario Luiz Malaquias**.
Entre em contato por e-mail: [marioluizmalaquias@gmail.com](mailto:marioluizmalaquias@gmail.com).

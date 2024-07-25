# CaptionCraft 🎬✨

CaptionCraft é uma ferramenta CLI em NodeJS para extrair informações de arquivos de vídeo e gerar automaticamente legendas e descrições para redes sociais como Instagram, TikTok e LinkedIn.

Este projeto open source economiza tempo ao permitir que você simplesmente grave seus vídeos e deixe a ferramenta fazer o resto!

## Funcionalidades 🚀

- **Processamento em Massa:** Percorre todos os arquivos de vídeo em um diretório informado como parâmetro.
- **Edição Automática de Vídeos:** Utiliza o comando `auto-editor` para criar uma versão do vídeo sem espaços vazios.
- **Conversão de Vídeo em Áudio:** Transforma o vídeo editado em um arquivo de áudio.
- **Transcrição Automática:** Transcreve o conteúdo do áudio.
- **Geração de Legendas:** Gera um prompt específico para a criação das legendas.
- **Integração com API do Ollama:** Acessa a API local do Ollama para gerar as descrições.
- **Armazenamento dos Resultados:** Salva todos os resultados em arquivos dentro da aplicação.

## Pré-requisitos 📋

- NodeJS instalado
- `auto-editor` instalado
- API local do Ollama configurada

### Instalação do NodeJS

Baixe e instale o NodeJS a partir do [site oficial](https://nodejs.org/).

### Instalação do auto-editor

1. Instale o `pip` (se ainda não tiver):

```bash
sudo apt-get install python3-pip
```

2. Instale o auto-editor:

```bash
pip install auto-editor
```

### Instalação da API local do Ollama

1. Siga as instruções no [site oficial do Ollama](https://ollama.com/) para configurar a API local.
2. Certifique-se de que a API está rodando corretamente.

## Instalação ⬇️

1. Clone o repositório:

```bash
git clone https://github.com/diogocezar/caption-craft
cd CaptionCraft
```

2. Instale as dependências:

```bash
pnpm i
```

## Preparação 🚀

1. Coloque seus vídeos em uma pasta no root do projeto. Por exemplo: `data/sample.mov`

## Execução ▶️

Execute a ferramenta informando o diretório com os vídeos:

```bash
pnpm start /caminho/para/diretorio
```

## Exemplos

Você pode analisar os exemplos dos resultados em `./data` e em `./result`.

## Resultado Gerado

```
# Dicas para Desenvolvedores # Aprenda a Programação Orientada ao Objeto

## Instagram
Você quer se destacar na área de desenvolvimento? Fica aqui e aprenda sobre uma das principais bases da programação: **Programação Orientada ao Objeto**! 🤯 Com ela, você entenderá como funcionam os conceitos fundamentais que vão te ajudar a avançar em seus estudos. #desenvolvimento #programacaoorientadootempo #objetos

## Tiktok
🚀 Está precisando de uma dica para se destacar na área de desenvolvimento? Fique aqui! Aprenda sobre **Programação Orientada ao Objeto** e você entenderá como funciona a base da programação que te ajudará a avançar em seus estudos. #programacao #objetos #desenvolvimento

## Linkedin
O entendimento dos conceitos de programação orientada ao objeto é fundamental para qualquer desenvolvedor que deseje se destacar na área. Com ela, você entenderá como funcionam os fundamentos da programação e será capaz de avançar em seus estudos.

Aqui vai uma dica para quem está começando a aprender sobre essa técnica: Aprenda um pouquinho sobre programação orientada ao objeto. Eu sei que paradigmas são muito discutíveis, hoje a programação funcional está muito em voga, tem muita gente que defende elas, eu curto também, mas entender um pouquinho sobre como se que Se pensou na programação de entrada de objetos, vai te destravar várias outras coisas. Então, aprender como ela funciona, quais são os seus conceitos e como ela é utilizada vai ser super importante na sua avança de estudo na área de programação e desenvolvimento.

Essa técnica é fundamental para qualquer desenvolvedor que deseje se destacar na área, pois permite entender como funcionam os fundamentos da programação e avançar em seus estudos.
```

## Contribuindo 🤝

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

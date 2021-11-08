## FrontEnd Test
O front-end teste consiste na implementação de interface responsiva, baseada em um wireframe. Desenvolvida com as tecnologias NuxtJS, TailwindCSS e MirageJS. 

### Objetivo
Os objetivos determinados no desenvolvimento deste projeto são: 
* Criação de API simulada para geração de Tweets;
* Favoritar tweet disponibilizado pela API simulada;
* Design criativo;
* PWA; e
* Perfil do usuário (Me).

#### Configuração 
. Tenha instalado em seu computador a versão atual do Node.JS
. Clone(fork) o repositório no [GitHub]: (https://github.com/Tayrangel/frontend_test) 
. Inicie o servidor de desenvolvimento usando `npm run dev`

##### Diretório
Alguns diretórios extras foram criados e/ou utilizados, para melhor experiência no desenvolvimento do projeto, e melhorar as funcionalidades que são atribuidas ao diretório principal `pages`

* assets
* components
* plugins
* src
* static

###### Assets
O diretório `assets` contém o ativo não compilado: imagem.

###### Components
O diretório de `components` contém os componentes Vue.js, que constituem as diferentes partes das página, sendo importados. Assim, os componentes auxiliam na construção dos layouts e até mesmo outros componentes.

###### Pages
O diretório `pages` diretório contém as visualizações e rotas do aplicativo Nuxt e lê todos os arquivos `* .vue` dentro do diretório, além de configurar o Vue Router automaticamente.

###### Plugins
O diretório de `plugins` contém plug-ins JavaScript que executa antes de instanciar o aplicativo raiz `Vue.js` e está configurado no arquivo `nuxt.config.js`.

###### Static
O diretório `static` contém os arquivos estáticos mapeados para o `/`. Além disso, está vinculado ao _Progressive Web App_ (PWA)
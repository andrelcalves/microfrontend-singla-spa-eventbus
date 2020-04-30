# microfrontend-singla-spa-eventbus
Um exemplo de micro frontend com framework single spa (react + angular) utilizando eventbus para comunicação entre os micro frontends.

### Introdução
Esse mais exemplo de micro frontend utilizando sigle spa, nesse exemplo será demostrados dos exemplos básicos em react e angular, se comunicando através de event bus.

### Breve resumo do single-spa
Usando o single-spa, podemos criar um aplicativo base que ira possuir uma solução de  roteamento e autenticação (sessões do usuário etc.) implementados e vários aplicações frontends que funcionam como os aplicativos independentes. Eles são carregados usando lazy loading sem atualização de página e podem ser carregados na mesma página ou em páginas diferentes.

Em resumo vamos criar um index.html simples, onde vamos injetar exemplos de React e Angular com troca de mensagens entre eles do event bus e os micro frontends vão compartilhar a mesma tela com utilização do hashPrefix.

### 
Passos:
1) primeiro vamos criar o arquivo root-application.js no projeto base, esse arquivo será responsável por injetar as aplicações react e angular e realizar o roteamento, isso é feito através do single-spa. Como queremos que os micro forntends estejam na mesma página, vamos usar o metodo **hashPrefix** para poder incluir os micros fronts sem necessidade de iframe.

``` const hashPrefix = prefix => location => location.hash.startsWith(`#${prefix}`) ```

2) Para comunicação entre os micro frontends em react e angular, nesse exemplo, será utilizando um event bus, então vamos criar um arquivo index.js na pasta event-bus.  O index apenas inicializa o Eev e exporta.

3) Criação do componente reac *root-component.js*. Esse componente vai renderizar um texto, o objetivo é enviar e escutar dados (que será enviado pelo projeto angular) e renderiza esse dados.

### Referência
* [Micro Frontends - How I Built An SPA With Angular And React?](https://ivanjov.com/micro-frontends-how-i-built-a-spa-with-angular-and-react/)
* [EventBus - Eev](https://github.com/chrisdavies/eev)


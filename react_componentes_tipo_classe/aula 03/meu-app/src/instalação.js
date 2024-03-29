// Instalação

// Criação de um projeto React
// Para começar vamos criar um projeto.

// Você precisa ter o YARN instalado na sua máquina.

// Escolha uma pasta no seu computador para criar o projeto. Abra um terminal nessa pasta.

// No windows 10, basta clicar com o botão direito do mouse em qualquer lugar da pasta e escolher a opção abrir janela do powershell aqui.

// No Linux ou Mac, abra o terminal e navegue até a pasta usando cd.

// Faremos então o seguinte comando:

// 'yarn create react-app meu-app'
// Quando o yarn terminar a instalação, o que leva um tempinho ele irá mostrar como rodar a aplicação.

// Faça o que ele mostra:

// 'cd meu-app'
// 'yarn start'
// Siga esses passos para criar um novo projeto React e abra-o com o visual studio code ou editor de sua preferência.

// Teremos a seguinte estrutura:



// Todo nosso código será feito na pasta src.

// Vamos começar limpando o template básico criado por padrão pelo instalador, remova os seguintes arquivos:

// '/src/App.css'
// '/src/App.test.js'
// '/src/index.css'
// '/src/logo.svg'
// '/src/setupTests.js'

// Abra o arquivo App.js e deixe o conteúdo igual a esse (apenas removemos várias linhas):

import React from 'react';

function App() {
  return (
    <div className="App">
    </div>
  );
}
export default App;

// Agora abra o arquivo index.js e deixe o conteúdo igual ao seguinte (apenas removemos várias linhas):

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

// Aproveitando que estamos nesse arquivo, ele é o arquivo responsável pela injeção do react no HTML da página.

// O método ReactDOM.Render renderiza um componente na página dentro de um elemento HTML.

// A linha document.getElementById('root') define que o elemento HTML onde o react será injetado é um que tenha um ID = 'root'.

// Para que um componente seja renderizado ele deve estar dentro do método ReactDOM.render() ou dentro de outro componente que seja renderizado pelo método ReactDOM.render().

// Se desejar alterar algo no HTML da página por fora do React, você pode encontrá-lo na pasta public.

// Agora você tem uma aplicação vazia que produz uma página em branco no navegador. Não deve haver erros em seu terminal/powershell.

// Se estiver tudo certo, estamos prontos para continuar.
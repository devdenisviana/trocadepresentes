# Troca de Presentes

Este projeto é uma aplicação web simples e intuitiva para organizar trocas de presentes entre amigos, familiares ou colegas.

## Funcionalidades

* **Adição de Participantes:** Permite adicionar nomes de participantes de forma rápida e fácil, garantindo que todos sejam incluídos na troca de presentes.
* **Sorteio Aleatório:** Realiza um sorteio aleatório dos participantes, atribuindo quem dará presente para quem.
* **Visualização dos Resultados:** Apresenta os resultados do sorteio de forma clara e organizada, mostrando quem dará presente para qual participante.
* **Interface Amigável:** Design limpo e intuitivo, facilitando o uso em diferentes dispositivos.
* **Sanitização de Entrada:** Garante a segurança da aplicação, prevenindo ataques de XSS ao sanitizar a entrada de dados dos usuários.
* **Acessibilidade:** Implementação de recursos de acessibilidade, como `aria-live`, para melhorar a experiência de usuários com deficiências.

## Recursos Utilizados

* **HTML:** Estrutura da página web.
* **CSS:** Estilização e layout da interface, com foco em uma paleta de cores verde para um visual agradável.
* **JavaScript:** Lógica da aplicação, incluindo a adição de participantes, o sorteio aleatório e a manipulação do DOM.
* **Manipulação do DOM:** Interação dinâmica com os elementos da página, atualizando a lista de participantes e exibindo os resultados do sorteio.
* **Event Listeners:** Utilização de eventos para capturar as interações do usuário, como cliques nos botões.
* **Arrays:** Armazenamento e manipulação da lista de participantes.
* **Funções:** Organização do código em funções reutilizáveis, como `addParticipant`, `updateParticipantList` e `draw`.
* **Sanitização de dados:** Prevenção de ataques de XSS, através da remoção de tags html inseridas pelos usuários.
* **Recursos de acessibilidade:** Utilização de `aria-live` para melhoria da acessibilidade.

## Como Usar

1.  Abra o arquivo `index.html` em um navegador web.
2.  Digite o nome dos participantes no campo de entrada e clique em "Adicionar".
3.  Clique em "Realizar Sorteio" para sortear os pares de presente.
4.  Os resultados do sorteio serão exibidos na tela.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto.
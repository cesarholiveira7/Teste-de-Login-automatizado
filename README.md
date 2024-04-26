# Teste de Login Automatizado

Este projeto consiste em testar 3 cenários distintos de login automatizado na pagina (http://www.automationpractice.pl/index.php?controller=authentication&back=my-account) utilizando a linguagem Javascriprit com o uso de Intellij IDEA e Selenium WebDriver.

## Cenários de Teste:

### Cenário 1: Login bem-sucedido
1. Dado que o usuário esteja na página "automation pratice";
2. Quando o usuário fizer o login corretamente;
3. Então a página deve direcionar o usuário para a página "My Account";
4. E então o usuário faz logout.

### Cenário 2: Login com e-mail inválido
1. Dado que o usuário esteja na página "automation pratice";
2. Quando o usuário fizer o login com um e-mail incorreto;
3. Então a página deve retornar uma mensagem de erro ao usuário.

### Cenário 3: Login com senha inválida
1. Dado que o usuário esteja na página "automation pratice";
2. Quando o usuário fizer o login com uma senha incorreta;
3. Então a página deve retornar uma mensagem de erro ao usuário;
4. Fechar o navegador após a execução.

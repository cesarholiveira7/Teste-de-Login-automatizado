# Teste-de-Login-automatizado
Teste de 3 cenários distintos de Login automatizado.
Foram utizados Intellij IDEA e Selenium Web Driver para realização do teste.

. Cenário 1: Login bem-sucedido:
Dado que o usuário esteja na página "automation pratice";
Quando o usuário fizer o login corretamente;
Então a página deve direcionar o usuário a pagina My account;
E então o usuário faz logout.

. Cenário 2: Login com e-mail inválido:
Dado que o usuário esteja na página "automation pratice";
Quando o usuário fizer o login com um e-mail incorreto;
Então a página deve retornar a mensagem de erro ao usuário.

. Cenário 3: Login com senha inválida:
Dado que o usuário esteja na página "automation pratice";
Quando o usuário fizer o login com um e-mail incorreto;
Então a página deve retornar a mensagem de erro ao usuário;
Fechar o navegador após a execução.

const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
  // Configuração do Selenium WebDriver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Cenário 1: Login bem-sucedido
    console.log("Cenário 1: Login bem-sucedido");

    // Dado que o usuário esteja na página "automation pratice"
    await driver.get('http://automationpractice.pl/index.php?controller=authentication&back=my-account');

    // Quando o usuário fizer o login corretamente
    await driver.findElement(By.id('email')).sendKeys('cesar@gmail.com');
    await driver.findElement(By.id('passwd')).sendKeys('12345');
    await driver.findElement(By.id('SubmitLogin')).click();

    // Então a página deve retornar a mensagem de sucesso ao usuário
    await driver.wait(until.titleIs('My account - My Shop'), 15000);
    console.log("Login realizado com sucesso!");

    // E então o usuário faz logout
    await driver.findElement(By.xpath("//a[contains(text(), 'Sign out')]")).click();
    console.log("Logout realizado com sucesso!");

    // Cenário 2: Login com e-mail inválido
    console.log("Cenário 2: Login com e-mail inválido");

    // Dado que o usuário esteja na página "automation pratice"
    await driver.get('http://automationpractice.pl/index.php?controller=authentication&back=my-account');

    // Quando o usuário fizer o login com um e-mail incorreto
    await driver.findElement(By.id('email')).sendKeys('email_invalido');
    await driver.findElement(By.id('passwd')).sendKeys('12345');
    await driver.findElement(By.id('SubmitLogin')).click();

    // Então a página deve retornar a mensagem de erro ao usuário
    await driver.wait(until.elementLocated(By.css('.alert.alert-danger')), 15000);
    console.log("Mensagem de erro exibida: E-mail inválido!");

    // Cenário 3: Login com senha inválida
    console.log("Cenário 3: Login com senha inválida");

    // Dado que o usuário esteja na página "automation pratice"
    await driver.get('http://automationpractice.pl/index.php?controller=authentication&back=my-account');

    // Quando o usuário fizer o login com um e-mail incorreto
    await driver.findElement(By.id('email')).sendKeys('cesar@gmail.com');
    await driver.findElement(By.id('passwd')).sendKeys('senha_invalida');
    await driver.findElement(By.id('SubmitLogin')).click();

    // Então a página deve retornar a mensagem de erro ao usuário
    await driver.wait(until.elementLocated(By.css('.alert.alert-danger')), 15000);
    console.log("Mensagem de erro exibida: Senha inválida!");
  } finally {
    // Fechar o navegador após a execução
    await driver.quit();
  }
})();

# 🚀 PROJETO 3 — ENTRADA NA CONVENÇÃO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento que presta serviços de tecnologia para o Convenção de Games ExpoPlay.

Durante a reunião de **Sprint Planning**, a responsável pelo local explicou:

> "Antes de liberar a entrada de um(a) visitante, o sistema precisa verificar várias regras ao mesmo tempo: a idade mínima, se a pessoa possui passe, se não está bloqueado e se o pagamento foi realizado. Só depois de checar tudo isso o sistema deve confirmar (ou não) o acesso."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do(a) visitante

O sistema deve representar o registro de um(a) visitante contendo:

- nome;
- idade;
- tipoCredencial (`comum` ou `expositor` ou `organizador`);
- se possui passe (`true` ou `false`);
- se bloqueado (`true` ou `false`);
- valor do passe;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Nome: Lucas Argolo
Idade: 16
TipoCredencial: comum
Possui passe: true
Está bloqueado: false
Valor do passe: R$ 70
Valor pago: R$ 100
```

## RF02 — Verificação da idade mínima

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o(a) visitante possui 18 anos ou mais.

Quando a idade for maior ou igual a 18, o resultado deverá ser:

```
Idade permitida
```

Caso contrário:

```
Idade não permitida
```

Para o cenário principal:

```
Idade: 16

Resultado esperado: Idade não permitida
```

## RF03 — Verificação do nível de acesso

O sistema deve verificar, **usando `if`/`else` e o operador lógico `||`**, se o(a) tipoCredencial do(a) visitante dá direito a acesso administrativo.

Quando o(a) tipoCredencial for `expositor` **ou** `organizador`, o resultado deverá ser:

```
Acesso administrativo liberado
```

Caso contrário:

```
Acesso comum
```

Para o cenário principal:

```
TipoCredencial: comum

Resultado esperado: Acesso comum
```

## RF04 — Verificação da liberação de acesso

O sistema deve decidir, **usando `if`/`else`, o operador lógico `&&` e o operador lógico `!`**, se o acesso do(a) visitante pode ser liberado.

O acesso só pode ser liberado quando **todas** as condições abaixo forem verdadeiras:

- a idade for maior ou igual a 18;
- o(a) visitante possui passe;
- o(a) visitante **não** está bloqueado.

Quando todas as condições forem atendidas, o resultado deverá ser:

```
Entrada liberada
```

Caso contrário:

```
Entrada negada
```

Para o cenário principal:

```
Idade: 16 | Possui passe: true | Está bloqueado: false

Resultado esperado: Entrada negada
```

## RF05 — Verificação do pagamento

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o valor pago é suficiente para cobrir o(a) valor do passe.

Quando o valor pago for maior ou igual ao(à) valor do passe, o resultado deverá ser:

```
Pagamento aprovado
```

Caso contrário:

```
Pagamento insuficiente
```

Para o cenário principal:

```
Valor do passe: R$ 70
Valor pago: R$ 100

Resultado esperado: Pagamento aprovado
```

## RF06 — Cálculo do troco

Quando o pagamento for aprovado, o sistema deve calcular o troco:

```
troco = valor pago - valor do passe
```

Para o cenário principal:

```
100 - 70 = 30
```

Quando o pagamento for insuficiente, o troco deve ser:

```
R$ 0
```

## RF07 — Situação final

O sistema deve decidir, **usando `if`/`else` e o operador lógico `&&`**, se o processo pode ser confirmado.

Quando o acesso estiver **liberado** (RF04) **e** o pagamento estiver **aprovado** (RF05), o resultado deverá ser:

```
Check-in da convenção confirmado
```

Em qualquer outro caso, o resultado deverá ser:

```
Check-in da convenção não confirmado
```

Para o cenário principal, o resultado esperado é:

```
Check-in da convenção não confirmado
```

## RF08 — Resumo

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações:

- nome do(a) visitante;
- tipoCredencial e nível de acesso;
- valor do passe;
- valor pago;
- troco;
- situação do acesso;
- situação do pagamento;
- situação final.

O formato visual da apresentação fica a critério do desenvolvedor.

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    nome,
    idade,
    tipoCredencial,
    possuiPasse,
    bloqueado,
    valorPasse,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusConvencao,
    resumo
}
```

# 📂 Estrutura do projeto

```
projeto3
 ┣ test
 ┃ ┗ index.test.js
 ┣ index.js
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

Boas práticas! 🤙

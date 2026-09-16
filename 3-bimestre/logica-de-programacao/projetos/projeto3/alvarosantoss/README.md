# 🚀 PROJETO 3 — PORTÃO DE ACESSO AO ESTÁDIO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento que presta serviços de tecnologia para o Estádio Arena Sul.

Durante a reunião de **Sprint Planning**, a responsável pelo local explicou:

> "Antes de liberar a entrada de um(a) torcedor, o sistema precisa verificar várias regras ao mesmo tempo: a idade mínima, se a pessoa possui ingresso, se não impedido pela segurança e se o pagamento foi realizado. Só depois de checar tudo isso o sistema deve confirmar (ou não) o acesso."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do(a) torcedor

O sistema deve representar o registro de um(a) torcedor contendo:

- nome;
- idade;
- categoria (`comum` ou `organizador` ou `staff`);
- se possui ingresso (`true` ou `false`);
- se impedido pela segurança (`true` ou `false`);
- valor do ingresso;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Nome: Rodrigo Nunes
Idade: 24
Categoria: comum
Possui ingresso: true
Impedido pela segurança: false
Valor do ingresso: R$ 80
Valor pago: R$ 100
```

## RF02 — Verificação da idade mínima

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o(a) torcedor possui 18 anos ou mais.

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
Idade: 24

Resultado esperado: Idade permitida
```

## RF03 — Verificação do nível de acesso

O sistema deve verificar, **usando `if`/`else` e o operador lógico `||`**, se o(a) categoria do(a) torcedor dá direito a acesso administrativo.

Quando o(a) categoria for `organizador` **ou** `staff`, o resultado deverá ser:

```
Acesso administrativo liberado
```

Caso contrário:

```
Acesso comum
```

Para o cenário principal:

```
Categoria: comum

Resultado esperado: Acesso comum
```

## RF04 — Verificação da liberação de acesso

O sistema deve decidir, **usando `if`/`else`, o operador lógico `&&` e o operador lógico `!`**, se o acesso do(a) torcedor pode ser liberado.

O acesso só pode ser liberado quando **todas** as condições abaixo forem verdadeiras:

- a idade for maior ou igual a 18;
- o(a) torcedor possui ingresso;
- o(a) torcedor **não** impedido pela segurança.

Quando todas as condições forem atendidas, o resultado deverá ser:

```
Acesso liberado
```

Caso contrário:

```
Acesso negado
```

Para o cenário principal:

```
Idade: 24 | Possui ingresso: true | Impedido pela segurança: false

Resultado esperado: Acesso liberado
```

## RF05 — Verificação do pagamento

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o valor pago é suficiente para cobrir o(a) valor do ingresso.

Quando o valor pago for maior ou igual ao(à) valor do ingresso, o resultado deverá ser:

```
Pagamento aprovado
```

Caso contrário:

```
Pagamento insuficiente
```

Para o cenário principal:

```
Valor do ingresso: R$ 80
Valor pago: R$ 100

Resultado esperado: Pagamento aprovado
```

## RF06 — Cálculo do troco

Quando o pagamento for aprovado, o sistema deve calcular o troco:

```
troco = valor pago - valor do ingresso
```

Para o cenário principal:

```
100 - 80 = 20
```

Quando o pagamento for insuficiente, o troco deve ser:

```
R$ 0
```

## RF07 — Situação final

O sistema deve decidir, **usando `if`/`else` e o operador lógico `&&`**, se o processo pode ser confirmado.

Quando o acesso estiver **liberado** (RF04) **e** o pagamento estiver **aprovado** (RF05), o resultado deverá ser:

```
Entrada no estádio confirmada
```

Em qualquer outro caso, o resultado deverá ser:

```
Entrada no estádio não confirmada
```

Para o cenário principal, o resultado esperado é:

```
Entrada no estádio confirmada
```

## RF08 — Resumo

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações:

- nome do(a) torcedor;
- categoria e nível de acesso;
- valor do ingresso;
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
    categoria,
    possuiIngresso,
    impedido,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusPortao,
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

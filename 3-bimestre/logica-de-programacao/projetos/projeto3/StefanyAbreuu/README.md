# 🚀 PROJETO 3 — PORTÃO DA BALADA

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento que presta serviços de tecnologia para o Balada Eletrônica NightVibe.

Durante a reunião de **Sprint Planning**, a responsável pelo local explicou:

> "Antes de liberar a entrada de um(a) cliente, o sistema precisa verificar várias regras ao mesmo tempo: a idade mínima, se a pessoa possui ingresso, se não está impedido e se o pagamento foi realizado. Só depois de checar tudo isso o sistema deve confirmar (ou não) o acesso."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do(a) cliente

O sistema deve representar o registro de um(a) cliente contendo:

- nome;
- idade;
- categoria (`comum` ou `produtor` ou `staff`);
- se possui ingresso (`true` ou `false`);
- se impedido (`true` ou `false`);
- valor do ingresso;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Nome: Stefany Abreu
Idade: 20
Categoria: comum
Possui ingresso: true
Está impedido: false
Valor do ingresso: R$ 70
Valor pago: R$ 50
```

## RF02 — Verificação da idade mínima

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o(a) cliente possui 18 anos ou mais.

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
Idade: 20

Resultado esperado: Idade permitida
```

## RF03 — Verificação do nível de acesso

O sistema deve verificar, **usando `if`/`else` e o operador lógico `||`**, se o(a) categoria do(a) cliente dá direito a acesso administrativo.

Quando o(a) categoria for `produtor` **ou** `staff`, o resultado deverá ser:

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

O sistema deve decidir, **usando `if`/`else`, o operador lógico `&&` e o operador lógico `!`**, se o acesso do(a) cliente pode ser liberado.

O acesso só pode ser liberado quando **todas** as condições abaixo forem verdadeiras:

- a idade for maior ou igual a 18;
- o(a) cliente possui ingresso;
- o(a) cliente **não** está impedido.

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
Idade: 20 | Possui ingresso: true | Está impedido: false

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
Valor do ingresso: R$ 70
Valor pago: R$ 50

Resultado esperado: Pagamento insuficiente
```

## RF06 — Cálculo do troco

Quando o pagamento for aprovado, o sistema deve calcular o troco:

```
troco = valor pago - valor do ingresso
```

Para o cenário principal:

```
50 - 70 = 0
```

Quando o pagamento for insuficiente, o troco deve ser:

```
R$ 0
```

## RF07 — Situação final

O sistema deve decidir, **usando `if`/`else` e o operador lógico `&&`**, se o processo pode ser confirmado.

Quando o acesso estiver **liberado** (RF04) **e** o pagamento estiver **aprovado** (RF05), o resultado deverá ser:

```
Check-in da festa confirmado
```

Em qualquer outro caso, o resultado deverá ser:

```
Check-in da festa não confirmado
```

Para o cenário principal, o resultado esperado é:

```
Check-in da festa não confirmado
```

## RF08 — Resumo

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações:

- nome do(a) cliente;
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
    statusFesta,
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

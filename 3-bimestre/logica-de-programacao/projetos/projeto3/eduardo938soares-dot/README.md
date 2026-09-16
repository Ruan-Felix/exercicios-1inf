# 🚀 PROJETO 3 — LIBERAÇÃO DE ACESSO À PISCINA

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento que presta serviços de tecnologia para o Piscina Clube Recreativo.

Durante a reunião de **Sprint Planning**, a responsável pelo local explicou:

> "Antes de liberar a entrada de um(a) sócio, o sistema precisa verificar várias regras ao mesmo tempo: a idade mínima, se a pessoa possui carteirinha, se não está inadimplente e se o pagamento foi realizado. Só depois de checar tudo isso o sistema deve confirmar (ou não) o acesso."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do(a) sócio

O sistema deve representar o registro de um(a) sócio contendo:

- nome;
- idade;
- categoria (`comum` ou `instrutor` ou `coordenador`);
- se possui carteirinha (`true` ou `false`);
- se inadimplente (`true` ou `false`);
- valor da mensalidade;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Nome: Eduardo Soares
Idade: 14
Categoria: comum
Possui carteirinha: true
Está inadimplente: false
Valor da mensalidade: R$ 90
Valor pago: R$ 90
```

## RF02 — Verificação da idade mínima

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o(a) sócio possui 18 anos ou mais.

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
Idade: 14

Resultado esperado: Idade não permitida
```

## RF03 — Verificação do nível de acesso

O sistema deve verificar, **usando `if`/`else` e o operador lógico `||`**, se o(a) categoria do(a) sócio dá direito a acesso administrativo.

Quando o(a) categoria for `instrutor` **ou** `coordenador`, o resultado deverá ser:

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

O sistema deve decidir, **usando `if`/`else`, o operador lógico `&&` e o operador lógico `!`**, se o acesso do(a) sócio pode ser liberado.

O acesso só pode ser liberado quando **todas** as condições abaixo forem verdadeiras:

- a idade for maior ou igual a 18;
- o(a) sócio possui carteirinha;
- o(a) sócio **não** está inadimplente.

Quando todas as condições forem atendidas, o resultado deverá ser:

```
Acesso à piscina liberado
```

Caso contrário:

```
Acesso à piscina negado
```

Para o cenário principal:

```
Idade: 14 | Possui carteirinha: true | Está inadimplente: false

Resultado esperado: Acesso à piscina negado
```

## RF05 — Verificação do pagamento

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o valor pago é suficiente para cobrir o(a) valor da mensalidade.

Quando o valor pago for maior ou igual ao(à) valor da mensalidade, o resultado deverá ser:

```
Pagamento aprovado
```

Caso contrário:

```
Pagamento insuficiente
```

Para o cenário principal:

```
Valor da mensalidade: R$ 90
Valor pago: R$ 90

Resultado esperado: Pagamento aprovado
```

## RF06 — Cálculo do troco

Quando o pagamento for aprovado, o sistema deve calcular o troco:

```
troco = valor pago - valor da mensalidade
```

Para o cenário principal:

```
90 - 90 = 0
```

Quando o pagamento for insuficiente, o troco deve ser:

```
R$ 0
```

## RF07 — Situação final

O sistema deve decidir, **usando `if`/`else` e o operador lógico `&&`**, se o processo pode ser confirmado.

Quando o acesso estiver **liberado** (RF04) **e** o pagamento estiver **aprovado** (RF05), o resultado deverá ser:

```
Entrada no clube confirmada
```

Em qualquer outro caso, o resultado deverá ser:

```
Entrada no clube não confirmada
```

Para o cenário principal, o resultado esperado é:

```
Entrada no clube não confirmada
```

## RF08 — Resumo

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações:

- nome do(a) sócio;
- categoria e nível de acesso;
- valor da mensalidade;
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
    possuiCarteirinha,
    inadimplente,
    valorMensalidade,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusAcesso,
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

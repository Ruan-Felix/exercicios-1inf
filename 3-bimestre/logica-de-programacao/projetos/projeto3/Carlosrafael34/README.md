# 🚀 PROJETO 3 — RETIRADA DE KIT DA CORRIDA

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento que presta serviços de tecnologia para o Maratona da Cidade.

Durante a reunião de **Sprint Planning**, a responsável pelo local explicou:

> "Antes de liberar a entrada de um(a) corredor, o sistema precisa verificar várias regras ao mesmo tempo: a idade mínima, se a pessoa possui inscrição, se não está suspenso e se o pagamento foi realizado. Só depois de checar tudo isso o sistema deve confirmar (ou não) o acesso."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do(a) corredor

O sistema deve representar o registro de um(a) corredor contendo:

- nome;
- idade;
- categoria (`comum` ou `organizador` ou `staff`);
- se possui inscrição (`true` ou `false`);
- se suspenso (`true` ou `false`);
- valor da inscrição;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Nome: Rafael Carlos
Idade: 21
Categoria: comum
Possui inscrição: true
Está suspenso: false
Valor da inscrição: R$ 90
Valor pago: R$ 90
```

## RF02 — Verificação da idade mínima

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o(a) corredor possui 18 anos ou mais.

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
Idade: 21

Resultado esperado: Idade permitida
```

## RF03 — Verificação do nível de acesso

O sistema deve verificar, **usando `if`/`else` e o operador lógico `||`**, se o(a) categoria do(a) corredor dá direito a acesso administrativo.

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

O sistema deve decidir, **usando `if`/`else`, o operador lógico `&&` e o operador lógico `!`**, se o acesso do(a) corredor pode ser liberado.

O acesso só pode ser liberado quando **todas** as condições abaixo forem verdadeiras:

- a idade for maior ou igual a 18;
- o(a) corredor possui inscrição;
- o(a) corredor **não** está suspenso.

Quando todas as condições forem atendidas, o resultado deverá ser:

```
Retirada de kit liberada
```

Caso contrário:

```
Retirada de kit negada
```

Para o cenário principal:

```
Idade: 21 | Possui inscrição: true | Está suspenso: false

Resultado esperado: Retirada de kit liberada
```

## RF05 — Verificação do pagamento

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o valor pago é suficiente para cobrir o(a) valor da inscrição.

Quando o valor pago for maior ou igual ao(à) valor da inscrição, o resultado deverá ser:

```
Pagamento aprovado
```

Caso contrário:

```
Pagamento insuficiente
```

Para o cenário principal:

```
Valor da inscrição: R$ 90
Valor pago: R$ 90

Resultado esperado: Pagamento aprovado
```

## RF06 — Cálculo do troco

Quando o pagamento for aprovado, o sistema deve calcular o troco:

```
troco = valor pago - valor da inscrição
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
Participação na corrida confirmada
```

Em qualquer outro caso, o resultado deverá ser:

```
Participação na corrida não confirmada
```

Para o cenário principal, o resultado esperado é:

```
Participação na corrida confirmada
```

## RF08 — Resumo

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações:

- nome do(a) corredor;
- categoria e nível de acesso;
- valor da inscrição;
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
    possuiInscricao,
    suspenso,
    valorInscricao,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusCorrida,
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

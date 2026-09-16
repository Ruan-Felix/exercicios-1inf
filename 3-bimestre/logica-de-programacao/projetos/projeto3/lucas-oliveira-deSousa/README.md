# 🚀 PROJETO 3 — LIBERAÇÃO DA SALA DE ESCAPE ROOM

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento que presta serviços de tecnologia para o Sala de Escape Enigma.

Durante a reunião de **Sprint Planning**, a responsável pelo local explicou:

> "Antes de liberar a entrada de um(a) jogador, o sistema precisa verificar várias regras ao mesmo tempo: a idade mínima, se a pessoa possui reserva, se não está bloqueado e se o pagamento foi realizado. Só depois de checar tudo isso o sistema deve confirmar (ou não) o acesso."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do(a) jogador

O sistema deve representar o registro de um(a) jogador contendo:

- nome;
- idade;
- categoria (`comum` ou `mestre-de-jogo` ou `coordenador`);
- se possui reserva (`true` ou `false`);
- se bloqueado (`true` ou `false`);
- valor da reserva;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Nome: Lucas Oliveira
Idade: 17
Categoria: comum
Possui reserva: true
Está bloqueado: false
Valor da reserva: R$ 60
Valor pago: R$ 70
```

## RF02 — Verificação da idade mínima

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o(a) jogador possui 18 anos ou mais.

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
Idade: 17

Resultado esperado: Idade não permitida
```

## RF03 — Verificação do nível de acesso

O sistema deve verificar, **usando `if`/`else` e o operador lógico `||`**, se o(a) categoria do(a) jogador dá direito a acesso administrativo.

Quando o(a) categoria for `mestre-de-jogo` **ou** `coordenador`, o resultado deverá ser:

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

O sistema deve decidir, **usando `if`/`else`, o operador lógico `&&` e o operador lógico `!`**, se o acesso do(a) jogador pode ser liberado.

O acesso só pode ser liberado quando **todas** as condições abaixo forem verdadeiras:

- a idade for maior ou igual a 18;
- o(a) jogador possui reserva;
- o(a) jogador **não** está bloqueado.

Quando todas as condições forem atendidas, o resultado deverá ser:

```
Acesso à sala liberado
```

Caso contrário:

```
Acesso à sala negado
```

Para o cenário principal:

```
Idade: 17 | Possui reserva: true | Está bloqueado: false

Resultado esperado: Acesso à sala negado
```

## RF05 — Verificação do pagamento

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o valor pago é suficiente para cobrir o(a) valor da reserva.

Quando o valor pago for maior ou igual ao(à) valor da reserva, o resultado deverá ser:

```
Pagamento aprovado
```

Caso contrário:

```
Pagamento insuficiente
```

Para o cenário principal:

```
Valor da reserva: R$ 60
Valor pago: R$ 70

Resultado esperado: Pagamento aprovado
```

## RF06 — Cálculo do troco

Quando o pagamento for aprovado, o sistema deve calcular o troco:

```
troco = valor pago - valor da reserva
```

Para o cenário principal:

```
70 - 60 = 10
```

Quando o pagamento for insuficiente, o troco deve ser:

```
R$ 0
```

## RF07 — Situação final

O sistema deve decidir, **usando `if`/`else` e o operador lógico `&&`**, se o processo pode ser confirmado.

Quando o acesso estiver **liberado** (RF04) **e** o pagamento estiver **aprovado** (RF05), o resultado deverá ser:

```
Partida confirmada
```

Em qualquer outro caso, o resultado deverá ser:

```
Partida não confirmada
```

Para o cenário principal, o resultado esperado é:

```
Partida não confirmada
```

## RF08 — Resumo

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações:

- nome do(a) jogador;
- categoria e nível de acesso;
- valor da reserva;
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
    possuiReserva,
    bloqueado,
    valorReserva,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusPartida,
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

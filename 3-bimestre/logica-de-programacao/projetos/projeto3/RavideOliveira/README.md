# 🚀 PROJETO 3 — LIBERAÇÃO DA SALA DE ESTUDOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento que presta serviços de tecnologia para o Biblioteca Municipal Sala de Estudos.

Durante a reunião de **Sprint Planning**, a responsável pelo local explicou:

> "Antes de liberar a entrada de um(a) leitor, o sistema precisa verificar várias regras ao mesmo tempo: a idade mínima, se a pessoa possui carteirinha, se não está suspenso e se o pagamento foi realizado. Só depois de checar tudo isso o sistema deve confirmar (ou não) o acesso."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do(a) leitor

O sistema deve representar o registro de um(a) leitor contendo:

- nome;
- idade;
- categoria (`comum` ou `bibliotecario` ou `coordenador`);
- se possui carteirinha (`true` ou `false`);
- se suspenso (`true` ou `false`);
- valor da reserva da sala;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Nome: Rávide Oliveira
Idade: 16
Categoria: comum
Possui carteirinha: true
Está suspenso: false
Valor da reserva da sala: R$ 10
Valor pago: R$ 10
```

## RF02 — Verificação da idade mínima

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o(a) leitor possui 18 anos ou mais.

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

O sistema deve verificar, **usando `if`/`else` e o operador lógico `||`**, se o(a) categoria do(a) leitor dá direito a acesso administrativo.

Quando o(a) categoria for `bibliotecario` **ou** `coordenador`, o resultado deverá ser:

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

O sistema deve decidir, **usando `if`/`else`, o operador lógico `&&` e o operador lógico `!`**, se o acesso do(a) leitor pode ser liberado.

O acesso só pode ser liberado quando **todas** as condições abaixo forem verdadeiras:

- a idade for maior ou igual a 18;
- o(a) leitor possui carteirinha;
- o(a) leitor **não** está suspenso.

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
Idade: 16 | Possui carteirinha: true | Está suspenso: false

Resultado esperado: Acesso à sala negado
```

## RF05 — Verificação do pagamento

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o valor pago é suficiente para cobrir o(a) valor da reserva da sala.

Quando o valor pago for maior ou igual ao(à) valor da reserva da sala, o resultado deverá ser:

```
Pagamento aprovado
```

Caso contrário:

```
Pagamento insuficiente
```

Para o cenário principal:

```
Valor da reserva da sala: R$ 10
Valor pago: R$ 10

Resultado esperado: Pagamento aprovado
```

## RF06 — Cálculo do troco

Quando o pagamento for aprovado, o sistema deve calcular o troco:

```
troco = valor pago - valor da reserva da sala
```

Para o cenário principal:

```
10 - 10 = 0
```

Quando o pagamento for insuficiente, o troco deve ser:

```
R$ 0
```

## RF07 — Situação final

O sistema deve decidir, **usando `if`/`else` e o operador lógico `&&`**, se o processo pode ser confirmado.

Quando o acesso estiver **liberado** (RF04) **e** o pagamento estiver **aprovado** (RF05), o resultado deverá ser:

```
Reserva da sala confirmada
```

Em qualquer outro caso, o resultado deverá ser:

```
Reserva da sala não confirmada
```

Para o cenário principal, o resultado esperado é:

```
Reserva da sala não confirmada
```

## RF08 — Resumo

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações:

- nome do(a) leitor;
- categoria e nível de acesso;
- valor da reserva da sala;
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
    suspenso,
    valorReserva,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusReserva,
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

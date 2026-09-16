# 🚀 PROJETO 3 — BILHETERIA DO TEATRO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento que presta serviços de tecnologia para o Teatro Municipal.

Durante a reunião de **Sprint Planning**, a responsável pelo local explicou:

> "Antes de liberar a entrada de um(a) espectador, o sistema precisa verificar várias regras ao mesmo tempo: a idade mínima, se a pessoa possui reserva, se não está inadimplente e se o pagamento foi realizado. Só depois de checar tudo isso o sistema deve confirmar (ou não) o acesso."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do(a) espectador

O sistema deve representar o registro de um(a) espectador contendo:

- nome;
- idade;
- tipoConvite (`comum` ou `produtor` ou `diretor`);
- se possui reserva (`true` ou `false`);
- se inadimplente (`true` ou `false`);
- valor da entrada;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Nome: Aline Ferreira
Idade: 19
TipoConvite: comum
Possui reserva: true
Está inadimplente: false
Valor da entrada: R$ 60
Valor pago: R$ 60
```

## RF02 — Verificação da idade mínima

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o(a) espectador possui 18 anos ou mais.

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
Idade: 19

Resultado esperado: Idade permitida
```

## RF03 — Verificação do nível de acesso

O sistema deve verificar, **usando `if`/`else` e o operador lógico `||`**, se o(a) tipoConvite do(a) espectador dá direito a acesso administrativo.

Quando o(a) tipoConvite for `produtor` **ou** `diretor`, o resultado deverá ser:

```
Acesso administrativo liberado
```

Caso contrário:

```
Acesso comum
```

Para o cenário principal:

```
TipoConvite: comum

Resultado esperado: Acesso comum
```

## RF04 — Verificação da liberação de acesso

O sistema deve decidir, **usando `if`/`else`, o operador lógico `&&` e o operador lógico `!`**, se o acesso do(a) espectador pode ser liberado.

O acesso só pode ser liberado quando **todas** as condições abaixo forem verdadeiras:

- a idade for maior ou igual a 18;
- o(a) espectador possui reserva;
- o(a) espectador **não** está inadimplente.

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
Idade: 19 | Possui reserva: true | Está inadimplente: false

Resultado esperado: Entrada liberada
```

## RF05 — Verificação do pagamento

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o valor pago é suficiente para cobrir o(a) valor da entrada.

Quando o valor pago for maior ou igual ao(à) valor da entrada, o resultado deverá ser:

```
Pagamento aprovado
```

Caso contrário:

```
Pagamento insuficiente
```

Para o cenário principal:

```
Valor da entrada: R$ 60
Valor pago: R$ 60

Resultado esperado: Pagamento aprovado
```

## RF06 — Cálculo do troco

Quando o pagamento for aprovado, o sistema deve calcular o troco:

```
troco = valor pago - valor da entrada
```

Para o cenário principal:

```
60 - 60 = 0
```

Quando o pagamento for insuficiente, o troco deve ser:

```
R$ 0
```

## RF07 — Situação final

O sistema deve decidir, **usando `if`/`else` e o operador lógico `&&`**, se o processo pode ser confirmado.

Quando o acesso estiver **liberado** (RF04) **e** o pagamento estiver **aprovado** (RF05), o resultado deverá ser:

```
Check-in da sessão confirmado
```

Em qualquer outro caso, o resultado deverá ser:

```
Check-in da sessão não confirmado
```

Para o cenário principal, o resultado esperado é:

```
Check-in da sessão confirmado
```

## RF08 — Resumo

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações:

- nome do(a) espectador;
- tipoConvite e nível de acesso;
- valor da entrada;
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
    tipoConvite,
    possuiReserva,
    inadimplente,
    valorEntrada,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusSessao,
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

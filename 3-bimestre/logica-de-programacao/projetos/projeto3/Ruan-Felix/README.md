# 🚀 PROJETO 3 — LIBERAÇÃO DA AULA EXPERIMENTAL

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento que presta serviços de tecnologia para o Curso de Idiomas Speak Up.

Durante a reunião de **Sprint Planning**, a responsável pelo local explicou:

> "Antes de liberar a entrada de um(a) aluno, o sistema precisa verificar várias regras ao mesmo tempo: a idade mínima, se a pessoa possui inscrição, se não está inadimplente e se o pagamento foi realizado. Só depois de checar tudo isso o sistema deve confirmar (ou não) o acesso."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do(a) aluno

O sistema deve representar o registro de um(a) aluno contendo:

- nome;
- idade;
- categoria (`comum` ou `professor` ou `coordenador`);
- se possui inscrição (`true` ou `false`);
- se inadimplente (`true` ou `false`);
- valor da mensalidade;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Nome: Ruan Félix
Idade: 15
Categoria: comum
Possui inscrição: true
Está inadimplente: false
Valor da mensalidade: R$ 0
Valor pago: R$ 0
```

## RF02 — Verificação da idade mínima

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o(a) aluno possui 18 anos ou mais.

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
Idade: 15

Resultado esperado: Idade não permitida
```

## RF03 — Verificação do nível de acesso

O sistema deve verificar, **usando `if`/`else` e o operador lógico `||`**, se o(a) categoria do(a) aluno dá direito a acesso administrativo.

Quando o(a) categoria for `professor` **ou** `coordenador`, o resultado deverá ser:

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

O sistema deve decidir, **usando `if`/`else`, o operador lógico `&&` e o operador lógico `!`**, se o acesso do(a) aluno pode ser liberado.

O acesso só pode ser liberado quando **todas** as condições abaixo forem verdadeiras:

- a idade for maior ou igual a 18;
- o(a) aluno possui inscrição;
- o(a) aluno **não** está inadimplente.

Quando todas as condições forem atendidas, o resultado deverá ser:

```
Acesso à aula liberado
```

Caso contrário:

```
Acesso à aula negado
```

Para o cenário principal:

```
Idade: 15 | Possui inscrição: true | Está inadimplente: false

Resultado esperado: Acesso à aula negado
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
Valor da mensalidade: R$ 0
Valor pago: R$ 0

Resultado esperado: Pagamento aprovado
```

## RF06 — Cálculo do troco

Quando o pagamento for aprovado, o sistema deve calcular o troco:

```
troco = valor pago - valor da mensalidade
```

Para o cenário principal:

```
0 - 0 = 0
```

Quando o pagamento for insuficiente, o troco deve ser:

```
R$ 0
```

## RF07 — Situação final

O sistema deve decidir, **usando `if`/`else` e o operador lógico `&&`**, se o processo pode ser confirmado.

Quando o acesso estiver **liberado** (RF04) **e** o pagamento estiver **aprovado** (RF05), o resultado deverá ser:

```
Presença na aula confirmada
```

Em qualquer outro caso, o resultado deverá ser:

```
Presença na aula não confirmada
```

Para o cenário principal, o resultado esperado é:

```
Presença na aula não confirmada
```

## RF08 — Resumo

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações:

- nome do(a) aluno;
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
    possuiInscricao,
    inadimplente,
    valorMensalidade,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusAula,
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

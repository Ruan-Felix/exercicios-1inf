# 🚀 PROJETO 3 — CREDENCIAMENTO DO SIMPÓSIO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento que presta serviços de tecnologia para o Simpósio Científico Nacional.

Durante a reunião de **Sprint Planning**, a responsável pelo local explicou:

> "Antes de liberar a entrada de um(a) participante, o sistema precisa verificar várias regras ao mesmo tempo: a idade mínima, se a pessoa possui inscrição, se não está bloqueado e se o pagamento foi realizado. Só depois de checar tudo isso o sistema deve confirmar (ou não) o acesso."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do(a) participante

O sistema deve representar o registro de um(a) participante contendo:

- nome;
- idade;
- cargo (`participante` ou `palestrante` ou `coordenador`);
- se possui inscrição (`true` ou `false`);
- se bloqueado (`true` ou `false`);
- valor da inscrição;
- valor pago.

Para os testes, será utilizado inicialmente:

```
Nome: Luiz Fernando
Idade: 40
Cargo: participante
Possui inscrição: true
Está bloqueado: false
Valor da inscrição: R$ 220
Valor pago: R$ 300
```

## RF02 — Verificação da idade mínima

O sistema deve verificar, **usando `if`/`else`** e um operador de comparação, se o(a) participante possui 18 anos ou mais.

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
Idade: 40

Resultado esperado: Idade permitida
```

## RF03 — Verificação do nível de acesso

O sistema deve verificar, **usando `if`/`else` e o operador lógico `||`**, se o(a) cargo do(a) participante dá direito a acesso administrativo.

Quando o(a) cargo for `palestrante` **ou** `coordenador`, o resultado deverá ser:

```
Acesso administrativo liberado
```

Caso contrário:

```
Acesso comum
```

Para o cenário principal:

```
Cargo: participante

Resultado esperado: Acesso comum
```

## RF04 — Verificação da liberação de acesso

O sistema deve decidir, **usando `if`/`else`, o operador lógico `&&` e o operador lógico `!`**, se o acesso do(a) participante pode ser liberado.

O acesso só pode ser liberado quando **todas** as condições abaixo forem verdadeiras:

- a idade for maior ou igual a 18;
- o(a) participante possui inscrição;
- o(a) participante **não** está bloqueado.

Quando todas as condições forem atendidas, o resultado deverá ser:

```
Credenciamento liberado
```

Caso contrário:

```
Credenciamento negado
```

Para o cenário principal:

```
Idade: 40 | Possui inscrição: true | Está bloqueado: false

Resultado esperado: Credenciamento liberado
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
Valor da inscrição: R$ 220
Valor pago: R$ 300

Resultado esperado: Pagamento aprovado
```

## RF06 — Cálculo do troco

Quando o pagamento for aprovado, o sistema deve calcular o troco:

```
troco = valor pago - valor da inscrição
```

Para o cenário principal:

```
300 - 220 = 80
```

Quando o pagamento for insuficiente, o troco deve ser:

```
R$ 0
```

## RF07 — Situação final

O sistema deve decidir, **usando `if`/`else` e o operador lógico `&&`**, se o processo pode ser confirmado.

Quando o acesso estiver **liberado** (RF04) **e** o pagamento estiver **aprovado** (RF05), o resultado deverá ser:

```
Check-in do simpósio confirmado
```

Em qualquer outro caso, o resultado deverá ser:

```
Check-in do simpósio não confirmado
```

Para o cenário principal, o resultado esperado é:

```
Check-in do simpósio confirmado
```

## RF08 — Resumo

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações:

- nome do(a) participante;
- cargo e nível de acesso;
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
    cargo,
    possuiInscricao,
    bloqueado,
    valorInscricao,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusSimposio,
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

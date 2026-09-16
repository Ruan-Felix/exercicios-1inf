# 🚀 PROJETO 3 — SISTEMA DE ENTRADA NO EVENTO

# 🎯 O QUE VOCÊ VAI FAZER

Um sistema decide se libera a entrada de uma pessoa.

Ele só decide "sim" quando **todas** as regras forem verdadeiras ao mesmo tempo.

É como um semáforo: só pode passar quando **todas** as condições estiverem certas — se faltar uma, já não pode passar.

# 📋 DADOS

```
Nome: Benício Ribeiro
Idade: 20
Possui ingresso: true
Bloqueado: false
Valor do ingresso: R$ 50
Valor pago: R$ 50
```

# 📋 REQUISITOS

## RF01 — Guardar os dados

Guarde em variáveis: `nome`, `idade`, `possuiIngresso`, `bloqueado`, `valorIngresso`, `valorPago`.

## RF02 — Liberar a entrada

Use `if`/`else` com `&&` e `!`.

A entrada só é liberada quando, **ao mesmo tempo**:

- `idade >= 18`
- `possuiIngresso` for `true`
- `bloqueado` for `false` (ou seja, `!bloqueado`)

Se tudo isso for verdade:

```
Entrada liberada
```

Senão:

```
Entrada negada
```

## RF03 — Verificar o pagamento

Use `if`/`else`.

Se `valorPago >= valorIngresso`:

```
Pagamento aprovado
```

Senão:

```
Pagamento insuficiente
```

## RF04 — Calcular o troco

Se o pagamento foi aprovado:

```
troco = valorPago - valorIngresso
```

Senão, `troco` é `0`.

## RF05 — Situação final

Use `if`/`else` com `&&`.

Se a entrada foi liberada **e** o pagamento foi aprovado:

```
Entrada confirmada
```

Senão:

```
Entrada não confirmada
```

## RF06 — Resumo

Crie um `resumo` com template string, mostrando: nome, entrada, pagamento, troco e situação final.

# 🧩 EXEMPLO DO PADRÃO ESPERADO

Isso não é a solução do projeto — é só um exemplo do mesmo padrão de código, com outro assunto:

```jsx
const cor = "verde"
const temGasolina = true
const carroBloqueado = false

let podeAndar

if (cor === "verde" && temGasolina === true && !carroBloqueado) {
  podeAndar = "Pode andar"
} else {
  podeAndar = "Não pode andar"
}
```

Use essa mesma ideia — `if`/`else`, `&&` e `!` juntos — para resolver o RF02 e o RF05.

# 💡 DICAS

Dica: `!bloqueado` é o mesmo que perguntar "não está bloqueado?".

Dica: use `&&` quando **todas** as condições precisam ser verdadeiras.

Dica: calcule o troco só depois de saber se o pagamento foi aprovado.

Crie o arquivo `index.js` com a solução. No final, cole isso:

```jsx
module.exports = {
    nome,
    idade,
    possuiIngresso,
    bloqueado,
    valorIngresso,
    valorPago,
    entradaStatus,
    pagamentoStatus,
    troco,
    statusFinal,
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

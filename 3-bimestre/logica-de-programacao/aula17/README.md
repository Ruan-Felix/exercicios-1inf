# 🎯 Aula 17 — CONDICIONAL COM OPERADORES DE COMPARAÇÃO `==`, `===`, `<`, `>`, ETC.

# 🎯 Objetivos da Aula

- Compreender os operadores de comparação.
- Utilizar comparações dentro de estruturas `if`.
- Diferenciar `==` e `===`.
- Utilizar `<`, `>`, `<=` e `>=`.
- Utilizar `!=` e `!==`.
- Entender que comparações produzem `true` ou `false`.
- Aplicar comparações em problemas reais.

# 🧩 O que são operadores de comparação?

Os operadores de comparação permitem verificar uma relação entre dois valores.

Por exemplo:

```jsx
10 > 5
```

O JavaScript verifica:

> 10 é maior que 5?
> 

Resultado:

```jsx
true
```

Outro exemplo:

```jsx
10 < 5
```

Resultado:

```jsx
false
```

Esses resultados podem ser utilizados pelo `if`.

# 📋 Principais operadores

| Operador | Significado |
| --- | --- |
| `==` | Igual em valor |
| `===` | Estritamente igual |
| `!=` | Diferente em valor |
| `!==` | Estritamente diferente |
| `>` | Maior que |
| `<` | Menor que |
| `>=` | Maior ou igual |
| `<=` | Menor ou igual |

# ➕ Maior que — `>`

```jsx
const idade = 20

if (idade > 18) {
  console.log("Maior que 18")
}
```

Como:

```
20 > 18
```

é verdadeiro, o código será executado.

# ➖ Menor que — `<`

```jsx
const idade = 15

if (idade < 18) {
  console.log("Menor de idade")
}
```

Resultado:

```
Menor de idade
```

# 🟰 Maior ou igual — `>=`

Esse operador verifica duas possibilidades:

```
maior
OU
igual
```

Exemplo:

```jsx
const nota = 6

if (nota >= 6) {
  console.log("Aprovado")
}
```

Como:

```
6 >= 6
```

é verdadeiro, o aluno será aprovado.

# 🟰 Menor ou igual — `<=`

```jsx
const idade = 17

if (idade <= 17) {
  console.log("Idade permitida")
}
```

Como:

```
17 <= 17
```

é verdadeiro.

# 🧩 Igualdade com `==`

O operador:

```jsx
==
```

verifica se dois valores são iguais, podendo realizar conversão de tipo.

Por exemplo:

```jsx
5 == "5"
```

O resultado será:

```jsx
true
```

Isso acontece porque o JavaScript considera os valores equivalentes nessa comparação.

# ⚠️ `==` pode gerar confusão

Observe:

```jsx
const idade = "18"

if (idade == 18) {
  console.log("Maior de idade")
}
```

Mesmo que:

```
"18"
```

seja uma string e:

```
18
```

seja um number, a comparação com `==` pode resultar em `true`.

Por isso, no código moderno, normalmente preferimos utilizar `===`.

# 🟰 Igualdade estrita — `===`

O operador:

```jsx
===
```

compara:

1. o valor;
2. o tipo.

Exemplo:

```jsx
5 === 5
```

Resultado:

```jsx
true
```

Mas:

```jsx
5 === "5"
```

Resultado:

```jsx
false
```

Porque:

```
5     → Number
"5"   → String
```

Os tipos são diferentes.

# 🧠 Regra da disciplina

Durante o curso, quando quisermos verificar igualdade, utilizaremos preferencialmente:

```jsx
===
```

em vez de:

```jsx
==
```

Isso deixa as comparações mais previsíveis.

# 🧩 Exemplo

```jsx
const senha = "1234"

if (senha === "1234") {
  console.log("Senha correta")
} else {
  console.log("Senha incorreta")
}
```

Como as duas strings possuem o mesmo conteúdo e o mesmo tipo:

```
"1234" === "1234"
```

é:

```
true
```

# ❌ Diferente — `!=`

O operador:

```jsx
!=
```

verifica se os valores são diferentes.

```jsx
const idade = 20

if (idade != 18) {
  console.log("A idade não é 18")
}
```

Como `20` é diferente de `18`, a condição é verdadeira.

# ❌ Diferente estrito — `!==`

Assim como temos `===`, também temos:

```jsx
!==
```

Ele verifica valor **e tipo**.

```jsx
5 !== "5"
```

Resultado:

```jsx
true
```

Porque os tipos são diferentes.

# 📊 Comparando os operadores de igualdade

| Expressão | Resultado |
| --- | --- |
| `5 == "5"` | `true` |
| `5 === "5"` | `false` |
| `5 === 5` | `true` |
| `5 != "5"` | `false` |
| `5 !== "5"` | `true` |

Para o nosso código:

> **Prefira `===` e `!==`.**
> 

# 🧩 Operadores com `if`

Os operadores de comparação são especialmente importantes quando utilizados com `if`.

Exemplo:

```jsx
const estoque = 10

if (estoque > 0) {
  console.log("Disponível")
} else {
  console.log("Esgotado")
}
```

A comparação:

```jsx
estoque > 0
```

produz:

```
true
```

ou:

```
false
```

O `if` utiliza esse resultado para tomar uma decisão.

# 🧠 Pensando como o computador

Imagine:

```jsx
const idade = 20

if (idade >= 18) {
  console.log("Entrada permitida")
}
```

O computador verifica:

```
idade = 20

20 >= 18
     ↓
    true
     ↓
Executa o if
```

# 🧩 Exemplo — Limite de idade

```jsx
const idade = 16

if (idade >= 18) {
  console.log("Acesso permitido")
} else {
  console.log("Acesso negado")
}
```

A comparação:

```
16 >= 18
```

resulta em:

```
false
```

Então:

```
Acesso negado
```

# 🧩 Exemplo — Nota

```jsx
const nota = 7

if (nota >= 6) {
  console.log("Aprovado")
} else {
  console.log("Reprovado")
}
```

A condição:

```
7 >= 6
```

é verdadeira.

# 🧩 Exemplo — Estoque mínimo

Uma loja deseja saber se precisa repor determinado produto.

```jsx
const estoque = 3

if (estoque <= 5) {
  console.log("Necessário repor estoque")
} else {
  console.log("Estoque suficiente")
}
```

Como:

```
3 <= 5
```

é verdadeiro:

```
Necessário repor estoque
```

Fim da aula!

_

# 🧩 Exercício Rápido

Uma escola precisa verificar se um aluno foi aprovado.

A regra é:

> A nota mínima para aprovação é `7`.
> 

Crie:

```jsx
const nota = 8
```

Se a nota for maior ou igual a `7`, a variável `resultado` deverá receber:

```
Aprovado
```

Caso contrário:

```
Reprovado
```

Utilize `>=`.

Exporte a variável `resultado` para que o testes funcionem e o GitHub Actions execute a correção.
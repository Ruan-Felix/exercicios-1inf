# 🎯 AULA 16 — CONDICIONAL `IF` E `ELSE`

# 🎯 Objetivos da Aula

- Compreender o conceito de decisão em programação.
- Entender como funciona a estrutura condicional `if`.
- Utilizar `else` para definir uma segunda possibilidade.
- Criar programas que tomam decisões com base em condições.
- Compreender o conceito de condição verdadeira ou falsa.
- Utilizar condicionais em situações próximas da realidade.

# 🧩 O que é uma condição?

Até agora, nossos programas executavam as instruções independentemente dos dados.

Por exemplo:

```jsx
const idade = 18

const mensagem = "Você pode entrar."
```

O programa sempre produzirá:

```
Você pode entrar.
```

Mas e se quisermos que o programa **decida** o que fazer?

Por exemplo:

> Se a pessoa tiver 18 anos ou mais, permitir a entrada. Caso contrário, negar.
> 

Agora precisamos de uma estrutura de decisão.

É aí que entra o `if`.

# 🧠 O que significa `if`?

`if` significa **"se"**.

Ele permite dizer ao programa:

> **Se determinada condição for verdadeira, execute este código.**
> 

Estrutura:

```jsx
if (condicao) {
  // código executado se a condição for verdadeira
}
```

# 📌 Exemplo simples

```jsx
const idade = 18

if (idade >= 18) {
  console.log("Pode entrar")
}
```

Nesse caso:

```
idade >= 18
```

é verdadeiro.

Então o programa executa:

```
Pode entrar
```

# 🔎 Como o `if` funciona?

Podemos imaginar:

```
             idade >= 18
                  ↓
          ┌───────┴───────┐
          ↓               ↓
      verdadeiro        falso
          ↓
    executa o código
```

Se a condição for verdadeira, o bloco do `if` será executado.

Se for falsa, ele será ignorado.

# 🧩 Exemplo com uma variável

```jsx
const estoque = 10

if (estoque > 0) {
  console.log("Produto disponível")
}
```

Como:

```
10 > 0
```

é verdadeiro, o programa apresenta:

```
Produto disponível
```

# 🚫 E quando a condição for falsa?

Observe:

```jsx
const estoque = 0

if (estoque > 0) {
  console.log("Produto disponível")
}
```

A condição:

```
0 > 0
```

é falsa.

Então nada será exibido pelo `if`.

Mas normalmente queremos que o programa também saiba o que fazer quando a condição for falsa.

Para isso utilizamos `else`.

# 🧩 O que é `else`?

`else` significa **"senão"**.

Podemos escrever:

```jsx
if (condicao) {
  // se for verdadeiro
} else {
  // se for falso
}
```

# 📌 Exemplo

```jsx
const estoque = 0

if (estoque > 0) {
  console.log("Produto disponível")
} else {
  console.log("Produto indisponível")
}
```

Como o estoque é `0`, a condição é falsa.

Resultado:

```
Produto indisponível
```

# 🔄 Fluxo do `if` e `else`

```
              condição
                  ↓
          ┌───────┴───────┐
          ↓               ↓
      verdadeira         falsa
          ↓               ↓
        IF              ELSE
          ↓               ↓
      Código 1         Código 2
```

**Somente um dos blocos será executado.**

# 🧩 Exemplo — Aprovação de aluno

Imagine um sistema escolar.

A regra é:

> O aluno será aprovado se sua média for maior ou igual a 6.
> 

Podemos escrever:

```jsx
const media = 8

if (media >= 6) {
  console.log("Aluno aprovado")
} else {
  console.log("Aluno reprovado")
}
```

Resultado:

```
Aluno aprovado
```

Se a média fosse:

```jsx
const media = 5
```

o resultado seria:

```
Aluno reprovado
```

# 📌 O bloco de código

Observe:

```jsx
if (media >= 6) {
  console.log("Aluno aprovado")
}
```

As chaves:

```jsx
{
}
```

delimitam o bloco de código que pertence ao `if`.

Da mesma forma:

```jsx
else {
  console.log("Aluno reprovado")
}
```

define o bloco pertencente ao `else`.

# 🧠 Condição verdadeira e falsa

Uma condição sempre produzirá um resultado lógico:

```
true
```

ou:

```
false
```

Por exemplo:

```jsx
10 > 5
```

produz:

```jsx
true
```

Enquanto:

```jsx
10 < 5
```

produz:

```jsx
false
```

Ainda veremos os operadores de comparação com mais detalhes na próxima aula.

# 🧩 Exemplo — Login

Imagine um sistema simples de acesso.

```jsx
const senha = "1234"

if (senha === "1234") {
  console.log("Acesso permitido")
} else {
  console.log("Acesso negado")
}
```

Resultado:

```
Acesso permitido
```

Aqui o programa está tomando uma decisão.

# 🧩 Exemplo — Estoque

```jsx
const quantidade = 5

if (quantidade > 0) {
  console.log("Produto disponível")
} else {
  console.log("Produto esgotado")
}
```

# ⚠️ Cuidado com a condição

Observe:

```jsx
const idade = 17

if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}
```

O programa não está comparando a variável com um texto.

Ele está verificando uma **condição**:

```
17 >= 18
```

Resultado:

```
false
```

Por isso executa o `else`.

Fim da aula!

_

# 🧩 Exercício Rápido

Uma loja precisa verificar se possui determinado produto disponível.

Crie:

```jsx
const estoque = 10
```

Se o estoque for maior que `0`, a variável `mensagem` deverá receber:

```
Produto disponível
```

Caso contrário:

```
Produto esgotado
```

Exporte a variável `mensagem` para que o testes funcionem e o GitHub Actions execute a correção.
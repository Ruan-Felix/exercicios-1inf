# 🎯 Aula 26 — MULTI-CONDICIONAIS COM OPERADORES LÓGICOS `&&`, `||` E `!`

# 🎯 Objetivos da Aula

* Compreender o conceito de múltiplas condições.
* Utilizar o operador lógico `&&`.
* Utilizar o operador lógico `||`.
* Utilizar o operador lógico `!`.
* Combinar operadores de comparação com operadores lógicos.
* Entender como o JavaScript avalia múltiplas condições.
* Aplicar operadores lógicos em situações reais.

# 🧩 O que são operadores lógicos?

Até agora, aprendemos a fazer comparações:

```jsx
const idade = 20

idade >= 18
```

O resultado será:

```jsx
true
```

Também podemos utilizar essa comparação dentro de um `if`:

```jsx
if (idade >= 18) {
  console.log("Acesso permitido")
}
```

Mas alguns sistemas precisam verificar **mais de uma condição**.

Por exemplo:

> Para entrar em determinado evento, a pessoa precisa ter 18 anos ou mais **e** possuir ingresso.

Temos duas condições:

```text
idade >= 18
possui ingresso
```

Precisamos combinar essas condições.

Para isso utilizamos os **operadores lógicos**.

# 🔗 Operador `&&` — E

O operador:

```jsx
&&
```

significa:

> **E**

Ele é utilizado quando **todas as condições precisam ser verdadeiras**.

Exemplo:

```jsx
const idade = 20
const possuiIngresso = true

if (idade >= 18 && possuiIngresso === true) {
  console.log("Entrada permitida")
}
```

Temos:

```text
idade >= 18
       E
possuiIngresso === true
```

As duas condições são verdadeiras.

Portanto:

```text
Entrada permitida
```

# 🧠 Como funciona o `&&`

Imagine:

```jsx
true && true
```

Resultado:

```jsx
true
```

Agora:

```jsx
true && false
```

Resultado:

```jsx
false
```

E:

```jsx
false && true
```

Resultado:

```jsx
false
```

Portanto:

> Com `&&`, todas as condições precisam ser verdadeiras.

# 📊 Tabela do `&&`

| Condição 1 | Condição 2 | Resultado |
| ---------- | ---------- | --------- |
| `true`     | `true`     | `true`    |
| `true`     | `false`    | `false`   |
| `false`    | `true`     | `false`   |
| `false`    | `false`    | `false`   |

Podemos pensar:

```text
&& → TODAS precisam ser verdadeiras
```

# 🔀 Operador `||` — OU

O operador:

```jsx
||
```

significa:

> **OU**

Ele é utilizado quando **pelo menos uma das condições precisa ser verdadeira**.

Exemplo:

```jsx
const cargo = "gerente"

if (cargo === "gerente" || cargo === "diretor") {
  console.log("Acesso administrativo")
}
```

Nesse caso, o funcionário pode ser:

```text
gerente
OU
diretor
```

Se qualquer uma das condições for verdadeira, o `if` será executado.

# 🧠 Como funciona o `||`

Observe:

```jsx
true || false
```

Resultado:

```jsx
true
```

Também:

```jsx
false || true
```

Resultado:

```jsx
true
```

Somente quando todas forem falsas:

```jsx
false || false
```

teremos:

```jsx
false
```

Portanto:

> Com `||`, basta uma condição ser verdadeira.

# 📊 Tabela do `||`

| Condição 1 | Condição 2 | Resultado |
| ---------- | ---------- | --------- |
| `true`     | `true`     | `true`    |
| `true`     | `false`    | `true`    |
| `false`    | `true`     | `true`    |
| `false`    | `false`    | `false`   |

Podemos pensar:

```text
|| → PELO MENOS UMA precisa ser verdadeira
```

# ❌ Operador `!` — NÃO

O operador:

```jsx
!
```

significa:

> **NÃO**

Ele inverte o resultado de uma condição.

Observe:

```jsx
!true
```

Resultado:

```jsx
false
```

E:

```jsx
!false
```

Resultado:

```jsx
true
```

# 🧩 Exemplo com `!`

Imagine que um usuário esteja bloqueado.

```jsx
const bloqueado = false

if (!bloqueado) {
  console.log("Usuário autorizado")
}
```

Temos:

```text
bloqueado = false
```

Então:

```text
!false
 ↓
true
```

O usuário poderá acessar.

# 🔄 Invertendo uma condição

Também podemos inverter comparações.

Observe:

```jsx
const idade = 20

if (!(idade < 18)) {
  console.log("Maior de idade")
}
```

A condição:

```jsx
idade < 18
```

é:

```text
false
```

Ao utilizar:

```jsx
!(idade < 18)
```

temos:

```text
!false
```

que resulta em:

```text
true
```

# 🧩 `&&`, `||` e `!` juntos

Podemos combinar os três operadores.

Exemplo:

```jsx
const idade = 20
const possuiIngresso = true
const bloqueado = false

if (idade >= 18 && possuiIngresso === true && !bloqueado) {
  console.log("Entrada permitida")
}
```

Para entrar, é necessário:

```text
idade >= 18
E
possuir ingresso
E
não estar bloqueado
```

Todas as condições precisam ser verdadeiras.

# 💼 Exemplo — Sistema de acesso

Imagine um sistema corporativo.

A empresa definiu:

> Um funcionário poderá acessar o sistema administrativo se for gerente ou diretor e estiver ativo.

```jsx
const cargo = "gerente"
const ativo = true

if (
  (cargo === "gerente" || cargo === "diretor") &&
  ativo === true
) {
  console.log("Acesso administrativo")
}
```

A regra pode ser lida assim:

```text
GERENTE OU DIRETOR
        E
      ATIVO
```

# 💼 Exemplo — Loja virtual

Uma loja permite finalizar uma compra quando:

* existe estoque suficiente;
* e a quantidade solicitada é maior que zero.

```jsx
const estoque = 10
const quantidade = 2

if (estoque >= quantidade && quantidade > 0) {
  console.log("Compra permitida")
}
```

# 🧠 Pensando como o computador

Observe:

```jsx
const estoque = 10
const quantidade = 2

if (estoque >= quantidade && quantidade > 0) {
  console.log("Compra permitida")
}
```

O computador verifica primeiro:

```text
10 >= 2
 ↓
true
```

Depois:

```text
2 > 0
 ↓
true
```

Então:

```text
true && true
       ↓
      true
       ↓
Executa o if
```

Resultado:

```text
Compra permitida
```

# ⚠️ `&&` não é a mesma coisa que `||`

Observe:

```jsx
idade >= 18 && idade <= 60
```

Significa:

> A idade precisa ser maior ou igual a 18 **E** menor ou igual a 60.

Já:

```jsx
idade < 18 || idade > 60
```

significa:

> A idade precisa ser menor que 18 **OU** maior que 60.

A escolha do operador depende da **regra que estamos tentando representar**.

# 🧠 Regra para lembrar

```text
&& → E
|| → OU
!  → NÃO
```

Ou:

```text
&& → todas
|| → pelo menos uma
!  → inverte
```

# 🧩 Exemplo — Sistema de matrícula

Uma escola definiu que um aluno poderá realizar determinada matrícula se:

* tiver 18 anos ou mais;
* e possuir documento.

```jsx
const idade = 20
const possuiDocumento = true

if (idade >= 18 && possuiDocumento === true) {
  console.log("Matrícula permitida")
}
```

# 🧩 Exemplo — Formas de pagamento

Uma loja aceita cartão ou PIX.

```jsx
const pagamento = "pix"

if (pagamento === "cartao" || pagamento === "pix") {
  console.log("Pagamento aceito")
}
```

# 🧩 Exemplo — Usuário bloqueado

```jsx
const bloqueado = false

if (!bloqueado) {
  console.log("Usuário liberado")
}
```

# 🧠 Dica para escrever condições

Antes de escrever o código, tente escrever a regra em português.

Por exemplo:

> O funcionário pode acessar se for gerente ou diretor e estiver ativo.

Depois identifique:

```text
gerente OU diretor
        E
      ativo
```

E somente então transforme isso em código.

Fim da aula!

# 🧩 Exercício Rápido

Uma empresa possui uma área administrativa em seu sistema.

Para acessar essa área, o usuário precisa:

* ter 18 anos ou mais;
* possuir cargo de `gerente`;
* estar ativo.

Utilize:

```jsx
const idade = 25
const cargo = "gerente"
const ativo = true
```

Se todas as condições forem atendidas, a variável `resultado` deverá receber:

```text
Acesso permitido
```

Caso contrário:

```text
Acesso negado
```

Utilize obrigatoriamente o operador:

```jsx
&&
```

Exporte a variável `resultado` para que os testes funcionem e o GitHub Actions execute a correção.
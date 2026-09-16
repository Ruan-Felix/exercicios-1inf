const mensagem = require("../index.js")

test("O produto deve estar disponível", () => {
  expect(mensagem).toBe("Produto disponível")
})
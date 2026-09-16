const resultado = require("../index.js") 
test("Usuário deve ter acesso administrativo", () => { 
    expect(resultado).toBe("Acesso permitido") 
})
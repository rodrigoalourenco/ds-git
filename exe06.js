/**
 * Crie um loop para exibir todas as chaves e valores 
 * do objeto usuario. 
 * const usuario = { 
 *      id: 1, 
 *      nome: "Carlos", 
 *      cargo: "Dev" 
 * };
 */

const usuario = {
  id: 1,
  nome: "Carlos",
  cargo: "Dev"
};

for (let chave in usuario) {
  console.log(`${chave}: ${usuario[chave]}`);
}
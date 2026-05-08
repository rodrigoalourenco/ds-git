(async () => {
    const database = require('./db');
    const Produto = require('./models/produto');
    const Fabricante = require('./models/fabricante');
    const Categoria = require('./models/categoria');

    await database.sync({force: true});//
    
    const novoFabricante = await Fabricante.create({
        nome: "Apple"
    });
    console.log(novoFabricante);

    const novoProduto = await Produto.create({
        nome: "MacBook Pro",
        preco: 15000,
        descricao: "Notebooc da Apple",
        idFabricante: novoFabricante.id
    });
    console.log(novoProduto);
    
    

    
   /** 1:1 */
   // Lazy Loading
   const produtosLazyLoading = await Produto.findByPk(1);
   const fabricante1to1 = await produtosLazyLoading.getFabricante();
   console.log(fabricante1to1.nome);

   // Eager Loading
   const produtosEagerLoading = await Produto.findByPk(1, {include: Fabricante})
   console.log(produtosEagerLoading.fabricante.nome);

   /** 1:N */
   const fabricante1toN = await Fabricante.findByPk(1, {include: Produto})
   console.log(fabricante1toN.produtos)

   /** N:M */
   const novaCategoria = await Categoria.create({
        nome: "Informatica"
    });
    const produto = await Produto.findByPk(1);
    await produto.setCategoria(novaCategoria);

    const produtoNtoM = await Produto.findByPk(1, {include: Categoria});
    console.log(produtoNtoM.categoria);



    

})();
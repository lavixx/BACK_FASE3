const express = require ('express');
const app = express();


app.listen(3000,()=>{
console.log("Servidor no ar")
});

const clientes= [
    {id:1,nome:'Adamastor',fone:'111',email:'ada@gmail.com'},
    {id:2,nome:'Bernadete',fone:'222',email:'berna@gmail.com'},
    {id:3,nome:'Deusdeti',fone:'333',email:'deu@gmail.com'},
    {id:4,nome:'Emengarda',fone:'444',email:'eme@gmail.com'},
    {id:5,nome:'Clementina',fone:'555',email:'cleme@gmail.com'},
    {id:6,nome:'Itapior',fone:'666',email:'ita@gmail.com'},
];

//rotas
app.get('/',(req,res)=>{
    res.send("Seja benvindo à nossa API de clientes")

})


//rota que apresenta o total de clientes
app.get('/total_clientes',(req,res)=>{
    res.send('Total de clientes: '+clientes.length)
})

//rotas para apresentar da 
app.get('/clientes/:id,', (req, res)=>{
const cliente = clientes.find(c=>cliente.id===parseInt(req.params.id))

//não acha cliente
if (!cliente){
    res.status(404).send("Clientes não encontrado!!")
}
res.send(` O clinte é: ${cliente.nome}, telefone: ${cliente.telefone}, email ${cliente.email}`);
})
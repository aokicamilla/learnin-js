const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

   //usando o object.create nós criamos uma cópia do primeiro objeto sem alterar o original
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Saruman"
    
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Saruman
   
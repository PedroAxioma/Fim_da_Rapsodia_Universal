let seuNome = ""; // Variável para armazenar o texto digitado
if(seuNome === ""){
    seuNome = "Anjo"
    console.log(seuNome);  // Exibe o valor na variável no console
}
else{
    document.getElementById("seuNomeInput").addEventListener("input", function(event){
    nome = event.target.value; 
    console.log(nome);  // Atualiza a variável 'nome' com o texto digitado
});}

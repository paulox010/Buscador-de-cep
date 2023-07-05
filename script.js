const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const cep=form.CEP.value
    console.log(cep)
    $.ajax({
        url: `http://viacep.com.br/ws/${cep}/json/`, success: function (result){
            console.log(result.logradouro);
       
  

    const end=document.createElement('p')
    const bairro=document.createElement('p')
    const cidade=document.createElement('p')
    const estado=document.createElement('p')
    form.append(end)
    form.append(bairro)
    form.append(cidade)
    form.append(estado)
    end.innerHTML=(`Endereço: ${result.logradouro} 761`)
    bairro.innerHTML=(`Bairro: ${result.bairro}`)
    cidade.innerHTML=(`Cidade: ${result.localidade}`)
    estado.innerHTML=(`Estado: ${result.uf}`)
    
          }  
     });
})
const formConsultarCep = document.querySelector('#ConsultarCep')
const inputCep = formConsultarCep.cep 
const divDados = document.querySelector('#dados')

formConsultarCep.addEventListener('submit', function(event){
  event.preventDefault() //anula comportamento de envio do form
consultarCep(inputCep.value)
})

async function consultarCep(cep){
let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
let dadosCep = await response.json()
divDados.innerHTML = `
<p> Endereço: ${dadosCep.logradouro} </p>
<p>Localildade: ${dadosCep.localidade} </p>
`
}

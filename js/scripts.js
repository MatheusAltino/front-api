var form = document.getElementById('form')

form.addEventListener('submit', function(event){
  event.preventDefault()

  //pegando dados no form
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
      

  //função que envia a requisição http
  async function postData(url = '', data = { }) {
    const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });
    return response.json();
  }

  // Execução da função postData
  postData('http://localhost:3333/user/register', { name, email })
  .then(data => {
    document.getElementById("response").innerHTML = "Seu idUser é: "+JSON.stringify(data.id)
  })
})



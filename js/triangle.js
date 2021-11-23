var form = document.getElementById('form-triangle')

form.addEventListener('submit', function(event){
  event.preventDefault()

  //pegando os dados no form
  var idUser = document.getElementById('idUser').value
  var cateto1 = document.getElementById('cateto1').value
  var cateto2 = document.getElementById('cateto2').value

  // função que envia a requisição http
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
  postData('http://localhost:3333/triangle/create', { idUser, cateto1, cateto2 })
    .then(data => {
      document.getElementById("triangle").innerHTML = "Sua hipotenusa é: "+JSON.stringify(data.hipotenusa)
  })
})
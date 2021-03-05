
//

fetch("http://localhost:5000/local-govt", {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(res => res.json())
  .then(data => {

    console.log(data)

  })
function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( console.log )
}

fetchData()
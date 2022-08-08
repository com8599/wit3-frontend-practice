let getUsers = (names)=>{
  let users = []
  for (let name of names){
   fetch(`https://api.github.com/users/${name}`).then(response => {
      if(response.status !=200){
        users.push(null);
        return null;
      }
      else{
        let user = response.json();
        user.then(data=>users.push(data));
      }
    })
      }
  return users;
}
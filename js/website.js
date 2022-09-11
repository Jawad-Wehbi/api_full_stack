fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    var src = data.message;
    document.getElementById("img").src=src
  });
function predictName(){
    var name=document.getElementById('Name').value
           var age=document.getElementById('age')
           var gender=document.getElementById('gender')
         fetch('https://api.agify.io?name='+name)
         .then(function(response){return response.json();})
         .then(data => {
             if (name != '') {
                age.innerHTML = "I guess &#129300 your age is " + data.age;
                age.style.display = 'block';
                 console.log(data.age);
             }else{
                age.style.display = 'none'; 
             }


         })
         .catch(err => console.log(err));

         fetch('https://api.genderize.io/?name='+name)

         .then(function(response){return response.json();})
         .then(data => {
             if (name != '') {
                gender.innerHTML += "I guess &#129300 your gender is " + data.gender;
                gender.style.display = 'block';
                 console.log(data.age);
             }else{
                gender.style.display = 'none'; 
             }


         })
         .catch(err => console.log(err));
     }

 function checkName(){
     let name = nameInput.value;
     if (name == '') {
        output.style.display = 'none'; 
     }
}
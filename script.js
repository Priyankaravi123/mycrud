function Route(d){
     
   alert(d,"this is my data")
   location.assign("http://localhost/myCrud/index.html?")
   this.getData();
}
function RouteTosignin(){
    
    location.assign("http://localhost/myCrud/signin.html?")
}

function runCode(e){
    e.preventDefault();
    console.log(e.preventDefault(),"this is form data")
}


async function postData(url = "https://jsonplaceholder.typicode.com/posts", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});



function Route(){
   
    location.assign("http://localhost/myCrud/index.html?")
    this.postData();
 }
 function RouteTosignin(){
     
     location.assign("http://localhost/myCrud/signin.html?")
 }
 
 

// Get Method
 async function getData(url = "https://jsonplaceholder.typicode.com/posts") {
   const response = await fetch(url, {
     method: "GET",  
     mode: "cors",  
     cache: "no-cache",  
     credentials: "same-origin", 
     headers: {
       "Content-Type": "application/json",
     },
     redirect: "follow",  
     referrerPolicy: "no-referrer", 
   });
   return response.json();  
 }
 
 getData("https://jsonplaceholder.typicode.com/posts").then((data) => {
   console.log(data);  
 });
 
 
 



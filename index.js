const advicesomeone= document.querySelector(".adviceme")
const  fetchdata =()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data =>{
        data.forEach(element => {
            const par=document.createElement("div")
            par.classList.add("adviced")
            par.innerHTML=`<p>${element.slipped.slip.advice}</p>`
            console.log(par)
            advicesomeone.append(par)
        });
    })
}
fetchdata()
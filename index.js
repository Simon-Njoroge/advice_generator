const advicesomeone= document.querySelector(".adviceme")
const  fetchdata =()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data =>{
        data.forEach(element => {
            const par=document.createElement("div")
            par.classList.add("adviced")
            par.innerHTML=`<p>${element.slipped.slip.advice}</p>`
            const ima=document.createElement("div")
            ima.classList.add("imaged")
            ima.innerHTML=`<img src="./images/pattern-divider-desktop.svg" alt="">`
            console.log(par)
            setTimeout(()=>{
            advicesomeone.append(par)
            advicesomeone.append(ima)
        },2000)
        });
    })
}
fetchdata()
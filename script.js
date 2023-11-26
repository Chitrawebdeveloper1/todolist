
// document.getElementById("button").addEventListener("click",()=>{

// let a=document.getElementById("input").value
// let b=document.getElementById("h1")



// b.innerHTML=a
// })

// document.getElementById("btn2").addEventListener("click",()=>{
// let p=document.getElementById("o")
// console.log(p)
// let c=p.querySelector("h1")
// p.removeChild(c)
// })


const input_box=document.getElementById("input_box")

let button=document.getElementById("button")
let list_container=document.getElementById("list_container")
 

button.addEventListener("click",()=>{
    if(input_box.value === '')
    {
        alert("You must write somehting!");

    }
    else{
        let list=document.createElement("li")
        list.innerHTML=input_box.value
        list_container.appendChild(list)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        list.appendChild(span)
     

    }
    input_box.value= ''
    saveData()
})

list_container.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
      
 
},false)
function saveData(){
    localStorage.setItem("data",list_container.innerHTML)
}
function showData(){
    list_container.innerHTML=localStorage.getItem("data")
}

showData()
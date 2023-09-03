const hambergurMenu = document.querySelector(".hambergur-menu");
const navMenu = document.querySelector(".nav-menu");
const op = document.querySelector(".output");

hambergurMenu.addEventListener('click' , () => {
    hambergurMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click' , () => {
    hambergurMenu.classList.remove("active");
    navMenu.classList.remove("active");
}));


let btn = document.getElementById("shorten");
const output = document.querySelector(".output");
// const URl = "https://api.shrtco.de/v2/shorten?url=";


async function short(){
    try{
        let longURL = document.querySelector("#longurl").value;
        console.log(longURL);
        if(longURL === ""){
            alert("Link cannot be empty...");
        }
      
        const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
        // const result = await fetch(URL + longURL);
        const data = await result.json();

        
        console.log(data);
        op.classList.remove('show');
        if(data.error_code === 1 ){
            op.textContent("Error" , data.error);
            
        }
        let shortURL = document.createElement("div");
        let res = "";
        res = data.result.short_link2.toString();
        shortURL.innerHTML = `
        <div id="res">
        ${res}
        <div>
        <i class="fa-solid fa-copy fa-lg" style="color: #2acfcf; cursor:pointer" id="copy"></i>
        &nbsp
        <i class="fa-solid fa-x" style="color: #2acbcb; cursor:pointer" id="del"></i>
        </div>
       
       </div>`
       
        // shortURL.textContent = data.result.short_link2.toString();
       
        console.log(shortURL);
        op.appendChild(shortURL);
    }catch(e){
        op.textContent("Error" , e);
        console.log(e);
    }
   
}

btn.addEventListener('click', short);




let newURL = document.querySelector("#res");
let coptButton = document.querySelector("#copy");
console.log(coptButton);
coptButton.addEventListener('click' , () => {
    console.log('clicking');
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);

});


let del = document.querySelector("#del");
console.log(del);
del.addEventListener('click', () => {
    console.log("clicked del");
    const  e = document.querySelector("#res");
    e.remove();
   
});
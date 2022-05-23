// function append(){
    let data=JSON.parse(localStorage.getItem("products")) || [];

    let box= document.getElementById("all_products");

    box.innerHTML=null;

    data.forEach(function(el,index){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;

        img.setAttribute("id","img")
        let type=document.createElement("p");
        type.innerText=el.type;

        let desc=document.createElement("p");
        desc.innerText=el.desc;

        let price=document.createElement("p");
        price.innerText=el.price;

       let btn=document.createElement("button");
       btn.innerText="Remove";

       btn.addEventListener("click",function(){
           removeitem(index);
       });


        div.append(img,type,desc,price,btn);
        box.append(div);
    })
// }

// append();

function removeitem(index){


    console.log(index)
   data.splice(index,1);
   localStorage.setItem("products",JSON.stringify(data));
   window.location.reload();

}
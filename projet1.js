//calcule total
let title = document.getElementById('title');
let ref = document.getElementById('ref');
let color = document.getElementById('color');
let category = document.getElementById('category');
let quantite = document.getElementById('quantite');
let price = document.getElementById('price');
let creat = document.getElementById('creat');
let total = document.getElementById('total');
let mode='creat';

function calculetotal(){
  
   if (price.value !=''){
    let result= (price.value * quantite.value);
    total.innerHTML = result;
    total.style.background='#040';
   }else{
      total.innerHTML='00.00';
    

   }
  
}
//creat product
//save data
let  datapro;
if(localStorage.product !=null){
   datapro=JSON.parse(localStorage.product);
}else{
   datapro=[];
}


creat.onclick= function(){
   let newpro = {
      title:title.value,
      price:price.value,
      ref:ref.value,
      color:color.value,
      category:category.value,
      quantite:quantite.value,
      total:total.innerHTML,

   }
   if (mode =='creat'){
   datapro.push(newpro);
   localStorage.setItem('product',JSON.stringify(datapro));
   }else{
   datapro[index]=newpro;
    mode='creat';
    creat.innerHTML='creat';
}
   cleardata();
   seedata();
   
}


//clear input
function cleardata(){
   title.value='';
   ref.value='';
   color.value='';
   category.value='';
   quantite.value='';
   price.value='';
   total.innerHTML='';
}
//read
function seedata(){
   let table='';
   for( let i=0;i< datapro.length;i++){
     
            table +=`
            <tr>
            
            <th>${datapro[i].title}</th>
            <th>${datapro[i].ref}</th>
            <th>${datapro[i].color}</th>
            <th>${datapro[i].category}</th>
            <th>${datapro[i].quantite}</th>
            <th>${datapro[i].price}</th>
            <th>${datapro[i].price * datapro[i].quantite}</th>
            <th><button onclick="update(${i})" id="update">update</button></th>
            <th><button onclick="deletedata(${i})" id="delete">delete</button></th>
        </tr>`;
   }
   document.getElementById('tbody').innerHTML=table;
 


   calctotal()
}
seedata();
//delete
function deletedata(i){
 datapro.splice(i,1);
 localStorage.product = JSON.stringify(datapro);
 seedata();
 calctotal()
}
//update
function update(i){
   title.value = datapro[i].title;
   ref.value = datapro[i].ref;
   color.value = datapro[i].color;
   category.value = datapro[i].category;
   quantite.value = datapro[i].quantite;
   price.value = datapro[i].price;
   calculetotal()
   creat.innerHTML='update';
   mode='update';
   index=i;
   scroll({
      top:0 ,
      behavior:"smooth",
   })
   
   calctotal() 
}
//searchtitle
let sear=document.getElementById('search');

function searchtit(){
   let table=''
   for(let i=0;i< datapro.length;i++){
   if(datapro[i].title.includes(sear.value)){
      table +=`
            <tr>
            <th>${i+1}</th>
            <th>${datapro[i].title}</th>
            <th>${datapro[i].ref}</th>
            <th>${datapro[i].color}</th>
            <th>${datapro[i].category}</th>
            <th>${datapro[i].quantite}</th>
            <th>${datapro[i].price}</th>
            <th><button onclick="update(${i})" id="update">update</button></th>
            <th><button onclick="deletedata(${i})" id="delete">delete</button></th>
        </tr>`;

   }
   document.getElementById('tbody').innerHTML=table;

   
}
   
}
//search categori
function searchcat(){
   let table=''
   for(let i=0;i< datapro.length;i++){
   if(datapro[i].category.includes(sear.value)){
      table +=`
            <tr>
            <th>${i+1}</th>
            <th>${datapro[i].title}</th>
            <th>${datapro[i].ref}</th>
            <th>${datapro[i].color}</th>
            <th>${datapro[i].category}</th>
            <th>${datapro[i].quantite}</th>
            <th>${datapro[i].price}</th>
            <th><button onclick="update(${i})" id="update">update</button></th>
            <th><button onclick="deletedata(${i})" id="delete">delete</button></th>
        </tr>`;

   }
   document.getElementById('tbody').innerHTML=table;
 
}
}
seedata();
function romove(){
   let sear=document.getElementById('search');
   sear.value='';
   seedata();

}
function calctotal(){
   let totl=0;
   for(let i=0;i< datapro.length;i++){
      totl= (datapro[i].price * datapro[i].quantite) +totl;
     
     
   }
   
     let totlprice = document.getElementById('totlprice');
     totlprice.innerHTML= totl;

}
calctotal()
//clean data


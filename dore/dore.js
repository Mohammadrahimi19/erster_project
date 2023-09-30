const mainleft= document.getElementById('main-left');
const mainright= document.getElementById('main-right');
const hamberger= document.getElementById('hamberger-close');
const hamberger2= document.getElementById('hamberger');
const li = document.getElementsByClassName('item');
const line = document.getElementById('line');

hamberger2.addEventListener('click',Open);
hamberger.addEventListener('click',Close);

function Close(){
mainright.style.width='0%';
mainright.style.opacity='0';
mainleft.style.opacity=1;
}
function Open(){
    mainright.style.width='60%';
    mainright.style.opacity='1';
    hamberger.style.display='block';
    mainleft.style.opacity=0.5;
  }

console.log("${n}sss");

li[0].addEventListener('mouseenter',Ry);
function Ry(){
  var left=li[0].offsetLeft-25;
  line.style.left=left+'px';
  line.style.display='block';
}

li[1].addEventListener('mouseenter',Ry1);
function Ry1(){

  var left=li[1].offsetLeft-20;
  line.offsetLeft=li[1].offsetLeft;
  line.style.left=left+'px';
  line.style.display='block';

}

li[2].addEventListener('mouseenter',Ry2);
function Ry2(){

  var left=li[2].offsetLeft-20;
  line.offsetLeft=li[2].offsetLeft;
  line.style.left=left+'px';
  line.style.display='block';

}
li[3].addEventListener('mouseenter',Ry3);
function Ry3(){

  var left=li[3].offsetLeft-20;
  line.offsetLeft=li[3].offsetLeft;
  line.style.left=left+'px';
  line.style.display='block';

}
li[4].addEventListener('mouseenter',Ry4);
function Ry4(){

  var left=li[4].offsetLeft-20;
  line.offsetLeft=li[4].offsetLeft;
  line.style.left=left+'px';
  line.style.display='block';

}





if(window.innerWidth<=740){
   
   const card1 = document.getElementById('card1');
   const test = document.getElementById('test-group');
   const btn = document.createElement('button');
   const logo = document.createElement('img');
   const div1 = document.createElement('div');
   const div2 = document.createElement('div');//creat and give elemnt//
   const saerch = document.createElement('input');
   div2.appendChild(logo);
   div2.appendChild(hamberger);
   mainright.appendChild(div1);
   div1.appendChild(card1);
   mainright.appendChild(div2);
   card1.appendChild(saerch);
   card1.appendChild(btn);
   /////////////add element//////////////////

  logo.src="../logo green.png";
  saerch.type='search';
  saerch.placeholder='جست وجوی دوره...';
  saerch.id='search';
  saerch.style.borderRadius='10px';
  saerch.style.borderStyle='none';
  saerch.style.direction='rtl';
  saerch.style.backgroundColor='#9FE1C8';
  saerch.style.padding='8px';
  saerch.style.marginBottom='8px';
  saerch.style.outline='none';

  btn.style.width='30px';
  btn.style.height='30px';
  btn.style.backgroundImage='url("../search.png")';
  btn.style.backgroundSize='cover';
  btn.style.borderStyle='none';
  btn.style.position='absolute';
  btn.style.backgroundColor='#9FE1C8';
  btn.style.top='74%';
  btn.style.left='5px';

  card1.style.backgroundColor="rgb(208, 242, 227";
  card1.style.borderRadius="5px";
  card1.style.marginTop="5px";
  card1.style.color="#46A194";
  card1.style.textShadow="none";
  card1.style.padding="5px";
  card1.style.marginBottom="5px";
  
  
  mainright.style.display='flex';
  mainright.style.flexDirection='column-reverse';
  mainright.style.justifyContent='flex-end'///////////main-right////

  div2.id='div2';
  div2.style.display='flex';
  div2.style.height='50px';
  div2.style.alignItems='center';
  div2.style.backgroundColor='#d0f2e3';
  div2.style.borderRadius='5px';
  div2.style.marginTop='20px';////////////////////////////div2////////////////////

   


}
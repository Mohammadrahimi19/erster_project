const mainleft= document.getElementById('main-left');
const dis = document.getElementById('disable')
const mainright= document.getElementById('menu');
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
dis.style.display='none';
}
function Open(){
    mainright.style.width='60%';
    mainright.style.opacity='1';
    hamberger.style.display='block';
    mainleft.style.opacity=0.5;
    dis.style.display='block';
    dis.style.height=`${screen.height}px`;
}







if(window.innerWidth <= 740){

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
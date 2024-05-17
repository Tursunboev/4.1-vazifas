

1-misol
let L=+prompt ("Uzunlikni smlarda kiriting");
let m=L/100;
console.log(Math.trunc(m))
2-misol
let T=+prompt ("Og'irligini kilogramda kiriting");
let k=T/1000;
console.log(Math.trunc(k));
3-misol
let Kb=+prompt ("hajmni baytlarda kiriting");
let m=Kb/1024;
console.log(Math.trunc(m));
4-misol
let A=+prompt("musbat kattan sonlar");
let B=+prompt("musbat kichik sonlar");
let j=A/B;
console.log(Math.trunc(j));
5-misol
let A=+prompt("musbat kattan sonlar");
let B=+prompt("musbat kichik sonlar");
let j=A%B;
console.log(j); 
6-misol
let number=+prompt("onliklar xonalsi");
let birlik= number%10;
let onlik=  Math.floor(number/10);
console.log(onlik,birlik);
7-misol
let b=+prompt("sonalarni birinchi xonalari");
let i=+prompt("sonlarni ikkinchi xonalari");
let n=document.write(parseInt(b+i))
console.log(n);
8-misol
let number=+prompt("onliklar xonalsi");
let birlik= number%10;
let onlik=  Math.floor(number/10);
console.log(birlik,onlik);
9-misol
let number=+prompt("yuzliklar xonasi");
let onlik=  number%10;
let yuzliklar=Math.floor(number/100) 
console.log(yuzliklar);
10-misol
let number=+prompt("yuzliklar xonalsi");
let units= number%10;
let tens=(Math.floor(number/10))%10;
let hundreds=Math.floor(number/100);
console.log(units,tens);
11-misol
let hundreds=+prompt("yuzliklar");
let tens=+prompt("onliklar");
let units=+prompt("birliklar");
let result=document.write(Math.trunc(hundreds+tens+units));
console.log(result);
12-misol
let number=+prompt("yuzliklar xonalsi");
let units= number%10;
let tens=(Math.floor(number/10))%10;
let hundreds=Math.floor(number/100);
console.log(units,tens,hundreds);
13-misol
let number=+prompt("yuzliklar xonalsi");
let units= number%10;
let tens=(Math.floor(number/10))%10;
let hundreds=Math.floor(number/100);
console.log(tens,units,hundreds);

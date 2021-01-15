var b1, b2;

function setup() {
  createCanvas(500,400);
  xPosition=500;
  b1=new Building();
  b1.position=4;
  b1.floors=33;
  
  b2=new Building();
  b2.position=1;
  b2.floors=24;

  b3=new Building();
  b3.position=5;
  b3.floors=40;
  
  b4=new Building();
  b4.position=2;
  b4.floors=27;
  
  b5=new Building();
  b5.position=3;
  b5.floors=35;
  
  b6=new Building();
  b6.position=6;
  b6.floors=49;

  b7=new Building();
  b7.position=7;
  b7.floors=45;
  
  b8=new Building();
  b8.position=8;
  b8.floors=30;
  
  b9=new Building();
  b9.position=9;
  b9.floors=32;
  
  b10=new Building();
  b10.position=10;
  b10.floors=45;
  
  
}
  
    

function draw() {
  background(0);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  
}

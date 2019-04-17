// piggy banksss
/* all parameters to consider
1. four banks
2. interlinked
3.all four banks shld store last 10 transactions
4.total 10 deposits==50 pts
5.after 20 deposits , if avg amt >give 50 pts
6.for all piggy if balance is less than 100 display warning
7.aftr every mnth banks removes x amt as service charge from all the banks...

*/


var cb1=0,cb2=0,cb3=0,cb4=0,pb1=0,pb2=0,pb3=0,pb4=0,c1=0,c11=0,c2=0,c22=0,c33=0,c3=0,c44=0,c4=0,i1=0,i2=0,i3=0,i4=0,l1,l2,l3,l4;j1=0,j2=0,j3=0,j4=0,j11=0,j22=0,j33=0,j44=0,pt1=0,pt2=0,pt3=0,pt4=0;
var a1=[];a2=[];a3=[];a4=[],de1=[],de2=[],de3=[],de4=[],wi1=[],wi2=[],wi3=[],wi4=[];



 console.log("Welcome Welcome Welcome!!!!1");
 console.log("-----------------------------");




// PIGGY 1
function p1()
{
console.log("Current Balance for p1::"+cb1);
console.log("Last transaction in p1::"+l1);
}

function lasttran1()
{
    console.log("last trasactions of p1 are::");
    
        console.log(a1); 
        console.log("------------------------------------");  
    
}

// deposits of p1
function d1(a)
{
    if(a>0)
    {
    cb1=pb1+a;
    if(cb1>20000)
    {
        var t1=cb1-10000;
        cb1=cb1-t1;
         d2(t1);
      
    }
    l1=cb1-pb1;
    a1[i1]=l1;
    de1[j1]=l1;
    j1++;
    i1++;
    pb1=cb1;
    c1++;
    
    }
    else
    {
        console.log("Invalid!!");
    }
}

// withdraw of p1
function w1(a)
{
    if(pb1>a && a>0)
    {
        cb1=pb1-a;

        l1=cb1-pb1
        a1[i1]=l1;
        i1++;
        pb1=cb1;
        c11++;
    }
    else
    {
        console.log("Insufficient amt");
    }
}


// code to add bonus
function points()
{

if(c1>=50)
{
    var avg=0;
    for(var k=c1-1;k>=c1-50;k--)
    {
       avg=avg+de1[k];
        
    }
    avg=avg/50;
    console.log(avg);
    if(avg>=100)
    {
       pt1=pt1+50;
        
    }
   if(c1>=100)
   {
    pt1=pt1+50;
     
   }
}

}

// PIGGY 2
function p2()
{
console.log("Current Balance for p2::"+cb2);
console.log("Last transaction in p2::"+l2);
}

function lasttran2()
{
    console.log("last trasactions of p2 are::");
    
        console.log(a2);
        console.log("----------------------------------");   
    
}

// deposits of p2
function d2(a)
{
    if(a>0)
    {
        
    cb2=pb2+a;
    if(cb2>20000)
    {
        var t2=cb2-20000;
        cb2=cb2-t2;
         d3(t2);
      
    }
    l2=cb2-pb2;
    a2[i2]=l2;
    i2++;
    d2[j2]=l2;
    j2++;
    pb2=cb2;
    c2++;
    
    }
    else
    {
        console.log("Invalid!!");
    }
}

// withdraw of p2
function w2(a)
{
    if(pb2>a && a>0)
    {
        cb2=pb2-a;
        l2=cb2-pb2;
        a2[i2]=l2;
        i2++;
        pb1=cb1;
        c22++;
    }
    else
    {
        console.log("Insufficient amt");
    }
}





// PIGGY 3
function p3()
{
console.log("Current Balance for p3::"+cb3);
console.log("Last transaction in p3::"+l3);
}

function lasttran3()
{
    console.log("last trasactions of p3 are::");
    
        console.log(a3);
        console.log("----------------------------------");   
    
}

// deposits of p3
function d3(a)
{
    if(a>0)
    {
    cb3=pb3+a;
    if(cb3>30000)
    {
        var t3=cb3-30000;
        cb3=cb3-t3;
         d4(t3);
      
    }
    l3=cb3-pb3;
    a3[i3]=l3;
    i3++;
    d3[j3]=l3;
    j3++;
    pb3=cb3;
    c3++;
    
    }
    else
    {
        console.log("Invalid!!");
    }
}

// withdraw of p3
function w3(a)
{
    if(pb3>a && a>0)
    {
        cb3=pb3-a;
        l3=cb3-pb3;
        a3[i3]=l3;
        i3++;
        d4[j4]=l4;
        j4++;
        pb3=cb3;
        c33++;
    }
    else
    {
        console.log("Insufficient amt");
    }
}



// PIGGY 4
function p4()
{
console.log("Current Balance for p4::"+cb4);
console.log("Last transaction in p4::"+l4);
}

function lasttran4()
{
    console.log("last trasactions of p4 are::");
    
        console.log(a4);
        console.log("----------------------------------");   
    
}

// deposits of p4
function d4(a)
{
    if(a>0)
    {
    cb4=pb4+a;
    l4=cb4-pb4;
    a4[i4]=l4;
    i4++;
    pb4=cb4;
    c4++;
    
    }
    else
    {
        console.log("Invalid!!");
    }
}

// withdraw of p4
function w4(a)
{
    if(pb4>a && a>0)
    {
        cb4=pb4-a;
        l4=cb4-pb4;
        a4[i4]=l4;
        i4++;
        pb4=cb4;
        c44++;
    }
    else
    {
        console.log("Insufficient amt");
    }
}





//calls


/*
d1(400);
d1(300);
d1(200);
d1(100);
w1(100);
w1(200);
w1(50);
w1(100);
w1(50);
*/
for(i=0;i<100;i++)
{
d1(100);
}


points();
p1();
lasttran1();
console.log("Points::"+pt1)

/*

d2(50);
d2(50);
d2(500);
d2(50);
d2(50);
w2(10);
w2(20);
w2(20);
w2(20);
w2(30);

p2();
lasttran2();
/*

d3(500);
d3(1500);
d3(200);
d3(100);
d3(100);
w3(200);
w3(200);
w3(200);
w3(100);
w3(100);

p3();
lasttran3();




d4(500);
d4(500);
d4(1000);
d4(200);
d4(100);
w4(500);
w4(200);
w4(100);
w4(50);
w4(50);

p4();
lasttran4();


*/

const api_url = 
      "https://reqres.in/api/users";
 const ele =[];  
    
async function getapi() {
    
       const response = await fetch(api_url);
    
       var maindata = await response.json(); 
       var toAdd = document.createDocumentFragment();
     for(var i=0 ; i <11; i++)
        {
         const { id,first_name, email, employee_age, avatar} = maindata.data[i];
            let a = "employee_id_"+i;
            let b = "employee_name_"+i;
            let c = "employee_salary_"+i;
            let d = "employee_age_"+i;
            let e = "employee_image_"+i;
    document.getElementById(a).textContent = id;
    document.getElementById(b).textContent = first_name;
    document.getElementById(c).textContent = email;
    document.getElementById(d).textContent = employee_age;
    document.getElementById(e).src = avatar;
}
}

getapi();

$( function() {
                  
           $(" .block ").draggable({helper: 'clone'});
           $("#selection").droppable(
                {
                  accept:".block",
                  drop: function(ev,ui)
                  {
                    var a= $(ui.draggable);
                    $(this).append(a); 
                    let i = ui.draggable.attr("id");                     
                    var birds = document.getElementById(i).children;
                      
                    ele.push(document.getElementById(birds[1].id).innerText);
                    
                    ele.push(document.getElementById(birds[2].id).innerText);
                    
                   }
                });   
            $("#gallery").droppable(
                {
                  accept:".block",
                  drop: function(ev,ui)
                  {
                    var ln=ele.length;
                    var a= $(ui.draggable);
                    $(this).append(a); 
                    let i = ui.draggable.attr("id");                     
                    var birds = document.getElementById(i).children;
                     for(var j=0 ; j<=ln-2 ;j++)
                         { 
                           if(ele[j]==(document.getElementById(birds[1].id).innerText) && j+2!=ln)
                              {
                                let temp1=ele[j];
                                let temp2=ele[j+1];
                                for(var k=j ; k<=ln ; k++)
                                     {
                                       ele[k]=ele[k+2];
                                     }
                              }
                         }
                         ele.pop();
                         ele.pop();
                   }
                });

      });

function Showele()
        {
        alert("Dropped data : "+ele);
         }

function request(){
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("third").style.display = "none";
    document.querySelector('.num.f').style.backgroundColor = 'green';
    document.querySelector('.num.s').style.backgroundColor = '#ff3333';
}
function complete(){
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
    document.querySelector('.num.f').style.backgroundColor = 'green';
    document.querySelector('.num.s').style.backgroundColor = 'green';
    document.querySelector('.num.t').style.backgroundColor = 'green';
}

function show(id) {
    //display the section of the form
    var main = document.getElementById('mainForm').children;

    for (var i = 0; i < main.length; i++) {
        main[i].style.display = 'none';
    }
    var el = document.getElementById(id);
    el.style.display = 'grid';
    

    
    //togling the class
    var buttons = document.getElementById('buttons').children;
    for(var i = 0 ; i<buttons.length ; i++){
        buttons.item(i);
        buttons.item(i).className = 'hover';
    }
document.getElementById(id+'Button').className = ' hover button-active';
};



//changing the submitted template
var submittedTemplate;
var templates= document.querySelectorAll('.template');
templates.forEach(function(el) {
    el.addEventListener('click', function() {
    submittedTemplate =el.getAttribute('for');
    })
});

//adding the field
function addField(className) {
var edu = document.querySelector('.'+className);
var eduCopy = edu.cloneNode(true);
    eduCopy.querySelectorAll('INPUT, TEXTAREA').forEach(function(el){
        el.value = '';
    });
    edu.parentElement.appendChild(eduCopy);
}
//remove the field
function removeField (el) {
    el.parentElement.remove();
    
}



//on submiting the form
function submit () {
    if (!submittedTemplate){
        alert('Please select a template to continue..');
        return;
    }
    var obj = {};
    obj.template = submittedTemplate;
    obj.colors = {};  
    
    var colors = document.querySelectorAll('.color');
    colors.forEach(function (color) {
        obj.colors[color.id] = color.value;
    });

    

    //geting the text information
    var form = document.getElementById('mainForm');
    var inputs = form.getElementsByClassName('inputs');

    for (var i = 0; i < inputs.length; i++) {
        
    //let the value of the work, edu keys be array and push objects into it
    if(inputs[i].id === 'work'|| inputs[i].id === 'education'){
        
    var className = inputs[i].getElementsByTagName('span')[1].className;
        console.log(className);
        obj[inputs[i].id] = [];
    inputs[i].querySelectorAll('.'+className).forEach(function(el) {
        var toPush = {};
        el.querySelectorAll('.value').forEach(function(val){
            toPush[val.name] = val.value.trim().length > 0 ? val.value:null;
        });
            obj[inputs[i].id].push(toPush);
            });
            
        }else{
            
        var subInputs = inputs[i].getElementsByClassName('value');
        obj[inputs[i].id] = {};
        for (var j = 0; j < subInputs.length; j++) {
            var title = inputs[i].id;
            
            obj[title][subInputs[j].name] = subInputs[j].value;
        }
        }
    }
    form.reset();
    console.log(obj);
    localStorage.setItem('cvInfo',JSON.stringify(obj));
  window.location = window.location.href.replace(/\bindex.html\b/,obj.template+'.html' );
};






//upload profile Picture 

function upload(input){
    console.log(input.files);
    var reader = new FileReader();
    reader.onload = function (e) {
        localStorage.setItem('profile_pic',e.target.result);
    }
//    reader.onloadend
    reader.readAsDataURL(input.files[0]);
    
}














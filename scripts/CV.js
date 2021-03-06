//(info.basic);
var info = JSON.parse(localStorage.getItem('cvInfo'));
function render (parent, target, value1, value2) {
    //check if the caller user the fourth argument
    //in case of multiple sections (array)
    if(value2){
        //check if there is any work experience
        if(value2.length===1 && !value2[0].startDate){
        var el = document.querySelector('.'+parent);
            el.parentElement.remove();
            return;
        }
            //make a copy of editted div and after that 
            //remove it
            var el = document.querySelector('.'+parent);
            var copy = el.cloneNode(true);
        el.remove();
      //looping throw the the multiple sections
        value2.forEach(function(index){
            var newCopy =  copy.cloneNode(true);
              //looping throw the keys of 2nd argument
            target.forEach(function(key) {
                var node = document.createTextNode(index[key]);
                newCopy.querySelector('.'+key).appendChild(node);
            })    
        document.querySelector('#'+parent+'section').appendChild(newCopy);
        });
        return;
    };
    //render using only 1st 2nd and third parameters
    //no arrays included

var value = document.createTextNode(value1);
document
.querySelector('.'+parent)
.querySelector('.'+target)
.appendChild(value);
}

//loading the picture from he local storage
function loadPicture(){
    try{
    var img = localStorage.getItem('profile_pic');
    document.getElementById('profile_picture').style.backgroundImage = 'url('+img+')';
    }catch(e){
        return; 
    }
}
loadPicture();

//============================================================

//rendering the basic information
render('basic','email',info.basic.email);
render('name-par','name-text',info.basic.fullName);
render('basic','phone',info.basic.phone);
render('basic','website',info.basic.website);
render('basic','address',info.basic.address);
//rendering the Interests section
render('interests', 'info', info.interests.info);
render('personal', 'info', info.personal.info);
//rendering the skills section
render('skills','info',info.skills.info);
//rendering the work information && education
var workSections = ['company','endDate','info','startDate','title'];
var eduSections= ['course','endDate','info','inistitution','startDate'];

render('work',workSections,undefined,info.work);
render('education',eduSections,undefined,info.education)


//saving the pdf using an API online
function savePDF(html) {
       
       req = new XMLHttpRequest();
  
       var url = "http://api.html2pdfrocket.com/pdf";
       var apiKey = "06eec23c-5763-481b-b3d2-06e5867d2dcf";
 
       // Additional parameters can be added here
       var data = "apikey=" + apiKey + "&value=" + encodeURIComponent(html);
  
       req.onload = function(event) {
              reader = new FileReader();
              
              reader.addEventListener("loadend", function() {
                  
                     // return data URI
                  var dowladLink = document.getElementById('dowladLink');
                  dowladLink.href = reader.result;
                  dowladLink.click();
                     
              });
              reader.readAsDataURL(req.response);
       };
       req.open("POST", url, true);
       req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       req.responseType = "blob";
       req.send(data);
}

var html = document.documentElement.innerHTML;
var pdf = savePDF(html);







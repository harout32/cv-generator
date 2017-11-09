//console.log(info.basic);
var info = JSON.parse(localStorage.getItem('cvInfo'));
console.log(info)
function render (parent, target, value1, value2) { 
if(value1){
var value = document.createTextNode(value1);
document
.querySelector('.'+parent)
.querySelector('.'+target)
.appendChild(value);
console.log(value);
    return;
}
    document.querySelector('.'+parent).querySelector('.'+target).remove();
    
//    document.querySelector('.'+parent).removeChildren(el);
    

}


//rendering the basic information
render('basic','email',info.basic.email);
render('main','title',info.basic.fullName);
render('basic','phone',info.basic.phone);
render('basic','website',info.basic.website);
render('basic','address',info.basic.address);

//rendering the work information

render('work','company',info.work.company);
render('work','startDate',info.work.startDate);
render('work','endDate',info.work.endDate);
render('work','job_title',info.work.title);
render('work','info',info.work.info);

//rendring the qualifications section
render('qualifications','info',info.qualifications.info);

//rendering education section 
render('education','course',info.education.course);
render('education','startDate',info.education.startDate);
render('education','endDate',info.education.endDate);
render('education','inistitution',info.education.inistitution);
render('education','info',info.education.info);

//rendering the Interests section
render('interests', 'info', info.interests.info);

//rendering the skills section

render('skills','info',info.skills.info)


//console.log(document.getElementsByClassName('basic'));
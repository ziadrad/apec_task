var Stepbar = document.getElementById('Stepbar');

// Function to to make labels dynamic

function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = ``;
    var optionArray = ["|","1st Year|1st Year","2nd Year|2nd Year","3rd Year|3rd Year","4th Year|4th Year"];
	if(s1.value == "Engineering"){
		 optionArray = ["|","1st Year|1st Year","2nd Year|2nd Year","3rd Year|3rd Year","4th Year|4th Year","5th Year|5th Year"];
	} else if(s1.value == "Medicine"){
         optionArray = ["|","1st Year|1st Year","2nd Year|2nd Year","3rd Year|3rd Year","4th Year|4th Year","5th Year|5th Year","6th Year|6th Year","7th Year|7th Year"];
	} else if(s1.value == "computer science"){
		 optionArray = ["|","1st Year|1st Year","2nd Year|2nd Year","3rd Year|3rd Year","4th Year|4th Year"];
	}
    else if(s1.value == ''){
       
    }
    
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
};

// Function to for next button 

function Next_btn(id,elem){
    // get parent id of button parent (step)
  var  parent_id = elem.parentNode.parentNode.id;
switch (parent_id) {
    case 'step 1':
        document.getElementById("emailHelp").classList.add('d-none')
        document.getElementById("NameHelp").classList.add('d-none')
     document.getElementById('step 2').classList.remove('d-none')
   Stepbar.children[0].classList.remove('active')
   Stepbar.children[1].classList.add('active')
     document.getElementById(parent_id).classList.add('d-none')
        break;
    case 'step 2':
 var   NameInput = document.getElementById('InputName').value
var   EmailInput = document.getElementById('InputEmail').value
    if(isvalid( NameInput,EmailInput) == 1){
        document.getElementById('step 3').classList.remove('d-none')
        Stepbar.children[1].classList.remove('active')
        Stepbar.children[2].classList.add('active')
        document.getElementById(parent_id).classList.add('d-none')
    }
        break;
    default:
        break;
}
}
// Function to for prev button 
function Prev_btn(elem){
    var  parent_id = elem.parentNode.parentNode.id;
    switch (parent_id) {
        case 'step 3':
         document.getElementById('step 2').classList.remove('d-none')
         document.getElementById("emailHelp").classList.add('d-none')
         document.getElementById("NameHelp").classList.add('d-none')
       Stepbar.children[2].classList.remove('active')
       Stepbar.children[1].classList.add('active')
         document.getElementById(parent_id).classList.add('d-none')
            break;
        case 'step 2':
            
            document.getElementById('step 1').classList.remove('d-none')
            Stepbar.children[1].classList.remove('active')
            Stepbar.children[0].classList.add('active')
            document.getElementById(parent_id).classList.add('d-none')
            break;
        default:
            break;
    }
}

// Regular expression for name validation
const nameRegex = /^[a-zA-Z\s'-]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Function to validate name and email
function isValidName(name) {
    return nameRegex.test(name);
}
function isValidEmail(email) {
    return emailPattern.test(email);
}
function isvalid(name,email){
    console.log(isValidName(email))
   if (isValidEmail(email)) {
    if (isValidName(name)) {
        return "1" 
    }else{
        document.getElementById("NameHelp").classList.remove('d-none')
    }

   }else{
    if (isValidName(name)) {
         
    }else{
        document.getElementById("NameHelp").classList.remove('d-none')
    }
    document.getElementById("emailHelp").classList.remove('d-none')
   }
}
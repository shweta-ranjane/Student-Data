let selectedRow = null;
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let dob = document.getElementById("dob");
let education = document.getElementById("education");
let phone = document.getElementById("phone");
let city = document.getElementById("city");

// When user click on submit button
function enterData() {
	let studentData = fetchData();
	if(selectedRow == null){
		addData(studentData);
		
	}
	else{
		updateData(studentData);
		
	}
	clearForm();
}



// A function to fetch the data
function fetchData(){
	let studentData={};
	studentData.userName = userName.value;
	studentData.email = email.value;
	studentData.dob = dob.value;
	studentData.education = education.value;
	studentData.phone = phone.value;
	studentData.city = city.value;
    return studentData;
} 

// function to add data inside the table

function addData(data){
	let table = document.getElementById("studentList").getElementsByTagName("tbody")[0];
	let newRow = table.insertRow(0);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.userName;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.email;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.dob;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.education;
	cell5 = newRow.insertCell(4);
	cell5.innerHTML = data.phone;
	cell6 = newRow.insertCell(5);
	cell6.innerHTML = data.city;
	cell7 = newRow.insertCell(6);
	cell7.innerHTML = `<button onclick="editData(this)">EDIT</button> 
	                 <button onclick="deleteData(this)">DELETE</button>`;

}

// Delete button functonality
function deleteData(btn)
{
	if(confirm("Are you sure you want to delete the record !")){
		row =  btn.parentElement.parentElement;
		document.getElementById("studentList").deleteRow(row.rowIndex);
	}
}

// edit button functionality
function editData(btn)
{
selectedRow = btn.parentElement.parentElement;
userName.value = selectedRow.cells[0].innerHTML;
email.value = selectedRow.cells[1].innerHTML;
dob.value = selectedRow.cells[2].innerHTML;
education.value = selectedRow.cells[3].innerHTML;
phone.value = selectedRow.cells[4].innerHTML;
city.value = selectedRow.cells[5].innerHTML;
}

// update Function
function updateData(data){
	selectedRow.cells[0].innerHTML = data.userName;
	selectedRow.cells[1].innerHTML = data.email;
	selectedRow.cells[2].innerHTML = data.dob;
	selectedRow.cells[3].innerHTML = data.education;
	selectedRow.cells[4].innerHTML = data.phone;
	selectedRow.cells[5].innerHTML = data.city;
}

//Function to clear form
function clearForm(){
	userName.value="";
	email.value="";
	dob.value="";
	education.value="";
	phone.value="";
	city.value="";
	selectedRow=null;
}



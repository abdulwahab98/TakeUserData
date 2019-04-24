function takeuseradd(){

    var name= document.getElementById("name").value;
    var password= document.getElementById("password").value;
    
    var email= document.getElementById("email").value;
    var table= document.getElementById("tablelist");

    var row= document.createElement("tr");
    var columnName= document.createElement("td");
    var columnPassword= document.createElement("td");
    var columnEmail= document.createElement("td");

    columnName.innerHTML=name;
    columnPassword.innerHTML=password;
    columnEmail.innerHTML=email;

    row.appendChild(columnName);
    row.appendChild(columnPassword);
    row.appendChild(columnEmail);

    table.appendChild(row);
}
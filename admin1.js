let currentBlock = "ABOUT";

function getSelected(){
    return document.getElementById("sel1").value;
}

function bindEvents(){
    document.getElementById("sel1").addEventListener("change", ()=>{
        currentBlock = getSelected();
        if(currentBlock != "TEAM"){
            renderTextPerBlock(currentBlock);
        }else{
            renderTeam();
        }
    }, false)
    /*document.getElementById("login-button").addEventListener("click", ()=>{
        login();
    }, false)
    document.getElementById("password").addEventListener("keydown", (event)=>{
        if(event.code == "Enter"){
            login();
        }
    }, false)*/
    document.getElementById("logout").addEventListener("click", ()=>{
        window.location.href = "logout.php";
    }, false)

    window.addEventListener("beforeunload", () =>{
        window.alert("asd");
        $.post("logout.php");
    },false);
    
    
}

bindEvents();


function renderTextPerBlock(blockName){
    document.getElementById("admin-container").innerHTML = "";
    fetch('./text.JSON')
    .then((response) => response.json())
    .then((json) => {
        json.forEach((block, i)=>{
            if(block.block == blockName){
                let container = document.createElement("div");
                document.getElementById("admin-container").appendChild(container);
                for(var key in block.texts) {
                    let label = document.createElement("p");
                    label.innerHTML = key + ":"
                    let input = document.createElement("textarea");
                    input.value = block.texts[key];
                    container.appendChild(label);
                    
                    container.appendChild(input);
                }
                let buttonSave = document.createElement("button");
                buttonSave.innerHTML = "Save changes";
                buttonSave.className = "btn btn-primary";
                container.appendChild(buttonSave);
                buttonSave.addEventListener("click", ()=>{
                    saveChanges();
                }, false);
            }
        })
    });
}

function renderTeam(){
    document.getElementById("admin-container").innerHTML = "";
    fetch('./team.JSON')
    .then((response) => response.json())
    .then((json) => {
        let container = document.getElementById("admin-container");
        for(member in json){
            let pName = document.createElement("p");
            pName.innerHTML = "Name:"
            container.appendChild(pName);
            let textAreaName = document.createElement("textarea");
            textAreaName.innerHTML = member;
            container.appendChild(textAreaName);

            let pDescription = document.createElement("p");
            pDescription.innerHTML = "Description:"
            container.appendChild(pDescription);
            let textAreaDescription = document.createElement("textarea");
            textAreaDescription.innerHTML = json[member]['desc'];
            container.appendChild(textAreaDescription);


            let pRoleShort = document.createElement("p");
            pRoleShort.innerHTML = "Role short:"
            container.appendChild(pRoleShort);
            let textAreaRoleShort = document.createElement("textarea");
            textAreaRoleShort.innerHTML = json[member]['role']['short'];
            container.appendChild(textAreaRoleShort);

            let pRoleLong = document.createElement("p");
            pRoleLong.innerHTML = "Role full:"
            container.appendChild(pRoleLong);
            let textAreaRoleLong = document.createElement("textarea");
            textAreaRoleLong.innerHTML = json[member]['role']['full'];
            container.appendChild(textAreaRoleLong);

            container.appendChild(document.createElement("br"));
            
            container.appendChild(document.createElement("br"));
            container.appendChild(document.createElement("br"));
            
            container.appendChild(document.createElement("br"));
            container.appendChild(document.createElement("br"));
            
            container.appendChild(document.createElement("br"));

            
        }
        let buttonSave = document.createElement("button");
            buttonSave.innerHTML = "Save changes";
            buttonSave.className = "btn btn-primary";
            container.appendChild(buttonSave);
            buttonSave.addEventListener("click", ()=>{
                saveChangesTeam();
            }, false);
    });
}

function saveChanges(){
    fetch('./text.JSON')
    .then((response) => response.json())
    .then((json) => {
        json.forEach((elem,i)=>{
            if(elem.block == getSelected()){
                let container = document.getElementById("admin-container").children[0];
                for(let i=0; i<container.children.length-2; i+=2){
                    elem.texts[container.children[i].innerHTML.slice(0,-1)] = container.children[i+1].value;
                }
            }
        })
        sendJSON(json, "./submit.php");
    });
}


function saveChangesTeam(){
    let container = document.getElementById("admin-container");
    let team = {};
    for(let i=1; i<container.children.length-5; i+=14){
        let imgPath = container.children[i].value.charAt(0).toLowerCase() + container.children[i].value.slice(1);
        imgPath = imgPath.replace(" ", "");
        team[container.children[i].value] = {
            'desc': container.children[i+2].value,
            'img': imgPath,
            'role':{
                'full':  container.children[i+6].value,
                'short': container.children[i+4].value
            }
        }
    }
    sendJSON(team, "./submitTeam.php");
}

renderTextPerBlock(currentBlock);

function sendJSON(json, url){
              
    let result = document.querySelector('.result');
      
    // Creating a XHR object
    let xhr = new XMLHttpRequest();

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            let p = document.getElementById("status");
            if(this.responseText){
                
                p.style.color = "red";
                p.innerHTML = this.responseText;
            }else{
                p.style.color = "green";
                p.innerHTML = "Changes has been saved";
                setTimeout(()=>{
                    p.innerHTML = "";
                }, 2000);
            }
            document.getElementById("admin-container").appendChild(p);

        }
    };

    // Converting JSON data to string
    var data = JSON.stringify(json);

    // Sending data with the request
    xhr.send(data);
}
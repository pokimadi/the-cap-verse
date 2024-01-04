
function renderTexts(){
    fetch('./text.JSON')
    .then((response) => response.json())
    .then((json) => {
        json.forEach((block, i)=>{
            let container = document.getElementsByClassName(block.className)[0];
            for(var key in block.texts) {
                let elems = container.getElementsByClassName(key);
                for(let i = 0; i < elems.length; i++){
                    elems[i].innerHTML = block.texts[key];
                }
            }
        })
    });
}

renderTexts();
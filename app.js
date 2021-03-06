showNotes();

//
let addBtn = document.getElementById('addBtn');



addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    let addTitle=document.getElementById('addTitle');
    // console.log(typeof(notes));
if (addText.value!=""&&addTitle.value!=""){
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    let myObj ={
        title: addTitle.value,
        text: addText.value
    };
    noteObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    addText.value = "";
    addTitle.value="";
    // console.log(noteObj);
    showNotes();
}
})
//to display the added notes
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
        
    }
    let html = "";
    noteObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${element.title}</h5>
                  <p class="card-text">${element.text}</p>
                  <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
                </div>
              </div>
        `;
    });
    let notesElm = document.getElementById('notes');
    if (noteObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`
    }
}

//function to delete a node
function deleteNote(index) {
    // console.log(index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    noteObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    showNotes();
    
}
let search= document.getElementById('searchText')
search.addEventListener('input', function(){
    let searchText =search.value;
    // console.log(searchText);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if(cardText.includes(searchText)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})
const row = 
  `<div class="tableRow">
    <div class="tableCell">
      <input/>
    </div>
    <div class="tableCell">
      <input/>
    </div>
    <div class="tableCell">
      <button type="button" class="edit hidden">Edit</button>
      <button type="button" class="save">Save</button>
      <button type="button" class="remove">Remove</button>
    </div>
  </div>`

const table = document.getElementById("tableBody");

function editBook(thisRow) {
  thisRow.getElementsByClassName("edit")[0].classList.add('hidden');
  thisRow.getElementsByClassName("save")[0].classList.remove('hidden');
  for(x of thisRow.getElementsByTagName("input"))
    x.disabled = false;
}

function saveBook(thisRow) {
  thisRow.getElementsByClassName("save")[0].classList.add('hidden');
  thisRow.getElementsByClassName("edit")[0].classList.remove('hidden');
  for(x of thisRow.getElementsByTagName("input"))
    x.disabled = true;
}

function removeBook(thisRow) {
  table.removeChild(thisRow);
}

function addBook() {
  table.insertAdjacentHTML('beforeend', row)
  let rows = document.getElementsByClassName("tableRow");
  let newRow = rows[rows.length - 1];

  let removeButton = newRow.getElementsByClassName("remove")[0]
  removeButton.addEventListener("click", function(){removeBook(newRow)});

  let saveButton = newRow.getElementsByClassName("save")[0]
  saveButton.addEventListener("click", function(){saveBook(newRow)});

  let editButton = newRow.getElementsByClassName("edit")[0]
  editButton.addEventListener("click", function(){editBook(newRow)});
}

document.getElementById("addBook").addEventListener("click", addBook);

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

function editBook(self) {
  let thisRow = self.parentNode.parentNode;
  thisRow.getElementsByClassName("edit")[0].classList.add('hidden');
  thisRow.getElementsByClassName("save")[0].classList.remove('hidden');
  for(x of thisRow.getElementsByTagName("input"))
    x.disabled = false;
}

function saveBook(self) {
  let thisRow = self.parentNode.parentNode;
  thisRow.getElementsByClassName("save")[0].classList.add('hidden');
  thisRow.getElementsByClassName("edit")[0].classList.remove('hidden');
  for(x of thisRow.getElementsByTagName("input"))
    x.disabled = true;
}

function removeBook(self) {
  let thisRow = self.parentNode.parentNode;
  table.removeChild(thisRow);
}

function addBook() {
  table.insertAdjacentHTML('beforeend', row)
  let rows = document.getElementsByClassName("tableRow");
  let newRow = rows[rows.length - 1];

  let removeButton = newRow.getElementsByClassName("remove")[0]
  removeButton.addEventListener("click", function(){removeBook(removeButton)});

  let saveButton = newRow.getElementsByClassName("save")[0]
  saveButton.addEventListener("click", function(){saveBook(saveButton)});

  let editButton = newRow.getElementsByClassName("edit")[0]
  editButton.addEventListener("click", function(){editBook(editButton)});
}

document.getElementById("addBook").addEventListener("click", addBook);

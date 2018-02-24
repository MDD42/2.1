function tabShop(){
	document.getElementById('shopping-list').style.display ='block';
	document.getElementById('done-list').style.display = 'none';
	document.getElementById('del-list').style.display = 'none';
}

function tabDone(){
	document.getElementById('shopping-list').style.display ='none';
	document.getElementById('done-list').style.display = 'block';
	document.getElementById('del-list').style.display = 'none';
}

function tabDel(){
	document.getElementById('shopping-list').style.display ='none';
	document.getElementById('done-list').style.display = 'none';
	document.getElementById('del-list').style.display = 'block';
}

var tableShop = document.getElementById('table-shop'),
tableDone = document.getElementById('table-done'),
tableDel = document.getElementById('table-del'),
shopList = [],
doneList = [],
delList = [];

function insertRow(id) {
  var inputButton = document.getElementsByClassName('input_button')[0];
  if (inputButton.innerText == "Update") {
    updateRow(inputButton);
    return false;
  }

  var tbody = document.getElementById(id),
    row = document.createElement("tr"),
    cellCounter = document.getElementById("myTable").rows.length;

  var checkbox = document.createElement("input");
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox_done';
  checkbox.addEventListener('click', function() { deleteRow(event)});

// Клавиша  Редактирования 
  var btnEdit = document.createElement('button');
  btnEdit.className = 'edit';
  btnEdit.innerHTML = '<strong>&#9998;</strong>';
  btnEdit.addEventListener('click', function() {
    editButton(this);
    return false;
  });


// Клавиша Удаления
  var btnDelete = document.createElement('button');
  btnDelete.className = 'delete';
  btnDelete.innerHTML = '<strong>&#215;</strong>';
  // btnDelete.setAttribute('onclick', 'delButton(event)');
  btnDelete.addEventListener('click', function() { delButton(event)});





// Нумерация в списке
  var tdNum = document.createElement("td");
  tdNum.setAttribute('id', 'td1_id');
  tdNum.className = 'td_num';
  tdNum.appendChild(document.createTextNode(cellCounter));
// Чекбокс
  var tdDone = document.createElement("td");
  tdDone.appendChild(checkbox);
// Название товара
  var tdItem = document.createElement("td");
  tdItem.appendChild(document.createTextNode(document.getElementById("add_id").value));
// Колличество едениц товара
  var tdQuant = document.createElement("td");
  tdQuant.appendChild(document.createTextNode(document.getElementById("quant_id").value));
// Стоимость 
  var tdPrice = document.createElement("td");
  tdPrice.appendChild(document.createTextNode(document.getElementById("price_id").value));
// Столбец управления
  var tdAction = document.createElement("td");
  tdAction.setAttribute('colspan', '2');
  tdAction.className = 'td_action';
  tdAction.appendChild(btnDelete);
  tdAction.appendChild(btnEdit);


  row.appendChild(tdNum);
  row.appendChild(tdDone);
  row.appendChild(tdItem);
  row.appendChild(tdQuant);
  row.appendChild(tdPrice);
  row.appendChild(tdAction);

  tbody.appendChild(row);
// Очистка импутов после добавления товара
  document.getElementsByClassName('input_add')[0].value = "";
  document.getElementsByClassName('input_quant')[0].value = "";
  document.getElementsByClassName('input_price')[0].value = "";

  return false;
}


function updateRow(inputButton) {
  var row = document.getElementById("myTable").rows[inputButton.value]; 
  row.style.backgroundColor = "white";
// получим значения введенные в инпуты
  var inputAdd = document.getElementsByClassName('input_add')[0];
  var inputQuant = document.getElementsByClassName('input_quant')[0];
  var inputPrice = document.getElementsByClassName('input_price')[0];
// обновим значения ячеек в строке
  row.cells[2].innerText = inputAdd.value;
  row.cells[3].innerText = inputQuant.value;
  row.cells[4].innerText = inputPrice.value;
// поменяем значение кнопки обратно и очистим инпуты
  inputButton.innerText = "Add";
  inputButton.value = "";
  inputAdd.value = "";
  inputQuant.value = "";
  inputPrice.value = "";
}

function editButton(edit) {
  var tr = edit.parentNode.parentNode;
  tr.style.backgroundColor = "grey";



  var valueItem = tr.cells[2].innerText;
  var valueQuantity = tr.cells[3].innerText;
  var valuePrice = tr.cells[4].innerText;

  document.getElementsByClassName('input_add')[0].value = valueItem;
  document.getElementsByClassName('input_quant')[0].value = valueQuantity;
  document.getElementsByClassName('input_price')[0].value = valuePrice;

  var inputButton = document.getElementsByClassName('input_button')[0];
  inputButton.innerText = "Update";
  inputButton.value = tr.cells[0].innerText;
}
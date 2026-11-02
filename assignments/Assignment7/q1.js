const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

let editingItem = null;

function createProductItem(name) {
  const item = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = name;

  const editButton = document.createElement("button");
  editButton.className = "edit-btn";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";

  item.appendChild(nameSpan);
  item.appendChild(editButton);
  item.appendChild(deleteButton);
  return item;
}

function addProduct() {
  const name = productInput.value.trim();
  if (name === "") {
    console.log("Product name cannot be empty");
    return;
  }
  productList.appendChild(createProductItem(name));
  console.log(`Added: ${name}`);
  productInput.value = "";
  productInput.focus();
}

function startEdit(item) {
  const nameSpan = item.querySelector(".product-name");
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "edit-input";
  editInput.value = nameSpan.textContent;

  item.replaceChild(editInput, nameSpan);
  item.classList.add("editing");
  item.querySelector(".edit-btn").textContent = "Save";
  editInput.focus();
  editingItem = item;
}

function saveEdit(item) {
  const editInput = item.querySelector(".edit-input");
  if (!editInput) {
    return;
  }
  const newName = editInput.value.trim();
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = newName === "" ? "Untitled product" : newName;

  item.replaceChild(nameSpan, editInput);
  item.classList.remove("editing");
  item.querySelector(".edit-btn").textContent = "Edit";
  console.log(`Saved: ${nameSpan.textContent}`);

  if (editingItem === item) {
    editingItem = null;
  }
}

addButton.addEventListener("click", addProduct);

productInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addProduct();
  }
});

productList.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) {
    return;
  }

  if (event.target.classList.contains("delete-btn")) {
    if (editingItem === item) {
      editingItem = null;
    }
    console.log(`Deleted: ${item.querySelector(".product-name, .edit-input").textContent || item.querySelector(".edit-input").value}`);
    item.remove();
    return;
  }

  if (event.target.classList.contains("edit-btn")) {
    if (item.classList.contains("editing")) {
      saveEdit(item);
      return;
    }
    if (editingItem) {
      saveEdit(editingItem);
    }
    startEdit(item);
  }
});

productList.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.classList.contains("edit-input")) {
    saveEdit(event.target.closest("li"));
  }
});

document.addEventListener("click", (event) => {
  if (editingItem && !editingItem.contains(event.target)) {
    saveEdit(editingItem);
  }
});

let shoppingList = [];

// Atualiza a exibição da lista
function updateList() {
    let listElement = document.getElementById("shoppingList");
    listElement.innerHTML = "";
    
    shoppingList.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${item}`;
        listElement.appendChild(listItem);
    });
}

// Adicionar item à lista
function addItem() {
    let item = document.getElementById("itemInput").value.trim();
    
    if (item) {
        shoppingList.push(item);
        document.getElementById("itemInput").value = "";
        updateList();
    } else {
        alert("Digite um item válido!");
    }
}

// Remover item da lista
function removeItem() {
    let itemToRemove = document.getElementById("removeInput").value.trim();
    
    if (itemToRemove) {
        let index = shoppingList.indexOf(itemToRemove);
        
        if (index !== -1) {
            shoppingList.splice(index, 1);
            document.getElementById("removeInput").value = "";
            updateList();
        } else {
            alert("Item não encontrado!");
        }
    } else {
        alert("Digite um item para remover!");
    }
}

// Pesquisar item por nome ou posição
function searchItem() {
    let searchValue = document.getElementById("searchInput").value.trim();
    let searchResult = document.getElementById("searchResult");
    
    if (!searchValue) {
        searchResult.textContent = "Digite um termo para pesquisar.";
        return;
    }

    let foundItem = "";
    
    if (!isNaN(searchValue)) {
        let index = parseInt(searchValue) - 1;
        
        if (index >= 0 && index < shoppingList.length) {
            foundItem = `O item na posição ${searchValue} é "${shoppingList[index]}"`;
        } else {
            foundItem = "Posição inválida!";
        }
    } else {
        let index = shoppingList.indexOf(searchValue);
        
        if (index !== -1) {
            foundItem = `O item "${searchValue}" está na posição ${index + 1}`;
        } else {
            foundItem = "Item não encontrado!";
        }
    }

    searchResult.textContent = foundItem;
}

let inventory = [];

function inventoryList() {
  function add(item) {
    if (inventory.includes(item)) {
      return;
    }
    inventory.push(item);
  }

  function remove(name) {
    // let checkIndexOfItem = inventory.indexOf(name);

    // if (checkIndexOfItem !== -1) {
    //   inventory.splice(checkIndexOfItem, 1);
    // }

    inventory = inventory.filter((item) => item !== name);
  }

  return {
    add,
    remove,
  };
}

const myInventory = inventoryList();
myInventory.add('Manggo');
myInventory.add('Strawberry');
myInventory.remove('Strawberry');
console.log(inventory);
myInventory.add('Apple');

console.log(inventory);

'use strict';

class Storage {
    constructor ([...items]) {
        this.items = items;
    }

    getItems(){
        return this.items;
    }
    addItem(item){
        this.item = item;
        items.push(item);
        return this.items;
    }
    removeItem(item) {
        for(let i = 0; i < items.length; i++){
            console.log(items[i]);
           if(this.items[i] === item){
                this.items.splice(i, 1);
            }
        }
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
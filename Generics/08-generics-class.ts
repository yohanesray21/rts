interface Database {
  get: (id: string) => string;
  set: (id: string, value: string) => void;
}

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string) {
    this.db[id] = value;
  }
}

// const myDatabase = new InMemoryDatabase();
// myDatabase.set('foo', 'barr');
// console.log(myDatabase.get('foo'));
// myDatabase.db['foo'] = 'nez';
// console.log(myDatabase.get('foo'));

interface Persitable {
  saveToString: () => string;
  restoreFromString: (storeState: string) => void;
}

class PersistableDB extends InMemoryDatabase implements Persitable {
  saveToString() {
    return JSON.stringify(this.db);
  }
  restoreFromString(value: string) {
    this.db = JSON.parse(value);
  }
}

const myPersistable = new PersistableDB();
myPersistable.set('foo', 'barr');
console.log(myPersistable.get('foo'));
const saved = myPersistable.saveToString();
myPersistable.set('foo', 'db-1');
console.log(myPersistable.get('foo'));

const myDB2 = new PersistableDB();
myDB2.restoreFromString(saved);
console.log(myDB2.get('foo'));

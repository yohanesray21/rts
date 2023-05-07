interface Database<T, K> {
  get: (id: K) => T;
  set: (id: K, value: T) => void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T) {
    this.db[id] = value;
  }
}
interface Persitable {
  saveToString: () => string;
  restoreFromString: (storeState: string) => void;
}

class PersistableDB<T, K extends DBKeyType>
  extends InMemoryDatabase<T, K>
  implements Persitable
{
  saveToString() {
    return JSON.stringify(this.db);
  }
  restoreFromString(value: string) {
    this.db = JSON.parse(value);
  }
}

const myPersistable = new PersistableDB<number, string>();
myPersistable.set('foo', 1);
console.log(myPersistable.get('foo'));
const saved = myPersistable.saveToString();
myPersistable.set('foo', 2);
console.log(myPersistable.get('foo'));

const myDB2 = new PersistableDB<number, string>();
myDB2.restoreFromString(saved);
console.log(myDB2.get('foo'));

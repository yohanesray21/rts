interface Database {
  get: (value: string) => string;
  set: (id: string, value: string) => void;
}

class myDatabase implements Database {
  private db: Record<string, string> = {};

  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

const myDB = new myDatabase();
myDB.set('foo', 'bar');
console.log(myDB.get('foo'));
myDB.db['foo'] = 'baz';
console.log(myDB.get('foo'));

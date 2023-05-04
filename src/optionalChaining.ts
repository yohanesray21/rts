function printIngridients(cups: string, ing: string) {
  console.log(`${cups} ${ing}`);
}

printIngridients('1C', 'Sugar');

interface User {
  name: string;
  info?: {
    age?: string;
    email?: string;
  };
}

function getUser(user: User) {
  return user.info?.email ?? '';
}

console.log(
  getUser({ name: 'yohanes', info: { age: '21', email: 'yohanes@gmail.com' } })
);

function getCallback(callback?: () => void) {
  callback?.();
}

interface User {
  name: string;
  id: string;
  email: string;
}

type myOptionalUser = Partial<User>;
// interface myOptionalUser {
//   name?: string;
//   id?: string;
//   email?: string;
// }

const merge = (myUser: User, myOptUser: myOptionalUser): User => {
  return { ...myUser, ...myOptUser };
};

console.log(
  merge(
    { name: 'Yohanes', email: 'yohanes@gmail.com', id: '1' },
    { email: 'yohanesray@gmail.com' }
  )
);

let User = [
  { name: 'Yohanes', email: 'yohanes@gmail.com', id: '1' },
  { name: 'ray', email: 'ray@gmail.com', id: '2' },
];

const mapById = (items: User[]): Record<User['id'], Omit<User, 'id'>> => {
  return items.reduce((a, v) => {
    const { id, ...others } = v;
    return {
      ...a,
      [id]: others,
    };
  }, {});
};

console.log(mapById(User));

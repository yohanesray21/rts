const pluck = <TItem, TKey extends keyof TItem>(
  items: TItem[],
  key: TKey
): TItem[TKey][] => {
  return items.map((value) => value[key]);
};

const dogs = [
  { name: 'hero', age: 7 },
  { name: 'hiro', age: 5 },
];

console.log(pluck(dogs, 'age'));

console.log(pluck(dogs, 'name'));

interface BaseEvent {
  time: string;
  user: string;
}

interface BaseEvent {
  time: string;
  user: string;
}

interface EventMap {
  checkout: BaseEvent;
  addToCart: BaseEvent & { qty: string; productId: string };
}

function sendEvent<Name extends keyof EventMap>(
  nameEvent: Name,
  data: EventMap[Name]
) {
  console.log(nameEvent, data);
}

sendEvent('addToCart', { productId: '1', qty: '1', time: '1', user: 'bazz' });
sendEvent('checkout', { time: '2', user: 'Bob' });

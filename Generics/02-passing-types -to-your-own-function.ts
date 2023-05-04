const makeFetch = <TData>(url: string): Promise<TData> => {
  return fetch(url).then((res) => res.json());
};

makeFetch<{ firstName: string }>('http://hello').then((res) => {
  console.log(res.firstName);
});

const hello = <T, U, X>(data: [T, U, X]) => {
  return data;
};

const resultFromHello = hello([4, '4', 4]);

function HelloFunction<TData>() {
  return 5 as TData;
}

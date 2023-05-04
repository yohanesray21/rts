type myGenericData<TData> = {
  data: TData;
};

type myObjData = myGenericData<{
  person: string;
}>;

type myStringData = myGenericData<string>;

const Personal: myObjData = {
  data: {
    person: 'Yohanes',
  },
};

const Personal2: myStringData = {
  data: 'Yohanes',
};

import './App.css';

type SelectProps<TProps> = {
  options: TProps[];
  getLabel?: (opt: TProps) => string;
  getIndex?: (opt: TProps) => string;
};

const Select = <TProps, _>(props: SelectProps<TProps>) => {
  const { options, getLabel, getIndex } = props;
  return (
    <select>
      {options.map((option, index) => (
        <option key={index}>
          {typeof option === 'string' ? option : getLabel?.(option)}
        </option>
      ))}
    </select>
  );
};

function App() {
  return (
    <div className="App">
      <Select options={['Male', 'Female', 'Others']} />

      {/* code below should work and safely typed */}
      <Select
        options={[
          { id: 1, name: 'Female' },
          { id: 2, name: 'Male' },
          { id: 3, name: 'Others' },
        ]}
        getLabel={(option) => option.name}
        getIndex={(option) => option.id.toString()}
      />
    </div>
  );
}

export default App;

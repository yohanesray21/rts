interface ChildProps {
  color: string;
  onClickButton: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClickButton }: ChildProps) => {
  return (
    <>
      <div>{color}</div>
      <button onClick={onClickButton}>Click Me!</button>
    </>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClickButton,
  children,
}) => {
  return (
    <>
      <div>{color}</div>
      <button onClick={onClickButton}>Click Me!</button>
      {children}
    </>
  );
};

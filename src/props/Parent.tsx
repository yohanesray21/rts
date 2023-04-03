import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC onClickButton={() => console.log("Hello")} color="red">
      Hello
    </ChildAsFC>
  );
};

export default Parent;

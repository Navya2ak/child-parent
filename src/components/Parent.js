import Child from "./Child";

function Parent(props) {
  function callBack(data) {
    console.log(data);
  }
  return (
    <>
      <Child fun={callBack} />
    </>
  );
}
export default Parent;

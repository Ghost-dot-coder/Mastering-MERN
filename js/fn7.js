const globalData = "global Variable";
const parentFunction = () => {
  const parentData = "parent Variable";
  console.log(`Global data: ${globalData}
    Parent Data: ${parentData}`);
  return () => {
    const childData = "child Variable";
    console.log(`Global data: ${globalData}
    Parent Data: ${parentData}
    Child Data:  ${childData}`);
  };
};
const child = parentFunction();
child();
// parentFunction()()

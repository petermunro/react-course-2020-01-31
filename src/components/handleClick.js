// named exports
// 0 or more
export const pi = 3.14;
export const e = 2.718;
export function handleClick2() {}

// default export
// 0 or 1
function handleClick(e) {
  // alert("Click! - see console for SyntheticEvent details");
  // console.log("Click! React event is:", e.type);
  e.persist();
  setTimeout(() => {
    console.log(e.type);
  }, 1000);
}

export default handleClick;

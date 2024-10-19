import { produce } from "immer";

const state = {
  name: "tom",
  hobbies: ["tennis", "soccer"],
}
const newState = produce(state, draft => {
  draft.name = "john";
  console.log(draft);

  // immerではreturnを記述しない
  // return state;
})

console.log(state, newState);
// export default Example;

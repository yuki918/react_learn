import axios from "axios";

const ENDPOINT_URL = "http://127.0.0.1:3003/todo"

const todoApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    console.log(result);
    return result.data;
  },
  async post(todo) {
    const result = await axios.post(ENDPOINT_URL, todo);
    // console.log(result);
    return result.data;
  },
  async delete(todo) {
    const result = await axios.delete(ENDPOINT_URL + '/' + todo.id);
    return result.data;
  },
  async patch(todo) {
    const result = await axios.put(ENDPOINT_URL + '/' + todo.id, todo);
    return result.data;
  }
}

// 全てのTODOを取得する
todoApi.getAll();
// 新しいTODOの作成
// todoApi.post({ 
//   id: "32111",
//   content: "買い物",
// });
// TODOの削除
// todoApi.delete({
//   id: "32111",
// });
// TODOの更新
// todoApi.patch({
//   id: "32111",
//   content: "32111",
// });

export default todoApi;
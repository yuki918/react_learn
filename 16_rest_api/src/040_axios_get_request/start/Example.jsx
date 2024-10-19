import { useEffect, useState } from "react";
import axios from "axios";

// 前提条件
// AP のモックを手軽に作成できるnode.jsのライブラリであるJSON serverをインストールする
// 16_rest_api\db\db.json
// JSON serverに上記ファイルのデータを渡す
// 
// http://127.0.0.1:3003/todo
// http://127.0.0.1:3003/user
// npm startを実行することで上記のURLが起動する

// axiosライブラリでHTTPリクエストを使ってサーバからデータを取得する

const Example = () => {
  const  [users, setUsers ] = useState([]);
  // useEffect(() => {
  //   axios.get("http://127.0.0.1:3003/todo").then((res) => {
  //     console.log(res.data);
  //   });
  // })
  // Exampleコンポーネントの初回レンダリングのみ実行するように、依存配列に空の配列を渡す
  useEffect(() => {
    // awaitを使用する場合は、関数の前にasyncを記述する
    const getUer = async () => {
      const res = await axios.get("http://127.0.0.1:3003/user");
      // console.log(res.data);
      setUsers(res.data);
    }
    getUer();
  }, [])
  return (
    <div>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>age：{user.age}</p>
            <p>hobbies：{user.hobbies.join(',')}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Example;

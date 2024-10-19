// スタティックインポート
import { add } from "./add";

const Example = () => {
  // ダイナミックインポート
  // スタティックインポートと違い、必要な時に呼び出すことができる
  const dynamicImport = async () => {
    const module = await import("./add");
    console.log(module);
  }
  dynamicImport();
  import("./add").then(module => {
    console.log(module);
  })
  // console.log(add(1, 2));
};

export default Example;

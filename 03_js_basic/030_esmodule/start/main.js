// ESModuleの使い方
// import funcB, { hello } from './module.js';
// import funcB, { User } from './module.js';
// import funcB from './module.js';
// 上記をまとめる（デフォルト関数は括弧に含めない）
import funcB, { hello, User } from './module.js';

hello();
// hello!

funcB();
// funcB output

const user = new User('yuki');
user.hello();
// yuki
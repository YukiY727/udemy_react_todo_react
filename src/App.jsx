import React from "react";

export const App = () => {
  return (
    <>
      <div></div>
      <input placeholder="TODOを入力" />
      <button>追加</button>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>aaaaaa</li>
          <div></div>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div></div>
    </>
  );
};

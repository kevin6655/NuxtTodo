import Vuex from 'vuex'

// 追加された情報を配列に追加

const CREATETODOS = () => {
  // Vuexのインスタンス作成
  return new Vuex.Store({
    // 初期状態を管理:state
    state: () => ({
      // Todoの初期値
      // Contentと暦情報を定義
      // content:Todoの内容
      // createtime:作成された時間
      todos: [
        {
          content: '',
          createtime: ''
        }
      ]
    }),
    // state状態を更新する:mutation[みゅーてーしょん]
    // 基本的にmutation以外でのstateの更新は行わない
    // ここでは情報の追加と情報の削除を実装していく
    mutations: {
      // 追加処理
      // 引数
      // state:stateで管理している情報
      // 追加される情報のオブジェクト
      insert: (state, obj) => {
        // 日付のインスタンス作る
        const DATE = new Date()
        // 日付を作成
        // getMonthは仕様上1月前の情報のため+1しないといけない
        const FULLDATE =
          DATE.getFullYear() +
          '-' +
          ('00' + (DATE.getMonth() + 1)).slice(-2) +
          '-' +
          ('00' + DATE.getDate()).slice(-2) +
          ' ' +
          ('00' + DATE.getHours()).slice(-2) +
          ':' +
          ('00' + DATE.getMinutes()).slice(-2)
        // Todoの配列に追加 unshiftで追加
        state.todos.unshift({
          content: obj.content,
          createtime: FULLDATE
        })
      },
      remove: (state, obj) => {
        // 削除されるlistの内容を配列から探す
        for (let index = 0; index < state.todos.length; index++) {
          // stateのobjを作成
          const stateobj = state.todos[index]
          // 削除される情報とstate上で管理されている情報で比較
          if (
            // 合致するものを探す
            stateobj.content === obj.content &&
            stateobj.createtime === obj.createtime
          ) {
            alert('このレコードを削除します。=>' + stateobj.content)
            // 合致したものを削除する。
            state.todos.splice(index, 1)
            return
          }
        }
      }
    }
  })
}
export default CREATETODOS

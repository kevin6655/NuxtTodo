import Vuex from 'vuex'

//追加された情報を配列に追加

const CREATETODOS =()=>{
    //Vuexのインスタンス作成
    return new Vuex.Store({
        //初期状態を管理:state
        state:()=>{
            //Todoの初期値
            //Contentと暦情報を定義
            //content:Todoの内容
            //createtime:作成された時間
            todos:[
                {content:'',createtime:''}
            ]

        },
        //state状態を更新する

    })
}
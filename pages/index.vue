<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">TodoApp</h1>
      <h2 class="subtitle">Nuxt TodoApp</h2>
      <div>
        <input
          type="text"
          id="contents"
          name="content"
          v-model="content"
          @focus="set_flg"
        />
        <button @click="insert">Save</button>
        <button @click="find">Find</button>
      </div>
      <div>
        <ul>
          <li v-for="(todo, index) in findTodo" :key="index">
            <span>{{ todo.content }}</span>
            <span>{{ todo.createtime }}</span>
            <span><button @click="remove(todo)">Remove</button></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      content: '',
      find_flg: false
    }
  },
  components: {
    Logo
  },
  computed: {
    ...mapState(['todos']),
    findTodo() {
      // find_flgがTrueの時に走る
      if (this.find_flg) {
        // 配列定義
        const arr = []
        const data = this.todos
        // todosの中身をforeachで回して検索を行う。
        data.forEach((element) => {
          // contentの内容を大文字小文字を統一し、比較を行う。
          if (element.content.toLowerCase() === this.content.toLowerCase()) {
            arr.push(element)
          }
        })
        // 配列を返す
        return arr
      } else {
        return this.todos
      }
    }
  },
  methods: {
    insert() {
      // commit()で引数に実行したいメソッド名とマッピングする内容を入れる
      this.$store.commit('insert', { content: this.content })
      this.content = ''
    },
    find() {
      this.find_flg = true
    },
    set_flg() {
      // trueだったflgをfalseにしてcontentを空白にする。
      if (this.find_flg) {
        this.find_flg = false
        this.content = ''
      }
    },
    remove(todo) {
      this.$store.commit('remove', todo)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">TodoApp</h1>
      <h2 class="subtitle">Nuxt TodoApp</h2>
      <div>
        <input type="text" id="contents" name="content" />
        <button>Save</button>
        <button>Find</button>
      </div>
      <div>
        <ul>
          <li v-for="(todo, index) in todos" :key="index">
            <span>{{ todo.content }}</span>
            <span>{{ todo.createtime }}</span>
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
  date: () => {
    return {
      content: ''
    }
  },
  components: {
    Logo
  },
  computed: {
    ...mapState(['todos'])
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

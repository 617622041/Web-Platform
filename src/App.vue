<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  mounted () {
    this.handleSubmit({username: 'admin', password: 'admin'})
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ username, password }) {
      this.$store.dispatch('handleLogin', { username, password })
      // console.log(username)
      // this.handleLogin({ username, password }).then(res => {
      //   console.log(res['access_token'])
      // })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

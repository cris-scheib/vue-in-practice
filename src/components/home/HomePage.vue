<template>
  <div>
    <main>
      <div class="home-logo">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <div>
          <h1>{{ message }}</h1>
          <h4>{{ subMessage }}</h4>
        </div>
      </div>
      <ul>
        <li>
          <router-link to="/binding">Bindings</router-link>
        </li>
        <li>
          <router-link to="/slot">Slots</router-link>
        </li>
        <li>
          <router-link to="/props">Props</router-link>
        </li>
      </ul>
    </main>
    <footer class="center">
      <div class="essentials">
        <h3>Essenciais</h3>
        <ul>
          <li>
            <a href="https://vuejs.org" target="_blank" rel="noopener">Documentação</a>
          </li>
          <li>
            <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Fórum</a>
          </li>
        </ul>
      </div>
      <div class="eco">
        <h3>Ecossistema</h3>
        <ul>
          <li>
            <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
          </li>
          <li>
            <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
          </li>
          <li>
            <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
          </li>
          <li>
            <a href="https://getbootstrap.com/" target="_blank" rel="noopener">bootstrap</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      message: "Vue.js na prática",
      subMessage: "A estrutura JavaScript progressiva",
    };
  },
};
</script>

<!-- Adicionar o atributo "scoped" para limitar o CSS para apenas esta componente -->
<style scoped>
main {
  height: 65vh;
}

footer {
  background-color: #42b983;
  height: 35vh;
}

.home-logo {
  padding-top: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.eco {
  margin-left: 1.5em;
}

.essentials {
  margin-right: 1.5em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #42b983
}
footer a,
footer h3 {
  color: white;
}
</style>

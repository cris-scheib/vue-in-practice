<template>
  <div class="binding">
    <div class="container">
      <div class="row">
        <div class="col">
          <div>
            <div class="mb-3">
              <label for="textField" class="form-label"><strong>Entrada de texto</strong></label>
              <input type="text" class="form-control" id="textField" v-model="text">
            </div>
            <p>{{ text }}</p>
          </div>
        </div>
        <div class="col">
          <div>
            <p class="form-check-label mb-2">
              <strong>Select</strong>
            </p>
            <select class="form-select" v-model="selecionado">
              <option disabled value="">Selecione um valor</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Fullstack</option>
            </select>
            <p class="mt-2">Selecionado: {{ selecionado }}</p>
          </div>
        </div>
      </div>
      <div class="position-fixed bottom-0 end-0 p-3">
        <div :class="{ 'show': showToast }" class="toast" role="alert">
          <strong class="me-auto">Não era para clicar ai</strong>
          <button type="button" class="btn-close" @click="this.showToast = false"></button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div>
            <p class="form-check-label mb-2">
              <strong>Checkbox</strong>
            </p>
            <input class="form-check-input" type="checkbox" id="checkbox" v-model="checked">
            <label class="form-check-label" for="checkbox">
              <strong>Adicionar mais café</strong>
            </label>
            <p @click="this.showToast = true">{{ checked }}</p>
          </div>
        </div>
        <div class="col">
          <div class="multi">
            <p class="form-check-label mb-2">
              <strong>Multi Checkbox</strong>
            </p>
            <input type="checkbox" class="form-check-input" id="cafe" value="Café" v-model="escolhidos">
            <label class="form-check-label" for="cafe"><strong>Café</strong></label>
            <input type="checkbox" class="form-check-input" id="cha" value="Chá" v-model="escolhidos">
            <label class="form-check-label" for="cha"><strong>Chá</strong></label>
            <input type="checkbox" class="form-check-input" id="chimarrao" value="Chimarrão" v-model="escolhidos">
            <label class="form-check-label" for="chimarrao"><strong>Chimarrão</strong></label>
            <p>Escolhidos:
            <pre>{{ escolhidos }}</pre>
            </p>
            <div v-if="escolhidos.length">
              <p class="m-0" v-for="escolhido of escolhidos" :key="escolhido">Eu quero {{ escolhido }}!</p>
            </div>
            <div v-else>
              <p class="m-0">Eu não quero nada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BindingPage",
  data() {
    return {
      text: "Let's Rock",
      checked: true,
      showToast: false,
      escolhidos: ["Café"],
      selecionado: "Fullstack",
    };
  },
};
</script>
<style scoped>
.row {
  border: 1px solid white;
  height: 50vh;
  border-right: unset;
  border-left: unset;
}

.col:first-child {
  border-right: 1px solid white;
}

.col:last-child {
  border-left: 1px solid white;
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.field {
  padding: 2em;
}

.binding {
  background-color: #42b983;
  /* color: white; */
}

.form-check-label {
  padding-left: .3em;
}
.toast{
  display: flex;
  padding: .5em;
}
.multi .form-check-label {
  margin-right: 1em;
}
</style>
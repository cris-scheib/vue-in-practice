<template>
    <div class="row center">
        <div class="col-8 center mb-5 mt-5">
            <div v-for="(color, index) in customColors" :key="index" class="card-color" @click="removeColor(index)"
                :style="`background-color: ${color}`" title="Remover cor">
                <p>
                    {{ color }}
                </p>
            </div>
            <input type="color" id="new-color" @change="addColor()" class="hide" v-model="newColor">
            <label for="new-color" title="Adicionar cor">
                <div class="card-color white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </div>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        colors: Array
    },
    data() {
        return {
            customColors: this.colors,
            newColor: '#647eff'
        }
    },
    methods: {
        removeColor(index) {
            this.customColors.splice(index, 1);
        },
        addColor() {
            this.customColors.push(this.newColor);
        },
    },
    watch: {
        customColors() {
            this.$emit('update:colors', this.customColors)
        }
    }
};
</script>

<style scoped>
.card-color {
    padding: 1em 2em;
    margin-right: 0.5em;
    border-radius: 5px;
    cursor: pointer;
}

.card-color.white {
    border: 2px solid white;
    padding: 0.65em 2em;
}

.card-color p {
    color: white;
    margin: 0;
}

.card-color.white svg {
    height: calc(2em - 2px);
    color: white;
}

input.hide {
    visibility: hidden;
    width: 0;

}
</style>
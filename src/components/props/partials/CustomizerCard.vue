<template>
    <div class="row center">
        <div class="col-8 d-flex">
            <div v-for="color in colors" :key="color" class="card-color" 
            :style="`background-color: ${color}`">
                <p>
                    {{ color }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['colors'],
};
</script>

<style scoped>
.card-color {
    padding: 1em;
    margin: 1em;
}

.card-color p {
    color: white;
    margin: 0;
}
</style>
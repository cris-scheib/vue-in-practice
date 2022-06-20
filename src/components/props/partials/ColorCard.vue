<template>
    <div class="col-6">
        <div class="waves" :style="colors">
            <span>{{ color }}</span>
            <div class="liquid"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['color'],
    computed: {
        colors() {
            return {
                '--color': this.color,
            }
        }
    }
};
</script>

<style scoped>
.waves {
    position: relative;
    padding: 5em;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    height: 14em;
}

.waves span {
    position: relative;
    color: var(--color);
    font-size: 20px;
    font-family: Arial;
    letter-spacing: 3px;
    z-index: 1;
}

.waves .liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    height: 400px;
    background: var(--color);
    box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
    transition: .5s;
}

.waves .liquid::after,
.waves .liquid::before {
    content: '';
    width: 55em;
    height: 55em;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
}

.waves .liquid::before {

    border-radius: 45%;
    background: #213547;
    animation: animate 5s linear infinite;
}

.waves .liquid::after {
    border-radius: 40%;
    background: #21354780;
    animation: animate 10s linear infinite;
}

@keyframes animate {
    0% {
        transform: translate(-50%, -75%) rotate(0deg);
    }

    100% {
        transform: translate(-50%, -75%) rotate(360deg);
    }
}
</style>
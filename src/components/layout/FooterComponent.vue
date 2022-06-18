<template>
    <div class="footer">
        <p>Let's code</p>
        <!-- <img src="https://iconvulture.com/wp-content/uploads/2017/12/code.svg" class="code-svg" alt="Code"> -->
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.code-svg {
    width: 1.5em;
}

.footer {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 0.4em;
    width: calc(100% - 9em);
}

.footer p {
    background: -webkit-linear-gradient(315deg, #42d392, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    font-weight: bold;
    text-align: right;
}
</style>
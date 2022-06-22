<template>
    <div class="sidebar">
        <div class="sidebar-content">
            <nav class="nav flex-column">
                <router-link class="nav-link" to="/">Home</router-link>
                <router-link class="nav-link" to="/slot/coffee">Meu café</router-link>
                <router-link class="nav-link" to="/slot/desk">Minha mesa</router-link>
                <router-link class="nav-link" to="/props">Props</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.sidebar {
    width: 9rem;
    position: fixed;
    height: 100vh;
    background: linear-gradient(315deg, #213547 25%, #42b983);
}

.nav-link,
.nav-link:hover {
    color: white;
    padding: 1rem 1rem;
}

.nav-link.active {
    font-weight: bold;
}

.title {
    color: white;
    padding: 0.5em;
    font-size: 1.5em;
}

.btn-sidebar {
    position: absolute;
    right: 0em;
    top: 0em;
    background-color: #121212;
    border: unset;
    height: 54px;
    border-radius: unset;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
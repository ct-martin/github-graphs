<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md">
        <nuxt-link class="navbar-brand" to="/"><img src="/img/githubgraph-logo.svg" alt=""></nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="main-menu" class="collapse navbar-collapse">
            <ul class="navbar-nav flex-fill justify-content-end">
                <li class="nav-item">
                    <span :href="`https://github.com/${auth.user.login}`" target="_blank" class="navbar-text" v-if="auth.loggedIn" @click="log">@{{auth.user.login}}</span>
                    <span class="navbar-text" v-else @click="auth.login()">Log In</span>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            auth: this.$auth
        }
    },
    methods: {
        log(data) {
            console.dir(this.$auth.user);
            console.dir(this.$auth.getToken('github'));
        }
    }
}
</script>
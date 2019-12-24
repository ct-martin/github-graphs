<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md">
        <nuxt-link class="navbar-brand" to="/"><img src="/img/githubgraph-logo.svg" alt=""></nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="main-menu" class="collapse navbar-collapse">
            <ul class="navbar-nav flex-fill justify-content-end">
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/graph-generator">Generate graphs</nuxt-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/jrtechs/github-graphs/">View on GitHub</a>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/about">About</nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

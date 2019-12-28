<template>
    <div class="container home-page">
    <div class="row align-items-center text-white">
        <div class="col-lg-6">
            <div class="py-5">
                <h1 class="mb-3 font-weight-bold">What can I do here?</h1>
                <p>
                    Head over to the 'Generate graphs' page and enter
                    the username of a GitHub user. You can then select
                    what kind of graph to generate based on that user.
                </p>
                <p>
                    If you'd like to see how everything works, follow
                    the link to GitHub, where you can view everything
                    that went into making this functional.
                </p>
                <p>
                    If you're interested in knowing more about this
                    project, additional information can be found on
                    the About page.
                </p>
            </div>
            <div class="py-5">
                <nuxt-link to="/graph-generator" class="btn btn-lg btn-primary mr-2">Make a graph</nuxt-link>
                <a href="https://github.com/jrtechs/github-graphs/" target="_blank" class="btn btn-lg btn-secondary">View on Github</a>
            </div>
        </div>
        <div class="col-lg-6">
            <img src="img/home-image.png" alt="" class="img-fluid d-lg-none">
        </div>
    </div>
</div>
</template>

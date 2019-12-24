<template>
<div>
    <div class="container">
        <div class="row py-5">
            <div class="col-md-6 offset-md-3 text-center text-white">
                <h1 class="font-weight-bold">What is this?</h1>
                <p>This is an interactive website which allows you to make various graphs of information from
                the GitHub network. Currently the site generates three types of graphs-- the most popular and entertaining of which is the friends graph. The friends graph helps you visualize clusters of friends/collaborators on GitHub.This can be used to spot clusters within organizations and schools.</p>
                <p>This is an open source project, all the source code can be found on GitHub. New collaborators are always welcomed; look at our GitHub repository for contributing guidelines.</p>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-md-6 offset-md-3 text-center">
                <h2 class="font-weight-bold">Why did you make this?</h2>
                <p>This project was completed in 24 hours for participation in <a class="plink" href="https://brickhack.io/">BrickHack V</a> at the Rochester Institute of Technology. We hope that this project will make people more interested in learning about big data analytics. The visual aspect of this website makes learning about topics such as clustering and graph databases more intuitive.</p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col">
                <h2 class="h1 font-weight-bold text-center">Developers</h2>
            </div>
        </div>
        <div class="row py-4">
            <div class="col-md-4" v-for="developer in developers" v-bind:key="developer.id">
                <div class="card">
                    <img class="card-img" :src="developer.avatar" :alt="developer.name">
                    <div class="card-body">
                        <h3 class="card-title">{{ developer.name }}</h3>
                        <p>{{ developer.about }}</p>
                        <div class="d-flex text-decoration-none">
                            <a class="mr-3" :href="developer.github">
                                <img src="img/github-circle.svg" alt="">
                            </a>
                            <a class="mr-3" :href="developer.linkedin">
                                <img src="img/linkedin-box.svg" alt="">
                            </a>
                            <a :href="`mailto:${developer.email}`">
                                <img src="img/email.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            developers: [
                {
                    id: 0,
                    name: "Jeff",
                    avatar: "https://avatars0.githubusercontent.com/u/13894625?s=400&v=4",
                    about: "Managed a majority of the work with the backend, pulling data from GitHub and generating the graphs with visJS.",
                    github: "https://github.com/jrtechs",
                    linkedin: "https://www.linkedin.com/in/jrtechs",
                    email: "jeffery@jrtechs.net",
                },
                {
                    id: 1,
                    name: "Bryce",
                    avatar: "https://avatars0.githubusercontent.com/u/32306409?s=400&v=4",
                    about: "Worked on pulling API data from GitHub to create the mini-profile display and some graph work.",
                    github: "https://github.com/theshmurph",
                    linkedin: "https://www.linkedin.com/in/theshmurph",
                    email: "brshmurphy@gmail.com",
                },
                {
                    id: 2,
                    name: "Alex",
                    avatar: "https://avatars3.githubusercontent.com/u/32624140?s=400&v=4",
                    about: "Worked on the front-end design of the website, responsible for a majority of the html and css elements.",
                    github: "https://github.com/CetaceanNation",
                    linkedin: "https://www.linkedin.com/in/a-noel",
                    email: "axn5966@rit.edu",
                }
            ]
        }
    } 
}
</script>
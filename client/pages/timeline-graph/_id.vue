<template>
        <div class="container-fluid container-xl">
            <div class="row pt-5">
                <div class="col-lg-3 col-md-4 col-12"></div>
                <div class="col-lg-9 col-md-8 col-12">
                    <div class="d-flex align-items-baseline justify-content-between my-4">
                        <div class="d-flex align-items-center">
                            <svg class="mr-3" width="36" height="36" viewBox="0 0 36 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM18 5.4C20.988 5.4 23.4 7.812 23.4 10.8C23.4 13.788 20.988 16.2 18 16.2C15.012 16.2 12.6 13.788 12.6 10.8C12.6 7.812 15.012 5.4 18 5.4ZM18 30.96C15.8613 30.96 13.7559 30.4308 11.8715 29.4194C9.98707 28.4081 8.3822 26.9462 7.2 25.164C7.254 21.582 14.4 19.62 18 19.62C21.582 19.62 28.746 21.582 28.8 25.164C27.6178 26.9462 26.0129 28.4081 24.1285 29.4194C22.2441 30.4308 20.1387 30.96 18 30.96Z"
                                    fill="white" />
                            </svg>
                            <h1 class="text-white font-weight-bold">Repo timeline</h1>
                        </div>
                        <div>
                            <a id="FriendsGraphLink" class="text-light" href="#">View friends graph</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pb-4">
                <div class="col-lg-3 col-md-4 col-12">
                    <div id="profileGen"></div>
                </div>
                <div class="col-lg-9 col-md-8 col-12">
                    <div class="card shadow mb-5">
                        <h2 id="graphLoading" class="my-0"></h2>
                        <div id="myGraph" class="w-100"></div>
                    </div>
                    <div id="repositoryInformation" class="w-100"></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    head() {
        return {
            script: [
                { src: 'js/githubAPI.js' },
                { src: 'js/profileTimeLine.js' },
                { src: 'js/profileGen.js' },
                { src: 'js/utilities.js' },
                { src: 'js/vis/vis.js' }
            ],
            link: [
                { href: 'js/vis/vis-timeline-graph2d.min.css', rel: 'stylesheet', type: 'text/css' }
            ]
        };
    }
}
</script>

<script>
/*
    function createGraphs(username) {
        createProfileTimeLine(username, "myGraph");
        profileGen(username, "profileGen");
    }

    if (findGetParameter("name") !== null) {
        createGraphs(findGetParameter("name"))
    }

    $('#FriendsGraphLink').attr("href", "FriendsGraph.html?name=" + findGetParameter("name"));
    */
</script>

<style type="text/css">
    .vis-timeline {
        border: none;
        font-size: 16px;
        color: var(--white);
        background-color: var(--dark);
    }
    .vis-item {
        font-size: 16px;
        color: var(--dark);
        background-color: var(--white);
        box-sizing: border-box;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.06);
        border-color: transparent;
    }
    .vis-item.vis-box {
        border-radius: 2px;
        padding: 0;
        border: none;
    }
    .vis-item .vis-item-content {
        padding: 8px 10px;
    }
    .vis-item.vis-box.vis-selected {
        border: 2px solid var(--primary);
    }
    .vis-item.vis-line {
        border-width: 2px;
        border-color: var(--primary)
    }
    .vis-item.vis-dot {
        border-color: var(--primary);
    }
    .vis-item.vis-selected {
        border-color: var(--primary);
        background-color: var(--white);
        box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.14);
    }
    .vis-time-axis .vis-text {
        color: var(--white);
        padding-top: 8px;
        padding-left: 16px;
    }
    .vis-time-axis .vis-grid.vis-minor {
        border-width: 2px;
        border-color: rgba(255, 255, 255, .29);
    }
    .vis-labelset .vis-label {
        color: var(--white);
    }
    .vis-time-axis .vis-grid.vis-major {
        border-width: 1px;
        border-color: rgba(255, 255, 255, .5);
    }
</style>
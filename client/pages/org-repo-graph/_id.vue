<template>
        <div class="container-fluid container-xl">
            <div class="row">
                <div class="col">
                    <div class="d-flex align-items-baseline justify-content-between my-4">
                        <div class="d-flex align-items-center">
                            <svg class="mr-3" width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 31V11C0 10.5093 0.19491 10.0388 0.541852 9.69185C0.888795 9.34491 1.35935 9.15 1.85 9.15H9.25V2C9.25 0.895432 10.1454 0 11.25 0H25.75C26.8546 0 27.75 0.89543 27.75 2V9.15H35.15C35.6407 9.15 36.1112 9.34491 36.4581 9.69185C36.8051 10.0388 37 10.5093 37 11V31H22.2V21.75H14.8V31H0ZM14.8 3.5V8.8H22.2V3.5H14.8ZM3.7 27.3H11.1V21.75H3.7V27.3ZM3.7 18.05H11.1V12.5H3.7V18.05ZM25.9 27.3H33.3V21.75H25.9V27.3ZM25.9 18.05H33.3V12.5H25.9V18.05ZM14.8 18.05H22.2V12.5H14.8V18.05Z" fill="white"/>
                            </svg>
                            <h1 class="text-white font-weight-bold">Organization chart</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-9">
                    <div class="row pb-4">
                        <div class="col-12">
                            <div id="organizationInfo"></div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-body" style="font-size: 14px;">
                                    <h3 class="card-title">Repositories</h3>
                                    <table class="table table-sm" id="dataTable">
                                        <thead>
                                        <tr>
                                            <th class="border-top-0">Name</th>
                                            <th class="border-top-0">Forks</th>
                                        </tr>
                                        </thead>
                                        <tbody id="repositoryTable"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="card shadow text-white bg-dark border-white">
                                <div id="graphLoading"></div>
                                <div id="myGraph" class="w-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div id="profileGen"></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    head() {
        return {
            script: [
                { src: '/js/githubAPI.js' },
                { src: '/js/friendsGraph.js' },
                { src: '/js/createOrgRepoGraph.js' },
                { src: '/js/profileGen.js' },
                { src: '/js/utilities.js' },
                { src: '/js/createOrgTable.js' },
                { src: '/js/createOrgInfo.js' },
                { src: 'https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.js' },
                { src: '/js/vis/vis.js' }
            ],
            link: [
                { href: 'js/vis/vis-network.min.css', rel: 'stylesheet', type: 'text/css' }
            ]
        };
    }
}
</script>

<script>
/*
    function createGraphs(orgname) {
        options.width = $("#myGraph").width() + "px";
        options.height = "600px";

        createOrgRepoGraph(orgname, "myGraph", "graphLoading");
        createOrgTable(orgname, 'repositoryTable');
        createOrgInfo(orgname, 'organizationInfo')
    }

    if (findGetParameter("name") !== null) {
        createGraphs(findGetParameter("name"))
    }
    */
</script>
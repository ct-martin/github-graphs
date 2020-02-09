<template>
    <div class="card shadow-sm" style="font-size: 16px;">
        <div class="card-img-top" style="position: relative;">
            <img :src="user.avatar_url" :alt="user.avatar_url" class="img-fluid"/>
            <div class="actions">
                <nuxt-link :to="`/friends-graph/${user.login}`" class="btns" title="View Friends Graph">
                    <svg viewBox="0 0 24 24">
                        <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                    </svg>
                </nuxt-link>
                <nuxt-link :to="`/timeline-graph/${user.login}`" class="btns" title="View Timeline Graph">
                    <svg viewBox="0 0 24 24">
                        <path d="M2,2H4V20H22V22H2V2M7,10H17V13H7V10M11,15H21V18H11V15M6,4H22V8H20V6H8V8H6V4Z" />
                    </svg>
                </nuxt-link>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title mb-1" v-if="user.name">{{user.name}}</h5>
            <a :href="user.html_url" class="card-subtitle text-muted">{{user.login}}</a>
            <p class="my-2" v-if="user.bio">{{user.bio}}</p>
            <ul class="list-unstyled">
                <a :href="user.blog"><li>{{user.blog}}</li></a>
                <li v-if="user.email">Email: {{user.email}}</li>
                <li v-if="user.location">Location: {{user.location}}</li>
                <li v-if="user.company">Company: {{user.company}}</li>
            </ul>
            <hr />
            <ul class="list-unstyled">
                <li>Followers: {{user.followers}}</li>
                <li>Following: {{user.following}}</li>
                <li>Repositories: {{user.public_repos}}</li>
            </ul>
            <div v-if="orgs && orgs.length > 0">
                <hr>
                <p>Organizations</p>
                <a v-for="org in orgs" :href="`/org-repo-graph/${org.login}`">
                    <img :src="org.avatar_url" class="img-fluid" style="max-width:35px"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            default: undefined
        },
        orgs: {
            type: Array,
            default: []
        }
    }
}
</script>
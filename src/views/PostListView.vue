<template>
<LoaderComponent v-if="!isLoaded"/>
<div v-else>
    <h1 class="title">Listado de posts</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            <router-link :to="{name: 'PostDetail', params: {id: post.id}}">{{ post.title }}</router-link>
        </li>
    </ul>
</div>
</template>

<script setup>
import PostsRequest from "@/services/PostsRequest";
import { onMounted, ref } from "vue";
import LoaderComponent from "@/components/LoaderComponent.vue";

const postsRequest = new PostsRequest();
const posts = postsRequest.getPosts();
const isLoaded = ref(false);

onMounted(async () => {
    isLoaded.value = false;
    await postsRequest.fetchAll();
    isLoaded.value = true;
});
</script>

<style scoped lang="scss">
.title {
    margin-bottom: 20px;
}

.post-list {
    list-style-type: none;
    width: 80vw;

    li {
        border: thin solid #ccc;
        
        a {
            padding: 10px;
            color: $primaryColor;
            text-decoration: none;
            display: block;
            width: 100%;
        }

        a:hover {
            background-color: $primaryColor;
            color: white;
        }
    }
}
</style>
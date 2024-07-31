<template>
<LoaderComponent v-if="!isLoaded"/>
<div v-else class="post-container">
    <div class="post-card">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
    <router-link :to="{name: 'PostList'}">Volver al listado</router-link>
</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import LoaderComponent from "@/components/LoaderComponent.vue";
import PostsRequest from "@/services/PostsRequest";

const postsRequest = new PostsRequest();
const post = postsRequest.getPost();
const isLoaded = ref(false);

onMounted(async () => {
    isLoaded.value = false;
    await postsRequest.fetchById(useRoute().params.id);
    isLoaded.value = true;
});

</script>

<style scoped lang="scss">
.post-container {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
        margin-top: 20px;
        color: black;
        text-decoration: none;
    }
    a:hover {
        color: $primaryColor;
        text-decoration: underline;
    }
}

.post-card {
    background-color: $backgroundPostCard;
    padding: 20px;
    border-radius: 15px;

}
</style>
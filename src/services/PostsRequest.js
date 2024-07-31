import { ref } from "vue";

class PostsRequest {
  posts;
  post;
  URL;

  constructor() {
    this.posts = ref([]);
    this.post = ref({});
    this.URL = "https://jsonplaceholder.typicode.com/posts";
  }

  getPosts() {
    return this.posts;
  }

  getPost() {
    return this.post;
  }

  async fetchAll() {
    try {
      const response = await fetch(this.URL);
      const json = await response.json();
      this.posts.value = await json;
    } catch (err) {
      console.error(err);
    }
  }

  async fetchById(id) {
    try {
      const response = fetch(`${this.URL}/${id}`);
      const json = (await response).json();
      this.post.value = await json;
    } catch (err) {
      console.error(err);
    }
  }
}

export default PostsRequest;

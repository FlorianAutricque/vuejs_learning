<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading ...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    //PROPS
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw new Error("No data available");
        }
        posts.value = await data.json();
      } catch (error) {
        error.value = error.message;
        console.log(error.value);
      }
    };

    load();

    return { posts, error };
  },
};
</script>

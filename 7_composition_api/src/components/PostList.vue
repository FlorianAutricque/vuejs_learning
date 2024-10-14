<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}

      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    // onMounted(() => console.log("comp mounted"));
    // onUnmounted(() => console.log("comp unmounted"));
  },
};
</script>

<style></style>

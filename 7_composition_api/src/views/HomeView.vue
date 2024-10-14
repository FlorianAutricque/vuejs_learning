<template>
  <div class="home">
    <h1>Home</h1>

    <PostList :posts="posts" />
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
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, autem! Quis perferendis consectetur eum recusandae, quia sapiente assumenda laboriosam tempora illo adipisci quaerat maxime doloribus voluptatibus eius ipsum illum nam harum cumque ea ducimus odit eos rem debitis. Commodi voluptatibus ullam repudiandae! Facere eos similique ut quasi itaque autem, quae ipsum impedit doloremque eveniet unde quo officiis animi ad dolore quos, error harum hic doloribus id! Nobis officia nisi officiis eos, asperiores inventore rerum impedit nihil nesciunt voluptatem a, blanditiis corrupti atque, hic veritatis deserunt eum? Culpa, repudiandae perspiciatis dolorem voluptatibus fugiat placeat, quidem at maxime nemo repellendus eligendi cum.",
        id: 1,
      },
      { title: "Top 5 css tips", body: "lorem", id: 2 },
    ]);

    return { posts };
  },
};
</script>

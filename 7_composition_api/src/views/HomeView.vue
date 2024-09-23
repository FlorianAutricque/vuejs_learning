<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <h2>FIRST STEP USING REF</h2> -->
    <!-- <p>My name is {{ name }} and my age is {{ age }}</p> -->
    <!-- <button @click="handleClick">Click me</button>
    <button @click="age++">Add age</button> -->
    <!-- <input type="text" v-model="name" /> -->

    <!-- <h2>REF</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">update ninja one</button>

    <h2>REACTIVE</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">update ninja two</button> -->

    <!-- <h2>COMPUTED</h2>
    <input type="text" v-model="search" />
    <p>search term = {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>

    <button @click="handleClick">Stop watch</button> -->

    <h2>PROPS</h2>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import { ref, reactive, computed, watch, watchEffect } from "vue";
export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    //this are not reactive variables (whitout ref), they wont update in the template like when we were using in the data() function

    //FIRST STEP LEARNING REF
    // const name = ref("flo");
    // const age = ref(30);

    // const handleClick = () => {
    //   name.value = "luigi";
    // };

    // return { name, age, handleClick };

    //REF VS REACTIVE
    // const ninjaOne = ref({ name: "mario", age: 30 });
    // const ninjaTwo = reactive({ name: "luigi", age: 35 });

    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 40;
    // };

    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 40;
    // };

    // return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };

    //COMPUTED
    // const search = ref("");
    // const names = ref(["mario", "luigi", "toad", "bowser", "koopa", "peach"]);

    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value));
    // });

    //WATCH

    // const stopWatch = watch(search, () => {
    //   console.log("watch fn");
    // });

    // const stopEffect = watchEffect(() => {
    //   console.log("watcheffect fn");
    // });

    // const handleClick = () => {
    //   stopWatch();
    //   stopEffect();
    // };

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
    // return { names, search, matchingNames, handleClick };
  },
};
</script>

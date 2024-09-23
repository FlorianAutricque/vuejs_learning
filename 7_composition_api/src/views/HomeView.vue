<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add age</button>

    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  setup() {
    //this are not reactive variables (whitout ref), they wont update in the template like when we were using in the data() function

    const name = ref("flo");
    const age = ref(30);

    const handleClick = () => {
      name.value = "luigi";
    };

    return { name, age, handleClick };
  },
};
</script>

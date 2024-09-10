<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-if="showModal">
      <!-- here @close is the event trigger from the child comp with emit -->
      <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal" /> -->
      <Modal theme="sale" @close="toggleModal">
        <!-- v-slot here is used when we have a specific structure and we want to pass something in out child comp outside the <slot> -->

        <template v-slot:modal1>
          <h1>Sign up</h1>
          <p>For fun</p>
        </template>

        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More infos</a>
        </template>
      </Modal>
    </div>

    <div v-if="showModal2">
      <Modal @close="toggleModalTwo">
        <template v-slot:modal2>
          <h1>Sign up to the news later</h1>
          <p>For updates and promo codes</p>
        </template>

        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More infos</a>
        </template>
      </Modal>
    </div>
    <p>Welcome...</p>
    <!-- shift here is a modifier. To modify the event listener -->
    <button @click.shift="toggleModal">Show modal (shift)</button>
    <button @click="toggleModalTwo">Show modal 2</button>

    <!-- HOW TO USE REFS -->
    <!-- <input type="text" ref="name" />
    <button @click="handleClick">Click</button> -->
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      title: "My first Vue app",
      // header: "Sign up for the Giveaway!",
      // text: "Sign up",
      showModal: false,
      showModal2: false,
    };
  },
  components: { Modal },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    //HOW TO USE REFS
    // handleClick() {
    //   console.log(this.$refs.name);
    // this.$refs.name.classList.add("active");
    // this.$refs.name.focus();
    // },
    toggleModalTwo() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>

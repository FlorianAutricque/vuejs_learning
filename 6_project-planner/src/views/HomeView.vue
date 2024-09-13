<template>
  <div>
    <div class="home">home</div>
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        {{ project.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

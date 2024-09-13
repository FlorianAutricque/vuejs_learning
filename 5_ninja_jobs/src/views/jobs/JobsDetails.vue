<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <!-- This will give the :id that is in the url -->
    <p>The job id is: {{ id }}</p>
    <p>The job detail: {{ job.details }}</p>
  </div>
  <div v-else>
    <p>Lodaing job details...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style></style>

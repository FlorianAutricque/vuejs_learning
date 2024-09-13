<template>
  <div>
    <h1>Jobs details</h1>
    <!-- This will give the :id that is in the url -->
    <p>The job id is: {{ id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style></style>

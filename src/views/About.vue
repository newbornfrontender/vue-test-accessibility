<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$announcer.set('Notification: A surprising announcement!')
    }, 10000)
  }
}
</script>

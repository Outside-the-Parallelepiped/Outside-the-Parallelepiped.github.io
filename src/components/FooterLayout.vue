<template>
  <div className="footer-container">
    <footer>
      <span className="copyright"> &copy; {{ currentYear }} Outside the Parallelepiped LLC </span>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FooterLayout',
  data: function () {
    return {
      currentDate: new Date(),
    }
  },
  computed: {
    currentYear: function () {
      return this.currentDate.getFullYear()
    },
  },
}
</script>

<style>
.footer-container {
  text-align: center;
  width: 100%;
}
</style>

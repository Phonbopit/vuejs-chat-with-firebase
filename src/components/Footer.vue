<template>
 	<footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>Powered by <a href="https://devahoy.com" target="_blank">{{ name }}</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
	export default {
		name: 'appFooter',
    props: ['name']
	}
</script>

<style>
	
</style>
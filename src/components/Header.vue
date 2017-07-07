<template>
  <section class="hero is-success">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		name: 'appHeader',
		props: ['title', 'subtitle']
	}
</script>

<style>
	
</style>
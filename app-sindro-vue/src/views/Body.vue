<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import PWABadge from '@/components/PWABadge.vue'

import vue_svg  from '../assets/vue.svg'

</script>


<template>
	<div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/favicon.svg" class="logo" alt="app-sindro-vue logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img :src=vue_svg class="logo vue" alt="Vue logo" />
        </a>
    </div>
	<HelloWorld msg="app-sindro-vue" />
	<PWABadge />
</template>


<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
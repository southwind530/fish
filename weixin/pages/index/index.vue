<template>
	<view class="container">
		{{hello}}
	</view>
</template>

<script>
import { ref } from "vue"
	const hello = ref("hello world")
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>

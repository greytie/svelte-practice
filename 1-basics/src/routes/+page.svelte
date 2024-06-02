<script lang="ts">
	import Timer from '../lib/Timer.svelte'
</script>

<h1>1-Basics</h1>
<div class="counter-container">
	<Timer></Timer>
</div>

<style>
	h1 {
		font-family: 'Glacial Indifference Regular';
	}

	.counter-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>

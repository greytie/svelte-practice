<script lang="ts">
	import Timer from '../lib/Timer.svelte'
</script>

<h1>1-Basics</h1>
<div class="counter-container">
	<div class="stacked-timers">
		<Timer timerDuration={5}></Timer>
		<Timer timerDuration={60}></Timer>
		<Timer timerDuration={30}></Timer>
	</div>	
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

	.stacked-timers {
		display: flex;
		flex-direction: column;
		gap: 6em;
	}
</style>

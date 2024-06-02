<script lang="ts">
	let counter: number = 30;
	let currentTimeoutID: number;

	async function startCounterHandler() {
		counter = 30;
		for (let i = 0; i < 30; i++) {
			await new Promise((f) => currentTimeoutID = setTimeout(f, 1000));
			console.log(currentTimeoutID);
			counter--;
			console.log(counter);
		}
	}

	function cancelCounter() {
		clearTimeout(currentTimeoutID);
		counter = 30;
	}
</script>

<h1>1-Basics</h1>
<div class="counter-container">
	<div>Counter: {counter}</div>
	<button on:click={startCounterHandler}>Start counter</button>
	<button on:click={cancelCounter}>Cancel counter</button>
</div>



<style>
	.counter-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>

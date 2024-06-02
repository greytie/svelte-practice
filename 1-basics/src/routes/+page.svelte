<script>
	let counter = 0;

	async function startCounterHandler() {
		counter = 0;
		for (let i = 0; i < 30; i++) {
			await new Promise((f) => setTimeout(f, 1000));
			counter++;
			console.log(counter);
		}
	}
</script>

<h1>1-Basics</h1>
<div class="counter-container">
	<div>Counter: {counter}</div>
	<button on:click={startCounterHandler}>Start counter</button>
</div>



<style>
	.counter-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>

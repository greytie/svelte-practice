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

<div class="counter-element">
	<div class="counter-display">Counter: {counter}</div>
	<div class="button-container">
		<button on:click={startCounterHandler}>Start counter</button>
		<button on:click={cancelCounter}>Cancel counter</button>
	</div>	
</div>

<style>
	.counter-element {
		display: flex;
		flex-direction: column;
		font-size: 8em;
	}

	.counter-display {
		text-transform: uppercase;
	}

	.button-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 20px;
	}

	button {
		padding: 10px;
		background-color: white;
		border-radius: 12px;
	}

	button:hover {
		background-color: lightgray;
		cursor: pointer;
	}
</style>

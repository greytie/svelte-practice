<script lang="ts">
	let counter: number = 30;
	let currentTimeoutID: number;
	let totalTimesRun = 0;

	async function startCounterHandler() {
		counter = 30;
		for (let i = 0; i < 30; i++) {
			await new Promise((f) => currentTimeoutID = setTimeout(f, 1000));
			console.log(currentTimeoutID);
			counter--;
			console.log(counter);
		}
		totalTimesRun++;
	}

	function cancelCounter() {
		clearTimeout(currentTimeoutID);
		counter = 30;
	}
</script>

<div class="counter-element">
	<div class="counter-display">Timer: {counter}</div>
	<div class="times-run-display">
		runs: {totalTimesRun}
	</div>
	<div class="button-container">
		<button on:click={startCounterHandler}>Start</button>
		<button on:click={cancelCounter}>Cancel</button>
	</div>	
</div>

<style>
	/*
		Fonts from: https://www.fontsquirrel.com/tools/webfont-generator
	*/
	@font-face {
		font-family: 'Glacial Indifference Bold';
		src: url('/fonts/glacialindifference-bold-webfont.woff2');
	}

	@font-face {
		font-family: 'Glacial Indifference Regular';
		src: url('/fonts/glacialindifference-regular-webfont.woff2');
	}

	.counter-element {
		display: flex;
		flex-direction: column;
	}

	.counter-display {
		font-size: 10em;
		font-family: 'Glacial Indifference Regular';
		text-transform: uppercase;
	}

	.times-run-display {
		display: flex;
		flex-direction: row;
		justify-content: center;
		font-family: 'Glacial Indifference Regular';
		text-transform: uppercase;
		padding: 20px;
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
		font-size: 1.2rem;
		font-family: 'Glacial Indifference Regular';
		text-transform: capitalize;
	}

	button:hover {
		background-color: black;
		color: white;
		cursor: pointer;
	}
</style>

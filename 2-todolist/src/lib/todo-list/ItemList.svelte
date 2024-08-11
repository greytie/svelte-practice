<script lang="ts">
	export let items: any[]
</script>

<div>
	{#each items as item}
		<div>
			<input type="checkbox"/>
			<label for="An item">{item.label}</label>
		</div>
	{/each}
</div>
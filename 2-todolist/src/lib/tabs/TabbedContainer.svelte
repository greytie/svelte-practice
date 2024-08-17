<script lang="ts">
	import type { Tab } from './tab';

	export let tabs: Tab[] = [];
	export let activeTabID = 1;
	function selectTab(tabID: number) {
		activeTabID = tabID
	}
</script>

<ol>
	{#each tabs as tab}
		<li class={activeTabID === tab.id ? 'active' : ''}>
			<button on:click={() => selectTab(tab.id)}>{tab.label}</button>
		</li>
	{/each}
</ol>
{#each tabs as tab}
	{#if activeTabID === tab.id}
		<div class="tab-container">
			Content {tab.label}
		</div>
	{/if}
{/each}

<style>
	.tab-container {
		padding: 30px;
		border: 1px solid black;
		border-radius: 0 0 5px 5px;
		border-top: 0;
	}

	ol {
		display: flex;
		flex-direction: row;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
		border-bottom: 1px solid black;
	}

	button {
		border: none;
		display: block;
		padding: 0.5rem 1rem;
		cursor: pointer;
		background-color: white;
		margin: 0px;
		margin-bottom: -1px;
		width: 120px;
	}

	li:not(.active) > button:hover {
		background-color: white;
		text-decoration: underline;
	}

	li.active > button {
		font-weight: bold;
		border: 1px solid black;
		border-bottom: 1px solid white;
	}
</style>


<script>
	import Day from './Day.svelte';
	let name;
	let date;
	let dates = JSON.parse(localStorage.getItem('saved_dates') || '[]').map(({date, name}) => {
		return {
			name,
			date: new Date(date),
		}
	});
	function save() {
		localStorage.setItem('saved_dates', JSON.stringify(dates));
	}
	function handleAddDate(){
		if (!name || !date) return;
		dates = [...dates, {date: new Date(date), name}];
		date = null;
		name = '';
		save();
	}
	function removeDate(index) {
		dates = [...dates.filter(d => d !== dates[index])];
		save();
	}
</script>

<style>
	h1 { color: purple }
	input { display: block }
	ul {
		display: flex;
		list-style-type: none;
		padding: 0;
	}
</style>

<h1>Days since anything</h1>

<input type="date" id="date" bind:value={date}>
<input type="text" id="name" bind:value={name}>
<button on:click="{handleAddDate}">Add date</button>
<ul>
{#each dates as item, index }
	<Day {...item } removeDate={() => removeDate(index)}></Day>
{/each}
</ul>
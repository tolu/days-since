<script>
	import {
		differenceInCalendarMonths,
		differenceInCalendarYears,
		differenceInCalendarWeeks,
		differenceInCalendarDays,
	} from 'date-fns';
	let name;
	let date;
	let dates = JSON.parse(localStorage.getItem('saved_dates') || '[]').map(({date, name}) => {
		return {
			name,
			date: new Date(date),
		}
	});
	function handleAddDate(){
		dates = [...dates, {date: new Date(date), name}];
		localStorage.setItem('saved_dates', JSON.stringify(dates));
	}
</script>

<style>
	h1 {
		color: purple;
	}
	input {
		display: block;
	}
	ul {
		display: flex;
		list-style-type: none;
		padding: 0;
	}
	li {
		flex-grow: 1;
	}
</style>

<h1>Days since anything</h1>

<input type="date" id="date" bind:value={date}>
<input type="text" id="name" bind:value={name}>
<button on:click="{handleAddDate}">Add date</button>
<ul>
{#each dates as item }
	<li>
		<h4>{item.name}</h4>
		<p>Years { differenceInCalendarYears(new Date(), item.date) }</p>
		<p>Months { differenceInCalendarMonths(new Date(), item.date) }</p>
		<p>Weeks { differenceInCalendarWeeks(new Date(), item.date) }</p>
		<p>Days { differenceInCalendarDays(new Date(), item.date) }</p>
	</li>
{/each}
</ul>
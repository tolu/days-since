<script>
	import {
		differenceInYears,
		differenceInMonths,
		differenceInWeeks,
		differenceInDays,
		isBefore,
		addYears,
		addMonths,
		addWeeks,
	} from 'date-fns';
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
	function today() {
		return new Date((new Date()).toISOString().substr(0, 10));
	}
	function removeDate(index) {
		dates = [...dates.filter(d => d !== dates[index])];
		save();
	}
	function getHumanDateDiff(date) {
		const isPastDate = isBefore(date, today());
		const suffix = isPastDate ? 'ago' : 'left';

		const weekDiff = differenceInWeeks(today(), date);
		if (Math.abs(weekDiff) < 8) {
			const days = differenceInDays(today(), addWeeks(date, weekDiff))
			return `${Math.abs(weekDiff)} weeks and ${Math.abs(days)} days ${suffix}`;
		}
		const yearDiff = differenceInYears(today(), date);
		const dateYearCorrected = addYears(date, yearDiff);
		const monthDiff = differenceInMonths(today(), dateYearCorrected);
		const dateMonthCorrected = addMonths(dateYearCorrected, monthDiff)
		const dayDiff = differenceInDays(today(), dateMonthCorrected);
		return `${Math.abs(yearDiff)} years and ${Math.abs(monthDiff)} months and ${Math.abs(dayDiff)} days ${suffix}`.replace(/0 years and |0 months and /, '');
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
	li {
		flex-basis: 33%;
		border-radius: 5px;
		border: 1px solid olivedrab;
		padding: 5px;
	}
</style>

<h1>Days since anything</h1>

<input type="date" id="date" bind:value={date}>
<input type="text" id="name" bind:value={name}>
<button on:click="{handleAddDate}">Add date</button>
<ul>
{#each dates as item, index }
	<li>
		<h4>{item.name}</h4>
		<p>{ getHumanDateDiff(item.date) }</p>
		<button title="remove" on:click={() => removeDate(index)}>🗑</button>
	</li>
{/each}
</ul>
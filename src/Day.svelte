<script>
  import {getHumanDateDiff} from './date-utils.js';
  import {format} from 'date-fns';
  export let name;
  export let date;
  export let removeDate;
</script>

<li>
  <small>{ format(date, 'yyyy-MM-dd') }</small>
  <br />
  <strong>{name}</strong>
  <p>{ getHumanDateDiff(date) }</p>
  <button title="remove" on:click={() => removeDate()}>🗑</button>
</li>

<style>
	li {
		flex-basis: 33%;
		border-radius: 5px;
		border: 1px solid olivedrab;
		padding: 5px;
	}
</style>
<script>
  import {getHumanDateDiff} from './date-utils.js';
  export let name;
  export let date;
  export let removeDate;
</script>

<li>
  <h4>{name}</h4>
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
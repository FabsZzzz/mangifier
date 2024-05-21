<script lang="ts">
	import type { Result } from './result';

	export let result: Result | null;
</script>

{#if result}
	<div class="flex w-full grid-cols-[content_1fr] flex-col gap-6 align-top sm:grid">
		<img
			class="col-start-1 row-start-1 h-[400px] w-full rounded-2xl border-4 border-primary object-cover sm:h-[500px] sm:w-[400px]"
			src={result.image}
			alt="Mangoes leaves uploaded by user"
		/>
		<div class="col-start-2 row-start-1 flex flex-col gap-4 self-start">
			<div class="flex justify-between gap-4 sm:justify-start">
				<p class="text-4xl">{result.label}</p>
				<p class="text-3xl sm:text-4xl">{Math.round(result.score * 100 * 100) / 100}%</p>
			</div>
			<p class="text-lg">
				{result.description}
			</p>
		</div>
	</div>
	{#if result.preventions}
		<div class="flex flex-col gap-4">
			<p class="text-3xl font-bold">Preventions</p>
			{#each result.preventions as item}
				<ul>
					<p class="text-lg font-semibold">{item.title}</p>
					<p>
						{item.description}
					</p>
				</ul>
			{/each}
		</div>
	{/if}
{/if}

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { getResult } from '$lib/models/result';
	import { PrinterIcon } from 'lucide-svelte';
	export let data;

	let result = data.result;

	const entity =
		result === null ? null : getResult(result?.label!, result?.score!, result?.imageUrl!);
</script>

{#if entity}
	<div class="flex flex-col gap-2">
		<div class="flex w-full grid-cols-[content_1fr] flex-col gap-6 align-top sm:grid">
			<img
				class="col-start-1 row-start-1 h-[400px] w-full rounded-2xl border-4 border-primary object-cover sm:h-[500px] sm:w-[400px]"
				src={entity.image}
				alt="Mangoes leaves uploaded by user"
			/>
			<div class="col-start-2 row-start-1 flex flex-col gap-4 self-start">
				<div class="flex justify-between gap-2">
					<div class="flex justify-between gap-4 sm:justify-start">
						<p class="text-4xl">{entity.label}</p>
						<p class="text-4xl">{Math.round(entity.score * 100 * 100) / 100}%</p>
					</div>
					<Button variant="ghost">
						<PrinterIcon></PrinterIcon>
					</Button>
				</div>
				<p class="text-lg">
					{entity.description}
				</p>
			</div>
		</div>
		{#if entity.preventions}
			<div class="flex flex-col gap-4">
				<p class="text-3xl font-bold">Preventions</p>
				{#each entity.preventions as item}
					<ul>
						<p class="text-lg font-semibold">{item.title}</p>
						<p>
							{item.description}
						</p>
					</ul>
				{/each}
			</div>
		{/if}
	</div>
{:else}
	<p class="m-8 text-center">No available data</p>
{/if}

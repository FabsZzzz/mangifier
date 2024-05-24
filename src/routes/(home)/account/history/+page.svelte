<script>
	import { onMount } from 'svelte';
	import { labels, toPercentString } from '$lib/utils/helper';
	import { SearchInput } from '$lib/components/ui/search-input';
	import { DatePicker } from '$lib/components/ui/date-picker';
	import { CalendarDate } from '@internationalized/date';
	import { Button } from '$lib/components/ui/button';
	import { Trash, FileImage } from 'lucide-svelte';

	let data = [];
	let mounted = false;
	onMount(async () => {
		fetchData(searchString, dateValue);
		mounted = true;
	});

	async function onSearch(input) {
		await fetchData(input, dateValue);
	}

	async function fetchData(input, date) {
		const dateStr = date ? `${date.month}-${date.day}-${date.year}` : '';
		const result = await fetch(`/api/history?search=${input}&date=${dateStr}`);
		data = await result.json();
	}

	const now = new Date();
	let searchString = '';
	let dateValue = new CalendarDate(now.getFullYear(), now.getMonth() + 1, now.getDate());

	$: {
		if (dateValue === undefined) {
			dateValue = new CalendarDate(now.getFullYear(), now.getMonth() + 1, now.getDate());
		}

		if (mounted) {
			fetchData(searchString, dateValue);
		}
	}
</script>

<div class="my-2 flex justify-end gap-2">
	<SearchInput class="sm:w-[300px]" bind:value={searchString} {onSearch}></SearchInput>
	<DatePicker bind:value={dateValue}></DatePicker>
</div>
{#if data.length === 0}
	<p class="p-10 text-center">No history</p>
{:else}
	<ul class="my-2 flex flex-col gap-2">
		<div class="hidden grid-cols-[1fr_1fr_1fr_1fr_max-content] sm:grid">
			<p class="px-2">Image</p>
			<p class="px-2">Name</p>
			<p class="px-2">Confidence Score</p>
			<p class="px-2">Date</p>
			<div class="w-[120px] text-center"><p>Actions</p></div>
		</div>
		{#each data as item}
			<li
				class="hidden grid-cols-[1fr_1fr_1fr_1fr_min-content] items-center rounded-md border p-2 sm:grid"
			>
				<img
					class="h-12 w-12 rounded-lg object-cover"
					srcset={item.imageUrl}
					alt={labels[item.label]}
				/>
				<p>{labels[item.label]}</p>
				<p>{toPercentString(item.score)}</p>
				<p>{new Date(item.createdAt).toLocaleString()}</p>
				<div class="flex gap-2">
					<Button variant="ghost">View</Button>
					<Button variant="destructive">
						<Trash size="16" />
					</Button>
				</div>
			</li>
			<li class="flex rounded-md border p-2 sm:hidden">
				<div class="flex w-full gap-2">
					<img
						class="h-[100] w-[100px] rounded-lg object-cover"
						srcset={item.imageUrl}
						alt={labels[item.label]}
					/>
					<div class="flex w-full flex-col">
						<div class="flex justify-between gap-2">
							<p class="text-xl">{labels[item.label]}</p>
							<div class="flexgap-2">
								<Button class="rounded-full" variant="ghost" size="icon">
									<FileImage size="16" />
								</Button>
								<Button class="rounded-full" variant="ghost" size="icon">
									<Trash size="16" class="stroke-destructive" />
								</Button>
							</div>
						</div>
						<p>{toPercentString(item.score)}</p>
						<p class="text-sm opacity-75">{new Date(item.createdAt).toLocaleString()}</p>
					</div>
				</div>
			</li>
		{/each}
	</ul>
{/if}

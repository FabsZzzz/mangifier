<script>
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Drawer from '$lib/components/ui/drawer';

	import { onMount } from 'svelte';
	import { labels, toPercentString } from '$lib/utils/helper';
	import { SearchInput } from '$lib/components/ui/search-input';
	import { DatePicker } from '$lib/components/ui/date-picker';
	import { CalendarDate } from '@internationalized/date';
	import { Button } from '$lib/components/ui/button';
	import { Trash, FileImage } from 'lucide-svelte';
	import { mediaQuery } from 'svelte-legos';
	import { toast } from 'svelte-sonner';

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

	let dialogOpen = false;
	const isDesktop = mediaQuery('(min-width: 768px)');

	function openDialog(id) {
		dialogOpen = true;
		currentId = id;
	}

	let currentId = '';
	async function deleteHistory() {
		try {
			const res = await fetch(`/account/history/delete/${currentId}`, {
				method: 'DELETE'
			});

			if (res.ok) {
				data = data.filter((d) => d.id !== currentId);
				toast.success('Item deleted successfully');
			} else {
				const data = await res.json();
				toast.error(data.message);
			}
		} catch (error) {
			toast.error('Failed to delete selected item');
		}

		dialogOpen = false;
	}
</script>

<div class="my-2 flex justify-end gap-2">
	<SearchInput
		placeholder="Search here..."
		class="sm:w-[300px]"
		bind:value={searchString}
		{onSearch}
	></SearchInput>
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
					<Button variant="ghost" href={`/result/${item.id}`}>View</Button>
					<Button variant="destructive" on:click={() => openDialog(item.id)}>
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
								<Button
									class="rounded-full"
									variant="ghost"
									size="icon"
									href={`/result/${item.id}`}
								>
									<FileImage size="16" />
								</Button>
								<Button
									class="rounded-full"
									variant="ghost"
									size="icon"
									on:click={() => openDialog(item.id)}
								>
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

{#if $isDesktop}
	<Dialog.Root bind:open={dialogOpen}>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>Delete History</Dialog.Title>
				<Dialog.Description>
					Do you want to delete this item? This action cannot be undone.
				</Dialog.Description>
			</Dialog.Header>
			<div class="flex justify-end gap-4">
				<Button variant="destructive" on:click={deleteHistory}>Delete</Button>
			</div>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open={dialogOpen}>
		<Drawer.Content>
			<Drawer.Header class="text-left">
				<Drawer.Title>Delete History</Drawer.Title>
				<Drawer.Description class="mb-4">
					Do you want to delete this item? This action cannot be undone.
				</Drawer.Description>
			</Drawer.Header>
			<Button on:click={deleteHistory} variant="destructive" class="mx-4">Delete</Button>
			<Drawer.Footer class="pt-2">
				<Drawer.Close asChild let:builder>
					<Button variant="outline" builders={[builder]}>Cancel</Button>
				</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
{/if}

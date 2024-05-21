<script lang="ts">
	import Logo from '$lib/assets/favicon.png';
	import Dropzone from 'svelte-file-dropzone';
	import IconLoader from '$lib/components/ui/icon-loader';
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeft } from 'lucide-svelte';
	import ResultComponent from './result.svelte';
	import { getResult, type Result } from './result';
	import { toast } from 'svelte-sonner';

	$: loading = false;

	let result: Result | null = null;

	async function handleFilesSelect(e) {
		loading = true;

		let image;
		const file = e.detail.acceptedFiles[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = (e) => {
			image = e.target!.result;
		};

		const response = await fetch('/api/upload', {
			method: 'POST',
			body: file
		});

		const data = await response.json();

		if (data.error || data.score === 0) {
			const message = data.error || 'Unable to analyze image. Please try again.';

			toast.error(message);
			loading = false;
			return;
		}

		result = getResult(data.label, data.score, image);
		loading = false;
	}
</script>

{#if result === null}
	<div class="flex w-full flex-col items-center justify-center">
		<Dropzone
			on:drop={handleFilesSelect}
			accept="image/*"
			disabled={loading}
			multiple={false}
			disableDefaultStyles
			containerClasses={`${loading ? '' : 'hover:border-primary'} flex flex-col mb-4 items-center rounded-full border-2 border-dashed border-gray-[500] p-4`}
		>
			<div class="grid grid-cols-1 grid-rows-1 items-center">
				<img
					class={`col-start-1 row-start-1 rounded-full bg-white ${loading ? 'hidden' : ''}`}
					src={Logo}
					alt="default logo"
					width="200"
					height="200"
				/>

				{#if loading}
					<div class="col-start-1 row-start-1 flex size-[200px] items-center justify-center">
						<IconLoader />
					</div>
				{/if}
			</div>
		</Dropzone>

		<h2 class="text-center text-xl font-semibold text-secondary">
			Harvesting Health, Securing Tomorrow
		</h2>
		<h3 class="max-w-[500px] text-center text-sm text-secondary">
			Pioneering Mango Care with Intelligent Detection, Proactive Prevention, and Expert
			Recommendations
		</h3>
	</div>
{:else}
	<div class="flex flex-col gap-4">
		<ResultComponent {result}></ResultComponent>

		<Button class="self-stretch sm:self-end" variant="outline" on:click={() => (result = null)}>
			<div class="flex gap-2">
				<ChevronLeft /> Back
			</div>
		</Button>
	</div>
{/if}

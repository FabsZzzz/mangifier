<script lang="ts">
	import Logo from '$lib/assets/favicon.png';
	import type { PageData } from './$types';
	import Form from './form.svelte';
	export let data: PageData;
</script>

<div class="flex h-full justify-center">
	<div class="m-12 flex flex-col items-center gap-10">
		<div class="flex flex-col gap-2 text-center">
			<a class="flex flex-col items-center justify-center gap-4" href="/">
				<img src={Logo} alt="Logo" width="80" height="80" />
				<h1 class="text-3xl font-bold text-secondary">Mangifier</h1>
			</a>
		</div>
		<Form data={data.form} />

		<div class="flex gap-2">
			New to Mangifier? <a class="text-blue-600 hover:underline" href="/register">
				Create an account
			</a>
		</div>
	</div>
</div>

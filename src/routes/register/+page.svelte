<script lang="ts" context="module">
	export type Info = {
		firstName: string;
		lastName: string;
		email: string;
	};
</script>

<script lang="ts">
	import Logo from '$lib/assets/favicon.png';
	import type { PageData } from './$types';
	import InfoForm from './info/form.svelte';
	import CredentialsForm from './credentials/form.svelte';
	export let data: PageData;

	let info: Info = {
		firstName: '',
		lastName: '',
		email: ''
	};

	$: page = 0;
</script>

<div class="flex h-full justify-center">
	<div class="m-12 flex flex-col items-center gap-10">
		<a class="flex flex-col gap-2 text-center" href="/">
			<img class="self-center" src={Logo} alt="Logo" width="100" height="100" />
			<p class="mt-4">Create an account to get started</p>
		</a>
		<div class="flex w-[100vw] flex-col sm:w-[350px]">
			<div
				class={`${page === 0 ? 'inline opacity-100' : 'hidden opacity-0'} transition-all duration-300`}
			>
				<InfoForm data={data.infoForm} bind:info bind:page />
			</div>
			<div
				class={`${page === 0 ? 'hidden opacity-0' : 'inline opacity-100'} transition-all duration-300`}
			>
				<CredentialsForm data={data.credentialsForm} bind:info bind:page />
			</div>
		</div>
	</div>
</div>

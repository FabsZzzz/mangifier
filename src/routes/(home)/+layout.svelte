<script lang="ts">
	import { Footer } from '$lib/components/ui/footer';
	import { NavBar } from '$lib/components/ui/nav-bar';

	export let data;

	const user = {
		firstName: data.user?.firstName ?? 'Guest',
		lastName: data.user?.lastName ?? 'User',
		avatarUrl: data.user?.avatarUrl ?? ''
	};
</script>

<container class="flex min-h-[100vh] flex-col">
	<NavBar {user} />
	<div class="flex h-full w-full flex-grow flex-row overflow-auto">
		<div class="flex flex-grow flex-col overflow-hidden p-6 py-4 xl:items-center">
			<div class="flex w-full flex-grow xl:w-[1280px]">
				<slot />
			</div>
		</div>
	</div>
	<div class="card flex xl:justify-center">
		<Footer class="w-full xl:w-[1280px]" />
	</div>
</container>

<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';

	$: handlePageSelection = (url: string) => {
		const pathname = $page.url.pathname;
		return pathname.includes(url) ? 'default' : 'ghost';
	};
</script>

<div class="flex w-full flex-col">
	<div class="flex gap-2 border-b py-2">
		<Button variant={handlePageSelection('/account/profile')} href="/account/profile">
			Profile
		</Button>
		<Button variant={handlePageSelection('/account/history')} href="/account/history">
			History
		</Button>
	</div>
	<slot></slot>
</div>

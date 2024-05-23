<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: $$Props['class'] = undefined;

	export { className as class };
</script>

<div
	class={cn(
		'flex flex-col justify-between gap-4 px-6 py-4 text-center md:flex-row xl:px-0',
		className
	)}
>
	<p class="text-sm opacity-50">Mangifier @ 2024 All rights reserved</p>
	<div class="flex flex-col gap-4 text-center md:flex-row">
		<a
			class="text-sm opacity-50 transition-all duration-300 hover:opacity-100"
			href="/terms-and-conditions">Terms and Conditions</a
		>
		<a
			class="text-sm opacity-50 transition-all duration-300 hover:opacity-100"
			href="/privacy-policy">Privacy Policy</a
		>
	</div>
</div>

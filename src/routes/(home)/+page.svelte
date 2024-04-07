<script>
	import Logo from '$lib/assets/favicon.png';
	import { Button } from '$lib/components/ui/button';
	import { Camera } from 'lucide-svelte';
</script>

<div class="flex w-full flex-col items-center justify-center">
	<img class="rounded-full bg-white" src={Logo} alt="default logo" width="200" height="200" />
	<h2 class="text-center text-xl font-semibold text-secondary">
		Harvesting Health, Securing Tomorrow
	</h2>
	<h3 class="max-w-[500px] text-center text-sm text-secondary">
		Pioneering Mango Care with Intelligent Detection, Proactive Prevention, and Expert
		Recommendations
	</h3>

	<Button class="mt-8 h-[4rem] w-[4rem] rounded-full bg-secondary hover:bg-secondary/75">
		<Camera class="h-[3rem] w-[3rem]" />
	</Button>
</div>

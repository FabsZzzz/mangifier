<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import { User } from 'lucide-svelte';

	export let data;

	const user = data.user;
</script>

<div class="mt-4 flex items-center gap-4">
	<Avatar.Root class="h-12 w-12">
		<Avatar.Image src="" alt="User image" />
		<Avatar.Fallback>
			<User class="h-6 w-6" />
		</Avatar.Fallback>
	</Avatar.Root>
	<div class="flex gap-2">
		<p class="text-lg">{`${user?.firstName} ${user?.lastName}`}</p>
		<p>{user?.email}</p>
	</div>
</div>

<script>
	import * as Avatar from '$lib/components/ui/avatar';

	export let data;

	const user = data.user;
</script>

<div class="mt-4 flex items-center gap-4">
	<Avatar.Root class="size-[48px]">
		<Avatar.Image src="https://randomuser.me/api/portraits/men/75.jpg" alt="@shadcn" />
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>
	<div class="flex gap-2">
		<p class="text-lg">{`${user?.firstName} ${user?.lastName}`}</p>
		<p>{user?.email}</p>
	</div>
</div>

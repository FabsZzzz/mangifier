<script lang="ts">
	import Logo from '$lib/assets/favicon.png';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';

	export let user: {
		firstName: string;
		lastName: string;
		avatarUrl: string;
	};
</script>

<header class="sticky top-0 z-10 flex h-14 w-full justify-center bg-primary/80 p-6 backdrop-blur">
	<div class="flex w-full justify-between xl:w-[1280px]">
		<div class="flex items-center gap-4">
			<a class="flex w-[250px] items-center gap-4" href="/">
				<img class="rounded-full bg-white" src={Logo} alt="default logo" width="40" height="40" />
				<p class="text-xl text-white">Mangifier</p>
			</a>
		</div>
		<div class="flex items-center justify-end gap-4">
			<p class="hidden text-white sm:block sm:opacity-100">
				{`${user.firstName} ${user.lastName}`}
			</p>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button variant="ghost" size="icon" class="h-8 w-8 rounded-full" builders={[builder]}>
						<Avatar.Root class="h-8 w-8">
							<Avatar.Image src={user.avatarUrl} alt="User image" />
							<Avatar.Fallback>
								<p class="text-sm">{`${user.firstName[0]} ${user.lastName[0]}`}</p>
							</Avatar.Fallback>
						</Avatar.Root>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56">
					{#if user.firstName === 'Guest' && user.lastName === 'User'}
						<DropdownMenu.Item href="/login">Log in</DropdownMenu.Item>
						<DropdownMenu.Item href="/register">Register</DropdownMenu.Item>
					{:else}
						<DropdownMenu.Item href="/account/profile">My Profile</DropdownMenu.Item>
						<DropdownMenu.Item href="/logout">
							Log out
							<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
					{/if}
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>

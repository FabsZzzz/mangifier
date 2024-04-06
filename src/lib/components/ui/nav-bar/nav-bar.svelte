<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/assets/favicon.png';
	import * as Sheet from '$lib/components/ui/sheet';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { SideNav } from '$lib/components/ui/side-nav';

	export let user: {
		firstName: string;
		lastName: string;
		avatarUrl: string;
	};

	$: openSheet = false;

	$: {
		if ($page) {
			openSheet = false;
		}
	}
</script>

<header
	class="h-14 w-full flex justify-between border-b bg-background/75 backdrop-blur sticky top-0 z-10 p-4"
>
	<div class="flex items-center gap-4">
		<Button class="block sm:hidden px-2" variant="ghost" on:click={() => (openSheet = true)}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				class="stroke-white"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M4 18H10" stroke-width="2" stroke-linecap="round" />
				<path d="M4 12L16 12" stroke-width="2" stroke-linecap="round" />
				<path d="M4 6L20 6" stroke-width="2" stroke-linecap="round" />
			</svg>
		</Button>
		<div class="w-[250px] items-center flex gap-4">
			<img src={Logo} alt="default logo" width="20" height="20" />
			<p class="text-xl font-semibold">E-Bakuna</p>
		</div>
	</div>
	<div class="items-center flex justify-end gap-4">
		<p class="text-white font-semibold sm:opacity-100 hidden sm:block">
			{`${user.firstName} ${user.lastName}`}
		</p>

		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button variant="ghost" size="icon" class="rounded-full h-8 w-8" builders={[builder]}>
					<Avatar.Root class="h-8 w-8">
						<Avatar.Image src={user.avatarUrl} alt="User image" />
						<Avatar.Fallback>
							<p class="text-sm">{`${user.firstName[0]} ${user.lastName[0]}`}</p>
						</Avatar.Fallback>
					</Avatar.Root>
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="w-56">
				<DropdownMenu.Item href="/logout">
					Log out
					<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</header>

<Sheet.Root bind:open={openSheet}>
	<Sheet.Content class="w-[250px]" side="left">
		<Sheet.Header>
			<Sheet.Title>
				<div class="w-[250px] items-center flex gap-2">
					<img src={Logo} alt="default logo" width="20" height="20" />
					<p class="text-xl font-semibold">E-Bakuna</p>
				</div>
			</Sheet.Title>
		</Sheet.Header>
		<SideNav class="py-6" />
	</Sheet.Content>
</Sheet.Root>

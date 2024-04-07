<script>
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<ModeWatcher defaultMode="light" />
<Toaster />
<body class="h-screen w-full">
	<slot />
</body>

<svelte:head>
	<title>Mangifier</title>
	<meta
		name="description"
		content="Analyze your manga collection, get recommendations, and track your reading progress."
	/>
</svelte:head>

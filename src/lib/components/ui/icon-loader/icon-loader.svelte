<div class="loader animate-spin"></div>

<style>
	.loader {
		width: 35px;
		aspect-ratio: 1;
		position: relative;
	}
	.loader:before,
	.loader:after {
		content: '';
		position: absolute;
		inset: 0 auto auto 0;
		aspect-ratio: 1;
		border-radius: 24px;
		box-shadow: 0 0 0 2px inset #ff901a;
		animation: l5 1s infinite linear alternate;
	}
	.loader:after {
		inset: auto 0 0 auto;
		animation-delay: -1s;
	}
	@keyframes l5 {
		0% {
			width: 5px;
		}
		100% {
			width: 25px;
		}
	}
</style>

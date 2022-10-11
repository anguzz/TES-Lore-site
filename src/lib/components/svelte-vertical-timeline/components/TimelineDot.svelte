<script >export let style = null;
</script>

<span class="timeline-dot" {style}>
	<slot />
</span>

<style>
	.timeline-dot {
		background-color: #787A79;
		border: solid 2px #121212;
		display: flex;
		align-self: baseline;
		padding: 4px;
		border-radius: 50%;
		margin: 10px 0;
		font-family: "MedievalSharp";

	}
</style>

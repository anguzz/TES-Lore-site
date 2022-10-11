<script lang="ts">
  import SEO from "svelte-seo";
  import Home from "$lib/pages/Home.svelte";

  import Races from "$lib/pages/Races.svelte";
  import Gods from "$lib/pages/Gods.svelte";
  import Provinces from "$lib/pages/Provinces.svelte";
  import Timeline from "$lib/pages/Timeline.svelte";

  import Footer from "$lib/pages/Footer.svelte";
</script>
<link href='https://fonts.googleapis.com/css?family=MedievalSharp' rel='stylesheet'>
<SEO
  title="Elder scrolls lore"
  description="Much lore! very quick"
  canonical="link"
/>

<Home />


<Timeline  />
<Provinces  />
<Races  />
<Gods  />

<Footer  />

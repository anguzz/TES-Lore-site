<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/pages/Footer.svelte";
</script>

<Navbar />
<main class="pt-16">
  <slot />
</main>
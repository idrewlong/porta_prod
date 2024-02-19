<script>
	import Beauty from './../lib/home/beauty.svelte';
	import Vfx from './../lib/home/vfx.svelte';
	import About from "$lib/home/about.svelte";
	import Brands from "$lib/home/brands.svelte";
	import Contact from "$lib/home/contact.svelte";
	import Grid from "$lib/home/grid.svelte";
import Hero from "$lib/home/hero.svelte";
	import Cleanup from '$lib/home/cleanup.svelte';
	import Direct from '$lib/home/direct.svelte';
	import BackToTop from "$lib/home/BackToTop.svelte";
	import Contact2 from '$lib/home/contact2.svelte';

</script>

<Hero/>
<About/>
<Brands/>
<Direct/>
<Vfx/>
<Beauty/>
<Cleanup/>
<Grid/>
<Contact/>
<!-- <Contact2/> -->
<BackToTop />

<svelte:head>
  <title>Ariel Porta Productions</title>

  <!-- Open Graph meta tags -->
  <meta property="og:title" content="Ariel Porta Productions">
  <meta property="og:description" content="Director | VFX Artist">
  <meta property="og:image" content="/logo/porta_logo.webp">
  <meta property="og:url" content="https://www.id-dev.com/about">
  <meta property="og:type" content="website">

</svelte:head>
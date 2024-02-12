<style>
      .overflow-hidden {
        background-image: url(/BG-1.png);
        background-size: cover;
        background-position: center;
      }
</style>
  
  <script>
  let showVideo = false;
  
  const handleShowVideo = () => {
        showVideo = true;
  }
  let Reel = './Video/Reel_VFX_prob3.mp4'
  
  </script>
  
  
  
  <div class="overflow-hidden py-24 sm:py-32 ">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <video class="rounded-2xl shadow p-1 mt-8 " id="3f08879e-dae1-d7ea-3f08-f5571503a140-video" autoplay loop style="background-image:url(&quot;/)" muted playsinline data-wf-ignore="true" data-object-fit="cover"><source src={Reel} data-wf-ignore="true"><source src="/fat8_vfxreel(1080p).mp4" data-wf-ignore="true"></video>
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-lg font-semibold leading-8 tracking-tight text-ap_dark_gray">EDIT/ VFX</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-ap_dark_gray sm:text-4xl">PORTA PRODUCTIONS IS AN INDEPENDENT, CREATIVELY DRIVEN FULL-SERVICE
                VIDEO PRODUCTION COMPANY DESIGNED TO TAKE A PROJECT FROM 
                CONCEPT TO PACKAGING, ENSURING THAT OUR CLIENT'S VISION BECOMES A REALITY.
              </p>
          
            </div>
          </div>
          <!-- svelte-ignore a11y-media-has-caption -->
          <!-- {#if showVideo} -->
          <!-- <video alt="Product video" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442"> </video> -->
              <!-- <iframe class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="560" height="315" src="https://www.youtube.com/embed/VvU_U-bdL_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              {:else}
              <button class="btn" on:click={handleShowVideo}>
                  Play
              </button>
         {/if} -->
     
         
  
  
        </div>
      </div>
    </div>
    
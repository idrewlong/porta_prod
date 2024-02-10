<script>
      let showMenu = false;
    
      function toggleNavbar() {
        showMenu = !showMenu;
      }
    
      function closeNavbar() {
        showMenu = false;
      }
    </script>
    
    <div class="bg-white uppercase">
      <div>
        <nav
          class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center"
        >
          <div class="flex items-center justify-between">
            <a href="/" class="flex items-center">
              <img src="/logo/porta_logo.webp" class="h-16 hover:scale-105 duration-500" alt="iDrew Logo" />
              <span class="text-2xl font-semibold whitespace-nowrap text-white"></span>
            </a>
    
            <!-- Mobile menu button -->
            <div class="flex md:hidden">
              <button
                type="button"
                class="text-white hover:text-gray focus:outline-none focus:text-gray-400"
                aria-label="Toggle Navigation"
                on:click={toggleNavbar}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
    
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div
            class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
                  ? 'flex'
                  : 'hidden'}"
          >
            <a class="text-grey-800 duration-500 hover:text-orange-400 hover:underline ease-in-out" href="#About" on:click={closeNavbar}>About</a>
            <a class="text-grey-800 duration-500 hover:text-orange-400 hover:underline ease-in-out" href="#Reels" on:click={closeNavbar}>Reels</a>
            <a class="text-grey-800 duration-500 hover:text-orange-400 hover:underline ease-in-out" href="#Portfolio" on:click={closeNavbar}>Portfolio</a>
            <!-- <a class="text-grey-800 duration-500 hover:text-orange-400 hover:underline ease-in-out" href="/multi-media" on:click={closeNavbar}>Multi-Media</a> -->
            <a class="text-grey-800 duration-500 hover:text-orange-400 hover:underline ease-in-out" href="#Contact" on:click={closeNavbar}>Contact</a>
          </div>
        </nav>
      </div>
    </div>
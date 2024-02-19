<script>
// let access_Key = process.env.API_KEY
</script>

<!-- Section: Design Block -->
<section class="mb-32 text-center px-4">
      <div class="mx-auto max-w-[700px] md:px-3">
        <h2 id="Contact" class="mb-12 text-3xl font-bold uppercase">Contact</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input type="hidden" name="access_key" value='e994a108-c9ed-4172-acb8-dec0ae1451e7' />
            <input
              required
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput90"
              placeholder="Name" />
            <label
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-ap_navy transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              for="exampleInput90"
              >Name
            </label>
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              required
              type="email"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput91"
              placeholder="Email address" />
            <label
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-ap_navy transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              for="exampleInput91"
              >Email address
            </label>
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <textarea
              required
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message"></textarea>
            <label
              for="exampleFormControlTextarea1"
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-ap_navy transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              >Message</label
            >
            <!-- Captcha -->
            <div class="h-captcha" data-captcha="true"></div>

            <!-- Honey Pot for Bots -->
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
          </div>

          <!-- From Name -->
          <input type="hidden" name="from_name" value="Inquire">
          
          <button
            type="submit"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="mb-6 inline-block w-full rounded bg-ap_navy px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Send
          </button>
        </form>
        <script src="https://web3forms.com/client/script.js" defer> </script>
      </div>
    </section>
    <!-- Section: Design Block -->
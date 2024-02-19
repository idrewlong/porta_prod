<div class="flex min-h-screen items-center justify-start bg-white mx-4">
        <div class="mx-auto w-full max-w-lg">
          <h1 class="text-2xl md:text-4xl font-medium">Contact</h1>
          <p class="mt-3">Email me at idrewlong@gmail.com or message me here:</p>
      
          <!-- Form -->
          <form action="https://api.web3forms.com/submit" class="mt-10" method="POST">
            <input type="hidden" name="access_key" value="e994a108-c9ed-4172-acb8-dec0ae1451e7" />
      
            <div class="grid gap-4">
              <label for="name" class="sr-only">Your name</label>
              <input type="text" name="name" id="name" required class="block w-full appearance-none border-b border-gray-500 bg-transparent py-2.5 md:py-2 px-0 md:px-0.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="Your name" />
      
              <label for="email" class="sr-only">Your email</label>
              <input type="email" name="email" id="email" required class="block w-full appearance-none border-b border-gray-500 bg-transparent py-2.5 md:py-2 px-0 md:px-0.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="Your email" />
      
              <label for="message" class="sr-only">Your message</label>
              <textarea name="message" id="message" required rows="5" class="block w-full appearance-none border-b border-gray-500 bg-transparent py-2.5 md:py-2 px-0 md:px-0.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="Your message"></textarea>
            
            <!-- Captcha -->
            <div class="h-captcha" data-captcha="true"></div>
      
            <!-- Honey Pot for Bots -->
            <!-- <input type="checkbox" name="botcheck" class="hidden" style="display: none;"> -->
            </div>
      
            <!-- From Name -->
            <input type="hidden" name="from_name" value="Ariel Porta Productions | inquire">
      
            <!-- Submit button -->
            <button type="submit" class="mt-5 w-full md:w-auto rounded-md bg-gradient-to-br from-orange-200 to-orange-400 hover:scale-95 duration-200 px-6 py-3 md:px-8 md:py-3 text-white">Send Message</button>
      
            <!-- <div class="g-recaptcha" data-sitekey="6LcsMYMnAAAAAKSyZNepGYnV98pyRUpBK7dNtVCF"></div> -->
          </form>
          <script src="https://web3forms.com/client/script.js" defer> </script>
        </div>
      </div>
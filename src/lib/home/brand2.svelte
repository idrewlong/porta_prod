

<script>
 let apple = '/brands/apple.png'
 let coravin = '/brands/coravin.png'
 let defjam = '/brands/defjam.png'
 let empire = '/brands/empire.png'
 let engel = '/brands/engel&volkers.png'
 let epic = '/brands/epic.png'
 let inter = '/brands/interscope.png'
 let nike = '/brands/nike.png'
 let rca = '/brands/rca.png'
 let rostrum = '/brands/rostrum.png'
 let universal = '/brands/universal.png'
 let warner = '/brands/warnermusicgroup.png'
      </script>
      
      
      <section class="lang_about">
        <div class="slider-container overflow-hidden">
            <div class="slider flex  items-center justify-center relative">
                <div class="slide-track align-middle">
                    <div class="slide">
                        <img src={apple} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={coravin} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={defjam} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={empire} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={engel} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={epic} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={inter} alt="" class="brand_svg">
                    </div>

                    <div class="slide">
                        <img src={nike} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={rca} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={rostrum} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={universal} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={warner} alt="" class="brand_svg">
                    </div>
                    <!-- Duplicate slides for infinite loop -->
                    <div class="slide">
                        <img src={apple} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={coravin} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={defjam} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={empire} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={engel} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={epic} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={inter} alt="" class="brand_svg">
                    </div>

                    <div class="slide">
                        <img src={nike} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={rca} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={rostrum} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={universal} alt="" class="brand_svg">
                    </div>
                    <div class="slide">
                        <img src={warner} alt="" class="brand_svg">
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <style>
        @keyframes scroll {
            0% {
                transform: translateX(calc(250px * 7)); /* Adjust the starting position */
            }
            100% {
                transform: translateX(calc(-250px * 7)); /* Adjust the ending position */
            }
        }
      
        .lang_about {
              @apply mx-auto shadow-lg p-2  bg-white grid grid-cols-1 gap-5;
      }

      .brand_svg {
	@apply flex align-middle sm:mx-6 md:mx-8 my-6 duration-300 w-12 h-12;
        }
      
        .slider-container {
            width: 100%;
            max-width: 1920px;
            margin: auto;
      
        }
      
        .slider {
            height: 100px;
            overflow: hidden;
            position: relative;
        }
      
        .slide-track {
            animation: scroll 50s linear infinite;
            display: flex;
            width: calc(250px * 14);
            margin: auto;
        }
      
        .slide {
            @apply md:h-24 md:w-60
        }
      
        @media (max-width: 768px) {
            .slide {
                width: 150px; /* Adjust for smaller screens */
            }
            .slide-track {
            animation-duration: 30s; /* Adjust animation duration for smaller screens */
                }
            @keyframes scroll {
            0% {
                transform: translateX(calc(250px * 4)); /* Adjust the starting position for mobile */
            }
        }
        }
      </style>
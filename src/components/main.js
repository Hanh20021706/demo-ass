const Main = {
    render() {
        return /* html */`
        
        <div class="max-w-7xl mx-auto px-4 mt-6">
            <!--  favorites -->
            <div class="">
              <div class="flex justify-between">
                <h3 class="text-[25px] font-light text-red-700">Our favorites</h3>
              </div>
              <div class="grid grid-cols-3 gap-[50px] mt-8">
                <div class="">
                  <a href="">
                    <img
                      class="w-full rounded"
                      src="https://i.pinimg.com/564x/3b/93/6b/3b936b1acfb5ae2300f845775dc00016.jpg"
                      alt=""
                    />
                  </a>
    
                  <h4 class="mt-6 mb-2 text-red-700">
                    <a href=""> Long Twist Earrings</a>
                  </h4>
                  <span class="text-slate-500"> $49.98 </span>
                </div>
                <div class="">
                  <a href="">
                    <img
                      class="w-full rounded"
                      src="https://i.pinimg.com/564x/db/13/41/db1341f08f252f26a314546a2de7e72c.jpg"
                      alt=""
                    />
                  </a>
    
                  <h4 class="mt-6 mb-2 text-red-700">
                    <a href=""> Long Twist Earrings</a>
                  </h4>
                  <span class="text-slate-500"> $49.98 </span>
                </div>
                <div class="">
                  <a href="">
                    <img
                      class="w-full rounded"
                      src="https://i.pinimg.com/736x/b3/c8/80/b3c880c7518036f0a61366e0d4c80574.jpg"
                      alt=""
                    />
                  </a>
    
                  <h4 class="mt-6 mb-2 text-red-700">
                    <a href=""> Long Twist Earrings</a>
                  </h4>
                  <span class="text-slate-500"> $49.98 </span>
                </div>
              </div>
            </div>
    
            <!-- post -->
            <div class="grid grid-cols-2 mt-[80px] gap-[80px]">
              <div class="">
                <a href="#" class="justify-center">
                  <img
                    class="w-full rounded"
                    src="https://i.pinimg.com/736x/84/6f/55/846f556cfaa5e17fddaf608c612db0ef.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="mt-[100px]">
                <h3>
                  <a href="" class="text-[25px] font-serif text-red-700">
                    Wild Fawn x Mira Lou Collaborations
                  </a>
                </h3>
                <p class="mt-8 text-slate-500 font-normal leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  magnam libero molestiae natus dolorum, nesciunt ab corrupti labore
                  iusto, sunt maxime minus est obcaecati aliquam provident at? Quo,
                  dolor autem.
                </p>
                <div
                  class="text-center border border-slate-400 w-24 mt-8 rounded py-[2px] link-post"
                >
                  <a href="" class=""> Explore </a>
                </div>
              </div>
            </div>
            <!-- categories -->
            <div class="categories mt-[50px]">
              <h3 class="text-[25px] font-light text-red-700 mb-8">categories</h3>
              <!-- row one -->
              <div class="grid grid-cols-4 gap-4">
                <div class="p-8 rounded categories-item">
                  <div class="p-4 rounded item-boder">
                    <img
                      class="w-full rounded"
                      src="https://i.pinimg.com/736x/cd/e1/7b/cde17bea0230937356bea6512e02eb7e.jpg"
                      alt=""
                    />
                    <div class="mt-4 flex justify-between">
                      <span class="text-red-700"> <a href=""> Necklaces </a> </span>
                      <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </div>
                </div>
                <div class="p-8 rounded categories-item">
                  <div class="p-4 rounded item-boder">
                    <img
                      class="w-full rounded"
                      src="https://i.pinimg.com/564x/46/4b/00/464b00b5c90c05ca2638cc9bfab4122c.jpg"
                      alt=""
                    />
                    <div class="mt-4 flex justify-between">
                      <span class="text-red-700"> <a href=""> Necklaces </a> </span>
                      <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </div>
                </div>
                <div class="p-8 rounded categories-item">
                  <div class="p-4 rounded item-boder">
                    <img
                      class="w-full rounded"
                      src="https://i.pinimg.com/736x/64/b5/d9/64b5d994b8a08e0dd0de41af724ba1e3.jpg"
                      alt=""
                    />
                    <div class="mt-4 flex justify-between">
                      <span class="text-red-700"> <a href=""> Necklaces </a> </span>
                      <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </div>
                </div>
                <div class="p-8 rounded bg-red-800">
                  <div class="p-4 rounded item-boder">
                    <img
                      class="w-full rounded"
                      src="https://i.pinimg.com/564x/91/21/da/9121da97abb65eb13ffa137cd786e770.jpg"
                      alt=""
                    />
                    <div class="mt-4 flex justify-between">
                      <span class="text-white"> <a href=""> Necklaces </a> </span>
                      <i class="fas fa-long-arrow-alt-right text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <!-- post -->
            <div class="grid grid-cols-2 mt-[80px] gap-[80px]">
              <div class="mt-[100px]">
                <h3>
                  <a href="" class="text-[25px] font-serif text-red-700">
                    About us
                  </a>
                </h3>
                <p class="mt-8 text-slate-500 font-normal leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  magnam libero molestiae natus dolorum, nesciunt ab corrupti labore
                  iusto, sunt maxime minus est obcaecati aliquam provident at? Quo,
                  dolor autem. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Vitae magnam libero molestiae natus dolorum, nesciunt ab
                  corrupti labore iusto, sunt maxime minus est obcaecati aliquam
                  provident at? Quo, dolor autem.
                </p>
                <div
                  class="text-center border border-slate-400 w-24 mt-8 rounded py-[2px] link-post"
                >
                  <a href="" class=""> More </a>
                </div>
              </div>
              <div class="">
                <a href="#" class="justify-center">
                  <img
                    class="w-full rounded"
                    src="https://i.pinimg.com/564x/c7/b6/45/c7b64582c77d293a5f3786091c399cfe.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>

        </div>
        <div class="banner mt-[80px]">
          <img
            class="w-full"
            src="http://www.bijouterielamsa.com/web/img/slider/ban2.jpg"
            alt=""
          />
        </div>
   
        `;
    },
};
export default Main;
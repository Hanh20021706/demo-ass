const Footer = {
    render() {
        return /* html */`
        <footer class="max-w-7xl mx-auto px-4 mt-[100px]">
        <div class="grid grid-cols-4 gap-4">
          <div class="">
            <h4 class="my-2 font-sans text-[15px] font-semibold">
              <a href=""> jewellery</a>
            </h4>
            <ul class="">
              <li class="py-[10px] text-[14px]"><a href=""> Rings</a></li>
              <li class="py-[10px] text-[14px]"><a href=""> Earrings</a></li>
              <li class="py-[10px] text-[14px]"><a href=""> Necklaces</a></li>
              <li class="py-[10px] text-[14px]"><a href=""> Bracelets</a></li>
            </ul>
          </div>
          <div class="">
            <h4 class="my-2 font-sans text-[15px] font-semibold">
              <a href=""> jewellery</a>
            </h4>
            <ul class="">
              <li class="py-[10px] text-[14px]"><a href=""> Rings</a></li>
              <li class="py-[10px] text-[14px]"><a href=""> Earrings</a></li>
              <li class="py-[10px] text-[14px]"><a href=""> Necklaces</a></li>
              <li class="py-[10px] text-[14px]"><a href=""> Bracelets</a></li>
            </ul>
          </div>
          <div class="">
            <div class="">
              <h4 class="my-2 font-sans text-[15px] font-semibold">
                <a href=""> Contact Us</a>
              </h4>
              <p class="font-light text-[13px]">hanhbhph15007@fpt.edu.vn</p>
            </div>
            <div class="py-[30px]">
              <h4 class="my-2 font-sans text-[15px] font-semibold">
                <a href=""> Follow Us</a>
              </h4>
              <div class="pr-[15px] text-xl">
                <a href="">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a href="">
                  <i class="fab fa-instagram-square"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter-square"></i>
                </a>
                <a href="">
                  <i class="fab fa-youtube-square"></i>
                </a>
                <a href="">
                  <i class="fab fa-pinterest-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="">
            <h4 class="my-2 font-sans text-[15px] font-semibold">
              <a href=""> sign up for uor newsletter and get a 10% discount</a>
            </h4>
            <form action="" class="flex">
              <div class="pr-4">
                <label class="">
                  <span
                    class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-[13px]"
                  >
                    Your Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    class="mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-40 rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <div class="">
                <label class="">
                  <span
                    class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-[13px]"
                  >
                    Submit
                  </span>
                  <input
                    type="submit"
                    name="email"
                    class="mt-1 px-3 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-24 rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
      </footer>
        `;
    },
};
export default Footer;
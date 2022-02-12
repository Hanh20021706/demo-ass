const productsMain = {
    render() {
        return /* html */`
        <main>
        <div class="products-main">
          <div class="header-product">
            <h2>ALL FASHION JEWELRY</h2>
            <p>
              Modern and elegant, asymmetrical and bold, Dior's jewelry
              creations are the expression of the expertise and couture spirit
              so central to Dior. As Monsieur Dior liked to point out, "a piece
              of jewelry is a delightful addition that accentuates your outfit
              and personalises your look". It's the essential accessory for the
              Dior woman.
            </p>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4">
          <div class="filter-products">
            <ul class="filter-menu">
              <li><a href="">fashion jewelry</a></li>
              <li class="menu-item-filter"><a href="">all fashion jewelry</a></li>
              <li class="menu-item-filter"><a href="">collect</a></li>
              <li class="menu-item-filter"><a href="">supplies</a></li>
              <li class="menu-item-filter"><a href="">Sort by</a></li>
            </ul>
          </div>
          <div class="product-item grid grid-cols-4 gap-6">
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
                    src="https://i.pinimg.com/564x/b1/db/b9/b1dbb9c31729d12fafe4e7a1ef424f29.jpg"
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
                    src="https://i.pinimg.com/originals/bf/55/fd/bf55fdc03cd8e27eca59cd0b6ad15b4d.gif"
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
                    src="https://i.pinimg.com/564x/dd/dd/e1/dddde1b53e3522fcf845ba6b76ef6c24.jpg"
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
        <div class="footer-posts">
            <button class="btn-footer">
              VIEW ALL
            </button>
        </div>
      </main>
        `;
    },
};
export default productsMain;
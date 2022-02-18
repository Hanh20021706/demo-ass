import { getAll } from "../api/products";

const productsMain = {
    async render() {
        const { data } = await getAll();

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
          ${data.map((products) => `
            <div class="">
            <a href="/#/product/detail/${products.id}">
              <img 
                class="w-full rounded"
                 src="${products.img}"
                alt=""
              />
            </a>

            <h4 class="mt-6 mb-2 text-red-700">
              <a href=""> ${products.name}</a>
            </h4>
            <span class="text-slate-500"> $ ${products.price}</span>
          </div>
            `).join("")}
           
          
              
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
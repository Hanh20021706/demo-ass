import { get } from "../../api/products";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Detail = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
       
        <div> ${Header.render()} </div>
        <main>
          <div class="body-main max-w-7xl mx-auto px-4 grid grid-cols-2 gap-[100px]">
            <div class="body-product">
              <div class="detail-img-product">
                <div class="img-main">
                  <a href="">
                    <img
                      src="${data.img}"
                      alt=""
                    />
                  </a>
                </div>
             
              </div>
            </div>
            <div class="intro-product">
              <div class="title-intro">
                <h2>${data.name}</h2>
                <p>${data.color}</p>
                <span class="price-product"> $ ${data.price} </span>
                <p class = "text-black">${data.quantity} sản phẩm có sẵn</p>
              </div>
              <div class="btn-detail">
                  <div class="btn-item">
                      <button class="btn-now">By Now</button>
                    </div>
                    <div class="btn-item">
                        <button class="btn-add-card">Add To Card</button>
                    </div>
              </div>
              <div class="desc-product">
                <p>
                  ${data.desc}
                </p>
                <nav class="list-desc">
                  
                </nav>
              </div>
            </div>
          </div>
        </main>
  
        ${Footer.render()}
        `;
    },
};
export default Detail;
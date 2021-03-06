import toastr from "toastr";
import { reRender } from "../utils";
import { decreaseQuantityFromCart, increaseQuantityFromCart, removeItemFromCart } from "../utils/cart";
import "toastr/build/toastr.min.css";

const cartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */`

        <div class=" header-cart  ">
        <div class=" max-w-5xl mx-auto">
             <ul class="flex nav-cart-haeder">
                 <li class=""><a href=""><img width="150px"  src="https://www.freepnglogos.com/uploads/vogue-png-logo/vogue-paris-png-logo-11.png" alt="">
                 </a></li>
                 <!-- <li class=""><a href="">cart</a></li> -->
             </ul>
        </div>
       </div>
       <div class="table-cart max-w-5xl mx-auto">
         <table class="table-cart">
             <thead class="header-table shadow-md w-full">
               <tr class="">
                 <th class= "th-cart">Tên Sản Phẩm</th>
                 <th class= "th-cart" >Ảnh sản Phẩm</th>
                 <th class= "th-cart">Giá Sản Phẩm</th>
                 <th class= "th-cart">Số Lượng</th>
                 <th class= "th-cart">Thao Tác</th>
               </tr>
             </thead>
             <tbody>
             ${cart.map((item) => `
                <tr class ="tr-cart">
                <td class ="td-cart">${item.name}</td>
                  <td class ="td-cart">   <div class="text-center">    <a href=""><img width="200px" src="${item.img}" alt=""></a></div></td>
                  <td class ="td-cart">${item.price}</td>
                  <td class ="td-cart">
                    <button data-id="${item.id}" class="btn btn-increase btn-plus"><i class="fa-solid fa-plus"></i></button>
                        ${item.quantity}
                    <button data-id="${item.id}" class="btn btn-decrease btn-minus"><i class="fa-solid fa-minus"></i></button>
                  </td>
                  <td class ="td-cart">
                    <button  data-id="${item.id}" class="btn btn-remove">
                        <i class="fa-solid fa-delete-left text-red-500 text-2xl"></i>
                    </button>
                  </td>
                </tr>
                
                `).join("")}
              
             </tbody>
           </table>
       </div>
        `;
    },

    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantityFromCart(id, () => {
                        reRender(cartPage, "#app");
                        toastr.success("Tăng số lượng thành công!");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantityFromCart(id, () => {
                        reRender(cartPage, "#app");
                        toastr.success("Bạn đang giảm số lượng sản phẩm!");
                    });
                } else {
                    removeItemFromCart(id, () => {
                        reRender(cartPage, "#app");
                        toastr.success("bạn đã xóa sản phẩm !");
                    });
                }
            });
        });
    },
};
export default cartPage;
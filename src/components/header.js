import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { reRender } from "../utils";

const Header = {
    render() {
        return /* html */ `
        <header class="header shadow-md">
        <div class="header-inner">
          <div class="w-[10%]">
            <a href="">
              <img
                src="https://www.freepnglogos.com/uploads/vogue-png-logo/vogue-paris-png-logo-11.png"
                alt=""
              />
            </a>
          </div>

          <ul class="menu">
            <li class="menu-item">
              <a href="/products">Products</a>
              <!-- hover menu  -->
              <div class="menu-child">
                <div class="menu-child-flex max-w-7xl mx-auto px-4">
                  <div class="menu-child-item grid grid-cols-4">
                    <div class="">
                      <h4 class="mb-4">  <a href="">Earrings</a></h4>
                      <ul class="menu-child-list">
                        <li><a href="">Tops</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Silk</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Denim</a></li>
                      </ul>
                    </div>
                    <div class="">
                    <h4 class="mb-4">  <a href="">Earrings</a></h4>
                      <ul class="menu-child-list">
                        <li><a href="">Tops</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Silk</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Denim</a></li>
                      </ul>
                    </div>
                    <div class="">
                    <h4 class="mb-4">  <a href="">Earrings</a></h4>
                      <ul class="menu-child-list">
                        <li><a href="">Tops</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Silk</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Denim</a></li>
                      </ul>
                    </div>
                    <div class="">
                        <h4 class="mb-4">  <a href="">Earrings</a></h4>
                      <ul class="menu-child-list">
                        <li><a href="">Tops</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Silk</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Denim</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="menu-child-item">
                    <div class="grid grid-cols-2 gap-6">
                      <div class="w-[80%]">
                        <a href="">
                          <img
                            class="rounded"
                            src="https://i.pinimg.com/564x/5f/4c/7d/5f4c7d607739003b710d647c79c0b095.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="w-[80%]">
                        <a href="">
                          <img
                            class="rounded"
                            src="https://i.pinimg.com/564x/eb/fc/74/ebfc74489aed6e4a13f63647ab9375f6.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
           
            <li class="menu-item"><a href="/posts">News</a></li>
            <li class="menu-item"><a href="">Stores</a></li>
            <li class="menu-item"><a href="/signin">Sign in</a></li>
           
            <li class="menu-item text-slate-600">
              <a href=""><i class="fas fa-search"></i></a>
            </li>
            <li class="menu-item text-slate-600">
              <a href="/cart"><i class="fas fa-shopping-bag"></i></a>
            </li>
            <li class="menu-item">
            ${localStorage.getItem("user") ? ` <ul class="flex">
                <li><a class=" p-2 " id="account-name" href="/#/admin/dashboard"></a></li>
                <li><a  id="logout" href=""><i class="fa-solid fa-right-from-bracket"></i></a></li>
            </ul>
          ` : ""}
            </li>
          </ul>
         
        </div>
      </header>
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");

        document.querySelector("#account-name").innerHTML = user.username;

        // log out
        logout.addEventListener("click", () => {
            toastr.success("log out thanh cong");
            localStorage.removeItem("user");
            reRender(Header, "#header");
        });
    },
};
export default Header;
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
              <a href="/products"> Women</a>
              <!-- hover menu  -->
              <div class="menu-child">
                <div class="menu-child-flex max-w-7xl mx-auto px-4">
                  <div class="menu-child-item grid grid-cols-4">
                    <div class="">
                      <h4 class="mb-4">Necklaces</h4>
                      <ul class="menu-child-list">
                        <li><a href="">Tops</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Silk</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Denim</a></li>
                      </ul>
                    </div>
                    <div class="">
                      <h4 class="mb-4">Earrings</h4>
                      <ul class="menu-child-list">
                        <li><a href="">Tops</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Silk</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Denim</a></li>
                      </ul>
                    </div>
                    <div class="">
                      <h4 class="mb-4">Earrings</h4>
                      <ul class="menu-child-list">
                        <li><a href="">Tops</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Silk</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Denim</a></li>
                      </ul>
                    </div>
                    <div class="">
                      <h4 class="mb-4">Necklaces</h4>
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
            <li class="menu-item">
              <a href="">Men</a>
              <div class="menu-child">
                <div class="menu-child-flex max-w-7xl mx-auto px-4">
                  <div class="menu-child-item grid grid-cols-4">
                    <div class="">
                      <h4 class="mb-4">Necklaces</h4>
                      <ul class="menu-child-list">
                        <li><a href="">Tops</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Silk</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Denim</a></li>
                      </ul>
                    </div>
                    <div class="">
                      <h4 class="mb-4">Earrings</h4>
                      <ul class="menu-child-list">
                        <li><a href="">Tops</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Silk</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Denim</a></li>
                      </ul>
                    </div>
                    <div class="">
                      <h4 class="mb-4">Earrings</h4>
                      <ul class="menu-child-list">
                        <li><a href="">Tops</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Silk</a></li>
                        <li><a href="">Pants</a></li>
                        <li><a href="">Denim</a></li>
                      </ul>
                    </div>
                    <div class="">
                      <h4 class="mb-4">Necklaces</h4>
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
                            src="https://i.pinimg.com/564x/ce/58/af/ce58af8c20196674bff5fafe38a07595.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="w-[80%]">
                        <a href="">
                          <img
                            class="rounded"
                            src="https://i.pinimg.com/564x/bb/4c/4d/bb4c4d86ef9176c840c77518e7b508c3.jpg"
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
            <li class="menu-item"><a href="">Sign in</a></li>
            <li class="menu-item"><a href="">create account</a></li>
            <li class="menu-item text-slate-600">
              <a href=""><i class="fas fa-search"></i></a>
            </li>
            <li class="menu-item text-slate-600">
              <a href=""><i class="fas fa-shopping-bag"></i></a>
            </li>
          </ul>
        </div>
      </header>
        `;
    },
};
export default Header;
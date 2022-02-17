import Navigo from "navigo";
import postsPage from "./pages/posts";
import signIn from "./pages/signin";
import HomePage from "./pages/home";
import signUp from "./pages/signup";
import productsPage from "./pages/products/products";
import Dashboard from "./pages/admin/dashboard";
import addProduct from "./pages/admin/products/add";
import listProduct from "./pages/admin/products";
import Detail from "./pages/products/detail";
import editProduct from "./pages/admin/products/edit";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    // content trả về cho chúng ta 1 object(render và afterRender)
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/posts": () => {
        print(postsPage);
    },
    "/products": () => {
        print(productsPage);
    },
    "/signin": () => {
        print(signIn);
    },
    "/singup": () => {
        print(signUp);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/product/detail/:id": ({ data }) => {
        print(Detail, data.id);
    },
    "/product/add": () => {
        print(addProduct);
    },
    "/product/edit:id": ({ data }) => {
        print(editProduct, data.id);
    },
    "/admin/list/product": () => {
        print(listProduct);
    },
});
router.resolve();
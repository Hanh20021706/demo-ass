import Navigo from "navigo";
import postsPage from "./pages/posts";
import productsPage from "./pages/products";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
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
        print();
    },
    "/singup": () => {
        print();
    },
    "/stores": () => {
        print();
    },
});
router.resolve();
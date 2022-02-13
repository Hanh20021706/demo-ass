import Navigo from "navigo";
import postsPage from "./pages/posts";
import productsPage from "./pages/products";
import signIn from "./pages/signin";
import HomePage from "./pages/home";
import signUp from "./pages/signup";

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
        print(signIn);
    },
    "/singup": () => {
        print(signUp);
    },
    "/stores": () => {
        print();
    },
});
router.resolve();
import Navigo from "navigo";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/news": () => {
        print();
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
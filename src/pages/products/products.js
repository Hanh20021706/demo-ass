import Footer from "../../components/footer";
import Header from "../../components/header";
import productsMain from "../../components/productsMain";

const productsPage = {
    async render() {
        return /* html */`
        <div>
            ${Header.render()}
            ${await productsMain.render()}
            ${Footer.render()}
        </div>
        `;
    },
};
export default productsPage;
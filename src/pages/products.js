import Footer from "../components/footer";
import Header from "../components/header";
import productsMain from "../components/productsMain";

const productsPage = {
    render() {
        return /* html */`
        <div>
            ${Header.render()}
            ${productsMain.render()}
            ${Footer.render()}
        </div>
        `;
    },
};
export default productsPage;
import Footer from "../../components/footer";
import Header from "../../components/header";
import productsMain from "../../components/productsMain";

const productsPage = {
    async render() {
        return /* html */`
        <div>
            <div id="header">  ${Header.render()} </div>
           
            ${await productsMain.render()}
            ${Footer.render()}
        </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default productsPage;
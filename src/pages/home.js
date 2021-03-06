import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/homeMain";

const HomePage = {
    render() {
        return /* html */`
            <div> 
            <div id="header">  ${Header.render()} </div>
            ${Banner.render()}
            <main>
            ${Main.render()}
            </main>
            ${Footer.render()}
            </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;
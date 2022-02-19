import Footer from "../components/footer";
import Header from "../components/header";
import postsMain from "../components/postsMain";

const postsPage = {
    async render() {
        return /* html */`
        <div>
        ${Header.render()}
        ${await postsMain.render()}
        ${Footer.render()}
        </div>
        `;
    },
};
export default postsPage;
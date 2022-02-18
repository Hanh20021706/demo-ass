import { getAll } from "../api/post";

const postsMain = {
    async render() {
        const news = await getAll();
        console.log(news);
        return /* html */`
        <main class="main-post">
        <div class="header-main">
          <h2 class="title-posts">NEWS AND EVENTS</h2>
          <p>
            Follow the latest news from the Maison and see all the stars dressed
            in Dior from past events.
          </p>
        </div>
        <div class="body-posts max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-3 gap-8">
         ${news.data.map((post) => `
            <div class="item-post">
            <a href="">
              <img src="${post.img}" alt="" />
            </a>
            <h4>${post.title}</h4>
            <p>
             ${post.desc}
            </p>
            <button class="btn-post">
              DISCOVER
            </button>
          </div>
         
        </div>
            `).join("")}
          
          <div class="footer-posts">
              <button class="btn-footer">
                VIEW ALL
              </button>
          </div>
        </div>
      </main>
        `;
    },
};
export default postsMain;
import axios from "axios";
import listPost from ".";
import { get, update } from "../../../api/post";
import AdminNav from "../../../components/adminNav";
import { reRender } from "../../../utils";

const editPost = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        <div>${AdminNav.render()} </div>
        <div class="max-w-5xl mx-auto">
        <div class="-my-0 sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <form id="form-add-post" action="#" method="POST" class=" ">
                <h2
                  class="mt-6 text-center text-3xl font-normal uppercase font-sans text-gray-900">
                  thêm sản phẩm
                </h2>
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label class="block">
                        <span
                          class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                          Tiêu đề
                        </span>
                        <input
                          id="title-post"
                          type="text"
                          name=""
                          class="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          placeholder=""
                          value = "${data.title}"
                          />
                      </label>
                    </div>
                  </div>
                  <div>
                    <label
                      for="about"
                      class="block text-sm font-medium text-gray-700">
                      Mô Tả
                    </label>
                    <div class="mt-1">
                      <textarea
                        id="desc-post"
                        name="about"
                        rows="3"
                        class="mt-1 w-full px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder=""> ${data.desc}</textarea>
                    </div>
                  </div>
                  <img  width= "250px" src="${data.img}" alt="" srcset="" id="img-preview">
                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                  </div>
                  <div
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                   
                    <input
                    id="img-post" type="file" class="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder=""/>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
          `;
    },
    afterRender(id) {
        const formAdd = document.querySelector("#form-add-post");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");
        let imgLink = "";
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dkpulhfe7/image/upload";
        const CLOUDINARY_PRESET = "votxzxvk";

        // handle sự kiện change để xem ảnh trên local
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);

                // call api cloudinary
                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink = data.url;
            }

            // call api thêm bài viết
            update({
                id,
                title: document.querySelector("#title-post").value,
                img: imgLink || imgPreview.src,
                desc: document.querySelector("#desc-post").value,
            });
            window.location.href = "/admin/list/post";
            reRender(listPost, "#app");
        });
    },
};
export default editPost;
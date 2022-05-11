import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import listProduct from ".";
import { getAll } from "../../../api/categories";
import { add } from "../../../api/products";
import AdminNav from "../../../components/adminNav";
import { reRender } from "../../../utils";

const addProduct = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div> ${AdminNav.render()} </div>
        <div class="max-w-5xl mx-auto">
        <div class="-my-0 sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <form id="form-add-product" action="#" method="POST" class=" ">
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
                          Tên Sản Phẩm
                        </span>
                        <input
                          id="name-product"
                          type="text"
                          name="name-product"
                          class="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          placeholder=""/>
                      </label>
                    </div>
                    <div class="col-span-3 sm:col-span-2">
                    <label class="block">
                      <span
                        class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        Danh Muc
                      </span>
                      <select name="" id="cate-product" class=" slec-cate w-full border px-8 py-2  shadow-sm border-gray-300 placeholder-gray-400 rounded-md  focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1">
                      ${data.map((item) => `
                      <option value="${item.id}">${item.name}</option>
                      `).join("")}
                    </select>
                    </label>
                  </div>
                    <div class="col-span-3 sm:col-span-2">
                    <label class="block">
                      <span
                        class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                       Màu Sắc
                      </span>
                      <input
                        id="color-product"
                        type="text"
                        name="color-product"
                        class="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder=""/>
                    </label>
                  </div>
                    <div class="col-span-3 sm:col-span-2">
                    <label class="block">
                      <span
                        class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        Giá Sản Phẩm
                      </span>
                      <input
                        id="price-product"
                        type="number"
                        name="price-product"
                        class="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder=""/>
                    </label>
                  </div>
                  
                  <div class="col-span-3 sm:col-span-2">
                  <label class="block">
                    <span
                      class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                     Số Lượng
                    </span>
                    <input
                      id="quantity-product"
                      type="number"
                      name="quantity-product"
                      class="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder=""/>
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
                        id="desc-product"
                        name="desc-product"
                        rows="3"
                        class="mt-1 w-full px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder=""></textarea>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                  </div>
                  <div
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                   
                    <input
                    id="img-product" type="file" class="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
        `;
    },
    afterRender() {
        const formAdd = $("#form-add-product");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dkpulhfe7/image/upload";
        const CLOUDINARY_PRESET = "votxzxvk";

        formAdd.validate({
            rules: {
                "name-product": {
                    required: true,
                    minlength: 10,
                },
                "price-product": {
                    required: true,
                    step: 10,
                },
                "quantity-product": {
                    required: true,
                    step: 3,
                },
                "color-product": {
                    required: true,
                    minlength: 10,
                },
            },
            messages: {
                "name-product": {

                    required: "Không để trống trường này!",
                    minlength: "Ít nhất phải trên 10 ký tự",
                },
                "price-product": {
                    required: "Không để trống trường này!",
                    minlength: "Ít nhất phải trên 10 ký tự",
                },
                "quantity-product": {
                    required: "Không để trống trường này!",
                    minlength: "Ít nhất phải trên 10 ký tự",
                },
                "color-product": {
                    required: "Không để trống trường này!",
                    minlength: "Ít nhất phải trên 10 ký tự",
                },
            },
            submitHandler: () => {
                async function handleAddProduct() {
                    const file = document.querySelector("#img-product").files[0];
                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("upload_preset", CLOUDINARY_PRESET);

                    const { data } = await axios.post(CLOUDINARY_API, formData, {
                        headers: {
                            "Content-Type": "application/form-data",
                        },
                    });
                    add({
                        name: document.querySelector("#name-product").value,
                        color: document.querySelector("#color-product").value,
                        price: document.querySelector("#price-product").value,
                        quantity: document.querySelector("#quantity-product").value,
                        categorieId: Number(document.querySelector("#cate-product").value),
                        img: data.url,
                        desc: document.querySelector("#desc-product").value,

                    });
                    window.location.href = "/admin/list/product";
                    reRender(listProduct, "#app");
                }
                handleAddProduct();
            },
        });

        // formAdd.addEventListener("submit", async (e) => {
        //     e.preventDefault();
        //     const file = document.querySelector("#img-product").files[0];

        //     const formData = new FormData();
        //     formData.append("file", file);
        //     formData.append("upload_preset", CLOUDINARY_PRESET);

        //     const { data } = await axios.post(CLOUDINARY_API, formData, {
        //         headers: {
        //             "Content-Type": "application/form-data",
        //         },
        //     });
        //     add({
        //         name: document.querySelector("#name-product").value,
        //         color: document.querySelector("#color-product").value,
        //         price: document.querySelector("#price-product").value,
        //         quantity: document.querySelector("#quantity-product").value,
        //         categorieId: Number(document.querySelector("#cate-product").value),
        //         img: data.url,
        //         desc: document.querySelector("#desc-product").value,

        //     });
        //     window.location.href = "/admin/list/product";
        //     reRender(listProduct, "#app");
        // });
    },
};
export default addProduct;
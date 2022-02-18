import toastr from "toastr";
import { getAll, remove } from "../../../api/post";
import AdminNav from "../../../components/adminNav";
import { reRender } from "../../../utils";

const listPost = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div>${AdminNav.render()} </div>
        <div class ="max-w-5xl mx-auto flex my-8 justify-between  "> 
        <h2 class = "font-sans text-2xl font-bold uppercase"> Quản Lý Bài Viết  </h2> 
    
   <div class =""> 
        <a href="/#/post/add" class="sm:ml-3">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <!-- Heroicon name: solid/check -->
            <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Thêm Mới
        </button>
        </a>
   </div>
   </div>
   
    <div class="max-w-[84rem] mx-auto">
    <div class="-my-0 sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
          <div class="mt-5 flex lg:mt-0 lg:ml-4">
          
                <thead class="bg-slate-200 w-24 ">
                <tr>
                <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    id 
                </th>
                <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    title
                </th>
                <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    images 
                </th>
                
                <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                description
                </th>
                <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                edit
                </th>
                <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                delete
                </th>
                
                <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            ${data.map((post) => `
            <tr>
            <td class="px-4 py-4 whitespace-nowrap">
                <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                ${post.id}
                
                </div>
                </div>
            </td>
            <td class="px-4 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">   ${post.title}</div>
                
            </td>
            <td class="px-4 py-4 whitespace-nowrap">
            
                
                <img class="w-[200px]" src=" ${post.img}" alt="">
            
            </td>
           
            <td class="px-4  py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900 w-[200px]">   ${post.desc}</div>
            
            </td>
         
            <td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="/post/edit${post.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
            <td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button type="button" data-id=${post.id} class=" btn btn-remove text-rose-600">
            <!-- Heroicon name: solid/check -->
              Delete
          </button>
            </td>
            
            </tr>
            
            `).join("")}
            
                <!-- More people... -->
            </tbody>
        </table>
        </div>
        </div>
        </div>
      </div>

        `;
    },
    afterRender() {
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("bạn có chắc chắn muốn xóa?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("bạn đã xóa bài viết");
                    }).then(() => {
                        reRender(listPost, "#app");
                    });
                }
            });
        });
    },
};
export default listPost;
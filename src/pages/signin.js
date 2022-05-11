import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";

const signIn = {
    render() {
        return /* html */`
        <div class="">
        <header class="header-signin">
            <a href="">
                <img width="100px" src="https://www.freepnglogos.com/uploads/vogue-png-logo/vogue-paris-png-logo-11.png" alt="">
            </a>
        </header>
        <main class="main-signin">
            <h2 class="title-signin">
                Sign in to your account
            </h2>
            <p>Enter your email address to continue.</p>
            <form action="" class="form-signin" id = "formSignin">
                <div class="inp-item">
                 <label class="label-name" for="">Email</label>
                 <input type="email" name="" id="email" placeholder="your email address" class="inp-email">
                </div>
                <div class="inp-item">
                    <label class="label-name" for="">Password</label>
                    <input type="password" name="" id="password" placeholder="your password" class="inp-pass">
                </div>
                <button class="btn-next">
                    NEXT
                </button>
                <a href="/signup" class="create-ac">
                create account
                </a>
             </form>

            
        </main>
       
       
    </div>
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("bạn đã đăng nhập thành công chờ 2s để chuyển trang");
                setTimeout(() => {
                    if (data.user.id === 1) {
                        document.location.href = "/#/admin/dashboard";
                    } else { document.location.href = "/#/"; }
                }, 2000);
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default signIn;
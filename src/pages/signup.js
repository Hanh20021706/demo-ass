import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { singup } from "../api/user";

const signUp = {
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
            <form action="" class="form-signin" id ="formSignup" method="POST">
                <div class="inp-item">
                    <label class="label-name" for="">Name</label>
                    <input type="text" name="" id="username" placeholder="your name (5-8 characters)" class="inp-email">
                   </div>
                <div class="inp-item">
                 <label class="label-name" for="">Email</label>
                 <input type="email" name="" id="email" placeholder="your email address" class="inp-email">
                </div>
                <div class="inp-item">
                    <label class="label-name" for="">Password</label>
                    <input type="password" name="" id="password" placeholder="your password" class="inp-pass">
                </div>
                <button class="btn-next">
                    REGISTER
                </button>
             </form>
        </main>
       
       
    </div>
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await singup({
                    username: document.querySelector("#username").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    toastr.success("Đăng Ký thành công, chờ chuyển trang");
                    setTimeout(() => {
                        document.location.href = "/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response);
            }
        });
    },
};
export default signUp;
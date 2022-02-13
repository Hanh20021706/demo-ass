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
            <form action="" class="form-signin">
                <div class="inp-item">
                    <label class="label-name" for="">Name</label>
                    <input type="text" name="" id="" placeholder="your name (5-8 characters)" class="inp-email">
                   </div>
                <div class="inp-item">
                 <label class="label-name" for="">Email</label>
                 <input type="email" name="" id="" placeholder="your email address" class="inp-email">
                </div>
                <div class="inp-item">
                    <label class="label-name" for="">Password</label>
                    <input type="password" name="" id="" placeholder="your password" class="inp-pass">
                </div>
                <button class="btn-next">
                    REGISTER
                </button>
             </form>
        </main>
       
       
    </div>
        `;
    },
};
export default signUp;
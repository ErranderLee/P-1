export default function home() {
    document.title = "Home";
    const upper = document.querySelector("#upper");
    const signIn = document.createElement("a");
    signIn.innerText = "LogIn";
    signIn.href = "/signin";
    upper.appendChild(signIn);
}
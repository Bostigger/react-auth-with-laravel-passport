class ApiBase{

    static BASE_URL ="http://127.0.0.1:8000/api";

    static LOGIN_URL = this.BASE_URL+"/login";
    static REGISTER_URL = this.BASE_URL+"/register";
    static FORGOT_URL = this.BASE_URL+"/forget-password";
    static GET_USER = this.BASE_URL+"/user";
    static RESET_PASSWORD = this.BASE_URL+"/reset-password";


}export default ApiBase;
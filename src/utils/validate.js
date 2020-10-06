const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default ({name, email, company, body}) => {
    if(!name) return "Please enter your name";
    if(!email || re.test(email) === false) return "Please enter a valid email address";
    if(!company) return "Please enter your company name";
    if(!body) return "Please compose your email";
    return null;
}
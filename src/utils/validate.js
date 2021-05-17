const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let errors = {};

export default ({ name, email, company, body }) => {
  name.length = 0
    ? (errors.name = 'Please enter your name')
    : (errors.name = null);
  email.length =
    0 || re.test(email) === false
      ? (errors.email = 'Please enter a valid email address')
      : (errors.email = null);
  company.length = 0
    ? (errors.company = 'Please enter your company name')
    : (errors.company = null);
  body.length = 0
    ? (errors.body = 'Please compose your email')
    : (errors.body = null);

  return errors;
};

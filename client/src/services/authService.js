import { userLogin } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!email || !password || !role) {
      return alert("All fields required");
    }
    store.dispatch(userLogin({ email, password, role }));
    console.log("login", email, password, role);
  } catch (err) {
    console.log(err);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  organisationName,
  hospitalName,
  address,
  phone
) => {
  e.preventDefault();
  try {
    console.log(
      "register",
      name,
      role,
      email,
      password,
      organisationName,
      hospitalName,
      address,
      phone
    );
  } catch (error) {
    console.log(error);
  }
};

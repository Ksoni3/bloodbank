import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, role, email, password) => {
  try {
    if (!email || !password || !role) {
      return alert("All fields required");
    }
    console.log("login", email, password, role);
    store.dispatch(userLogin({ role, email, password }));
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
  console.lo;
  try {
    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        organisationName,
        hospitalName,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

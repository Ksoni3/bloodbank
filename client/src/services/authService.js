export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!email || !password || !role) {
      return alert("All fields required");
    }
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

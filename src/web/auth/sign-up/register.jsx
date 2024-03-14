import { useCallback, useState } from "react";
import LoadingButton from "../../../components/loading-button";
import { useSignUpMutation } from "../../../hooks/useAuth";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export default function RegisterView() {
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const onSuccess = useCallback(
    (data) => {
      if (data.status === 201) {
        enqueueSnackbar("User registered successfully!");
        navigate("/login/?signedUp=true");
      }
    },
    [enqueueSnackbar, navigate]
  );
  const onError = useCallback(
    (data) => {
      if (data?.response?.status === 400) {
        if (Array.isArray(data?.response?.data?.message)) {
          console.log(data.response.data.message);
          enqueueSnackbar(data.response.data.message[0], {
            variant: "error",
          });
        } else {
          enqueueSnackbar(data?.response?.data?.message, { variant: "error" });
        }
      }
    },
    [enqueueSnackbar]
  );

  const { mutate: signUpMutation, isLoading } = useSignUpMutation(
    onSuccess,
    onError
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      signUpMutation(userCredentials);
    },
    [signUpMutation, userCredentials]
  );
  return (
    <>
      <div className="row mt-4">
        <div className="col-6">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shop-a6a23.appspot.com/o/register%2Fprofessionals.png?alt=media&token=3adec4f7-f8c4-47a6-88bb-54636ac9b255"
            style={{ height: "500px", width: "500px", flexGrow: "1" }}
          />
        </div>
        <div className="col-6">
          <form className="bg-white  p-5" onSubmit={handleSubmit}>
            <h3 className="fs-4 fw-bold mb-4">
              Join Hamro Sewa to change your Life
            </h3>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name*
              </label>
              <input
                type="firstName"
                value={userCredentials.firstName}
                onChange={handleChange}
                className="form-control"
                id="firstName"
                name="firstName"
                aria-describedby="nameHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="middleName" className="form-label">
                Middle Name
              </label>
              <input
                type="middleName"
                value={userCredentials.middleName}
                onChange={handleChange}
                className="form-control"
                id="middleName"
                name="middleName"
                aria-describedby="nameHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name*
              </label>
              <input
                type="name"
                value={userCredentials.lastName}
                onChange={handleChange}
                className="form-control"
                id="lastName"
                name="lastName"
                aria-describedby="nameHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number*
              </label>
              <input
                type="text"
                value={userCredentials.contactNumber}
                onChange={handleChange}
                className="form-control"
                id="contactNumber"
                name="contactNumber"
                aria-describedby="numberHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
                type="email"
                value={userCredentials.email}
                onChange={handleChange}
                className="form-control"
                id="email"
                name="email"
                aria-describedby="addressHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password*
              </label>
              <input
                type="password"
                value={userCredentials.password}
                onChange={handleChange}
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputnumber1" className="form-label">
                Services
              </label>
              <input
                type="number"
                className="form-control"
                id="examplenumber1"
              />
            </div>

            <LoadingButton
              isLoading={isLoading}
              type="submit"
              style="btn btn-primary w-100 mt-3"
            >
              Register
            </LoadingButton>
          </form>
        </div>
      </div>
    </>
  );
}

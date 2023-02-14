import axios from "axios";
import { useForm } from "react-hook-form";

const useMailSubmit = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Email send successfully!!");

    axios
      .post("http://localhost:9001/api/email", {
        email: "hasibulsiam27@gmail.com",
      })
      .then((res) => {
        alert("Send Mail To You");
        setValue("name");
        setValue("email");
        setValue("subject");
        setValue("body");
        setEmail("");
      })
      .catch((e) => console.log(e));
    // axios
    //   .post("/api/email", data)
    //   .then((res) => alert())
    //   .catch((err) => console.log(err));
  };
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};

export default useMailSubmit;

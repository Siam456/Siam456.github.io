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

    setValue("name");
    setValue("email");
    setValue("subject");
    setValue("body");
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

import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import { redirect, useOutletContext } from "react-router-dom";
import PageForm from "../components/PageForm/index.jsx";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch("/users/update-my-data", data);
    toast.success("Your data has been updated");
    return redirect("/me/settings");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};
const Settings = () => {
  const user = useOutletContext();
  const initialState = [
    {
      name: "name",
      type: "text",
      label: "Name",
      placeholder: user.name,
      as: "input",
      value: user.name,
      validation: true,
      regex: /[a-zA-Z0-9]{3,}/,
    },
    {
      name: "email",
      type: "email",
      label: "Email address",
      placeholder: user.email,
      as: "input",
      value: user.email,
      validation: true,
      regex:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      message: "Enter correct email address",
    },
  ];

  return (
    <PageForm
      method="patch"
      initialState={initialState}
      heading="Edit your account"
      button="Save changes"
    />
  );
};

export default Settings;

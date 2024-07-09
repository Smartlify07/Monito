/* eslint-disable react/prop-types */
import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const getErrorMessage = (error) => {
    if (typeof error === "string") {
      return error;
    }
    if (typeof error === "object" && error !== null) {
      return Object.values(error).join(", ");
    }
    return "";
  };
  const [field, meta] = useField(props);
  console.log(meta.error);
  return (
    <div className="flex flex-col  gap-1">
      <label htmlFor={props.name} className="font-medium text-[#18181B]">
        {label}
      </label>
      <input
        {...props}
        {...field}
        className={`${
          meta.touched && meta.error && "border-[#A31111]"
        } rounded-lg py-2 px-3 border-[1.5px] bg-transparent border-[#D4D4D8] text-[#71717A] placeholder:text-sm`}
      />
      {/* {meta.touched && meta.error && (
        <p className="text-sm font-medium ">{getErrorMessage(meta.error)}</p>
      )} */}
    </div>
  );
};

export default TextInput;

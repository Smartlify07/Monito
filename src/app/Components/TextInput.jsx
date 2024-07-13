/* eslint-disable react/prop-types */
import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorClass =
    meta.touched && meta.error ? "border-red-500" : "border-gray-300";
  return (
    <div className="flex flex-col  gap-1">
      <label htmlFor={props.name} className="font-medium text-[#18181B]">
        {label}
      </label>
      <input
        {...props}
        {...field}
        className={` rounded-lg py-2 px-3 border-[1.5px] bg-transparent border-[#D4D4D8] text-[#71717A] placeholder:text-sm ${errorClass}`}
      />
    </div>
  );
};

export default TextInput;

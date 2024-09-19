/* eslint-disable react/prop-types */

const TextField = ({
  type = "text",
  placeholder = "Enter your text",
  label,
  onChangeHandler
}) => {
  return (
    <div className="px-6">
      <label>
        <span>{label}</span>
        <input
          placeholder={placeholder}
          type={type}
          className="w-full px-4 py-2 border border-gray-500 rounded-md"
          onChange={onChangeHandler}
        ></input>
      </label>
    </div>
  );
};

export default TextField;

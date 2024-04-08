/* eslint-disable react/prop-types */
import "./input.css";
function Input({
    className,
    onChange,
    placeholder,
    type,
    min,
    max,
    value,
    errorMessage,
}) {
    return (
        <div className="input-container">
            <input
                className={"input" + " " + className}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                value={value}
                min={min}
                max={max}
            />
            <p className="input-error">{errorMessage}</p>
        </div>
    );
}

export default Input;

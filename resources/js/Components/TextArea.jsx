import { forwardRef, useEffect, useRef } from 'react';
export default forwardRef(function TextArea(
    { type = 'textarea', name, id, value, className, autoComplete, required, isFocused, handleChange, rows, placeholder },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <textarea
                value={value}
                rows={rows}
                name={name}
                id={id}
                className={
                    `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
});
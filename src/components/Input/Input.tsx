import { InputHTMLAttributes } from "react";
import { UseControllerProps, useController } from "react-hook-form";

import style from "./Input.module.css";

export const Input = ({
	id,
	type,
	placeholder,
	...props
}: InputHTMLAttributes<HTMLInputElement> & UseControllerProps<any>) => {
	const { field } = useController(props);
	return <input className={style.textInput} type={type} placeholder={placeholder} {...field} {...props} />;
};

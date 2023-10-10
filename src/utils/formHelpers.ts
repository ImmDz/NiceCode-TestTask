import { FieldErrors } from "react-hook-form";

enum ErrorMessages {
	MESSAGE_REQUIRED_TEXT = "Обязательное поле",
	MESSAGE_PATTERN = "Недопустимые символы",
	MESSAGE_MIN_LEN = "Не менее 2 символов",
	MESSAGE_MAX_LEN = "Не более 15 символов",
	MESSAGE_MIN_VAL = "Значение не может быть меньше 12",
	MESSAGE_MAX_VAL = "Значение не может быть больше 120",
	MESSAGE_REQUIRED_RADIO = "Выберите один из вариантов",
}

enum ErrorTypes {
	REQUIRED = "required",
	PATTERN = "pattern",
	MIN_LENGTH = "minLength",
	MAX_LENGTH = "maxLength",
	MIN_VALUE = "min",
	MAX_VALUE = "max",
}

class FormHelpers {
	getNameError = (errors: FieldErrors) => {
		switch (errors.name?.type) {
			case ErrorTypes.REQUIRED:
				return ErrorMessages.MESSAGE_REQUIRED_TEXT;
			case ErrorTypes.PATTERN:
				return ErrorMessages.MESSAGE_PATTERN;
			case ErrorTypes.MIN_LENGTH:
				return ErrorMessages.MESSAGE_MIN_LEN;
			case ErrorTypes.MAX_LENGTH:
				return ErrorMessages.MESSAGE_MAX_LEN;
		}
	};

	getSurnameError = (errors: FieldErrors) => {
		switch (errors.surname?.type) {
			case ErrorTypes.REQUIRED:
				return ErrorMessages.MESSAGE_REQUIRED_TEXT;
			case ErrorTypes.PATTERN:
				return ErrorMessages.MESSAGE_PATTERN;
			case ErrorTypes.MIN_LENGTH:
				return ErrorMessages.MESSAGE_MIN_LEN;
			case ErrorTypes.MAX_LENGTH:
				return ErrorMessages.MESSAGE_MAX_LEN;
		}
	};

	getAgeError = (errors: FieldErrors) => {
		switch (errors.age?.type) {
			case ErrorTypes.MIN_VALUE:
				return ErrorMessages.MESSAGE_MIN_VAL;
			case ErrorTypes.MAX_VALUE:
				return ErrorMessages.MESSAGE_MAX_VAL;
		}
	};
}

export const formHelpers = new FormHelpers();

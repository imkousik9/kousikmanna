import { type } from 'os';
import { useState } from 'react';

export type stateType = {
    _replyto: string;
    name: string;
    message: string;
};

const useForm = () => {
    const [formData, setFormData] = useState({} as stateType);

    const [errors, setErrors] = useState({} as stateType);

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const nameRegex = /^[a-zA-Z\s]*[^\s]$/gim;
    const messageRegex = /^[\w\d][^<>/\\&]*$/gim;

    function isValid(value: string, name: string, regex: RegExp, text: string) {
        if (!value) {
            setErrors({ ...errors, [name]: `Your ${text} is required` });
            return false;
        } else if (!regex.test(value)) {
            setErrors({ ...errors, [name]: `Your ${text} is not valid` });
            return false;
        } else {
            setErrors({ ...errors, [name]: '' });
            return true;
        }
    }

    function validateInput(name: string, value: string): boolean {
        switch (name) {
            case '_replyto':
                return isValid(value, name, emailRegex, 'Email');
            case 'name':
                return isValid(value, name, nameRegex, 'Name');
            case 'message':
                return isValid(value, name, messageRegex, 'Message');
            default:
                break;
        }
    }

    const handleInput = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        // validate
        validateInput(name, value);
        setFormData({ ...formData, [name]: value });
    };

    const isFormValid = () => {
        let errorArray = Object.values(errors);
        return (
            errorArray.length === 3 && errorArray.filter(Boolean).length === 0
        );
    };

    return { formData, errors, handleInput, isFormValid: isFormValid() };
};

export default useForm;

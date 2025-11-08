import {toast,Bounce } from 'react-toastify';


export function EmailValidation(email="mahmudulhasan8627@gmail.com") {
    const RegexPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let IsValidate = RegexPattern.test(email.toLocaleLowerCase());
    return IsValidate;     
}


// Toast Function is here

export function SuccessToast(title,position="top-right") {
    toast.success(`${title}`, {
position: position,
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
};

export function ErrorToast(title,position="top-right") {
    toast.error(title, {
position: position,
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
};

export function FireBaseDataToast(title,position="top-center") {
    toast.success(`${title} Data successdully Done`, {
position: position,
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
};
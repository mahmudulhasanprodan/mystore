import { toast, Bounce } from 'react-toastify';


export function SuccessTost(title, position = "top-right") {
    toast.success(title, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
};

export function ErrorTost(title, position = "top-right") {
    toast.error(title, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
}

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default async function ToastNotification() {
    return (
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      );
  }
import { Suspense } from "react";
import AppBar from "./AppBar";
import Loader from "./common/Loader/Loader";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Loader />
      <Toaster />
    </div>
  );
};

export default Layout;

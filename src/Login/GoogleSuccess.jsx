import { useEffect } from "react";

const GoogleSuccess = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const name = params.get("name");
    const email = params.get("email");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ name, email }));
    }

    window.location.href = "/signup";
  }, []);

  return <div>Logging you in...</div>;
};

export default GoogleSuccess;

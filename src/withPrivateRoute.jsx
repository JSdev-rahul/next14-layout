import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function withAuth(Component) {
  return function withAuth(props) {
    const session = true;
    useEffect(() => {
      if (!session) {
        redirect("/");
      }
    }, []);
    if (!session) {
      return null;
    }
    return <Component {...props} />;
  };
}

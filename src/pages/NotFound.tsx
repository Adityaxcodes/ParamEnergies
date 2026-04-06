import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { TextAnimate } from "@/registry/magicui/text-animate";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <TextAnimate as="h1" animation="slideUp" by="word" className="mb-4 text-4xl font-bold">
          404
        </TextAnimate>
        <TextAnimate
          as="p"
          animation="slideUp"
          by="word"
          className="mb-4 text-xl text-muted-foreground"
        >
          Oops! Page not found
        </TextAnimate>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

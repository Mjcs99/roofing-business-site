import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ComingSoonPage.css";

export default function ComingSoonPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/financing");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="coming-soon-page">
      <div className="coming-soon-container">
        <h1>Financing Coming Soon</h1>

        <p>
          We're setting up our financing options. You'll be redirected shortly.
        </p>

        <p className="coming-soon-sub">
          If you are not redirected,{" "}
          <button onClick={() => navigate("/financing")}>
            click here
          </button>
        </p>
      </div>
    </main>
  );
}
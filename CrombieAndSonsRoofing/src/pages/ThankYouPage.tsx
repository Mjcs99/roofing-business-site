import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYouPage.css"
export default function ThankYouPage() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="thank-you-container">
      <div className="check">✓</div>
      <h1>Thank You!</h1>
      <p>Your request has been sent successfully.</p>
      <p>We'll get back to you shortly.</p>

      <p className="countdown">
        Redirecting to homepage in <strong>{seconds}</strong> seconds...
      </p>
    </div>
  );
}
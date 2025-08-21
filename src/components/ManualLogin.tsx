import React from "react";

export const ManualLogin: React.FC = () => {
  const token = getToken();
  const isLoggedIn = !!token;

  const handleLogin = () => {
    const currentPage = window.location.toString();
    window.location.href = `https://api.peerwave.ai/api/third-party/auth?redirect=${currentPage}`;
  };

  return (
    <>
      <h2>Manual Login Example</h2>
      <p>
        {isLoggedIn
          ? "You are logged in! Your authentication token is present."
          : "You are not logged in. Click the button below to authenticate."}
      </p>

      {isLoggedIn && (
        <p>
          <strong>Token:</strong> {token?.substring(0, 20)}...
        </p>
      )}

      <button disabled={isLoggedIn} onClick={handleLogin}>
        {isLoggedIn ? "Already Logged In" : "Login with Peerwave"}
      </button>
    </>
  );
};

function getToken(): string | null {
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  return hashParams.get("token");
}

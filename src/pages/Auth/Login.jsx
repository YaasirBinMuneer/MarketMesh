export default function Login() {
  return (
    <div className="auth-container">
      <h2>Retailer Login</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>

      <p className="text-muted mt-1">
        {/* TODO: Hook to authentication service */}
      </p>
    </div>
  );
}

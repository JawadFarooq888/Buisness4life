import { loginAction } from "./actions";

const ERROR_MESSAGES: Record<string, string> = {
  invalid: "Incorrect username or password.",
  config: "Admin login is not configured yet — set ADMIN_USERNAME, ADMIN_PASSWORD, and SESSION_SECRET.",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const errorMessage = params.error ? ERROR_MESSAGES[params.error] : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-dark px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-red">Buisness</span>
            <span className="text-foreground-invert">4Life</span>
          </span>
          <p className="mt-2 text-sm text-muted-invert">Admin Login</p>
        </div>

        <form action={loginAction} className="glass-dark rounded-2xl p-6">
          <input type="hidden" name="next" value={params.next ?? "/admin"} />

          {errorMessage && (
            <p className="mb-4 rounded-lg bg-red/15 px-4 py-2.5 text-sm text-red">
              {errorMessage}
            </p>
          )}

          <label className="block text-xs font-medium text-muted-invert">Username</label>
          <input
            name="username"
            type="text"
            required
            autoFocus
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-foreground-invert placeholder:text-muted-invert focus:border-red focus:outline-none"
          />

          <label className="mt-4 block text-xs font-medium text-muted-invert">Password</label>
          <input
            name="password"
            type="password"
            required
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-foreground-invert placeholder:text-muted-invert focus:border-red focus:outline-none"
          />

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

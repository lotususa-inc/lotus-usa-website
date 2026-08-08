import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Lock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { formatApiError } from "@/lib/api";
import { IMG } from "@/data/site";

export default function Login() {
  const { user, login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => { document.title = "Admin Login | Lotus USA Inc."; }, []);
  useEffect(() => { if (user && user.email) nav("/admin"); }, [user, nav]);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try { await login(email, password); toast.success("Welcome back."); nav("/admin"); }
    catch (err) { toast.error(formatApiError(err.response?.data?.detail)); }
    finally { setBusy(false); }
  };

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-navy p-5 grain">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-royal/25 blur-[130px]" />
      <div className="relative w-full max-w-md">
        <div className="glass-dark rounded-3xl p-8 lg:p-10" data-testid="login-card">
          <div className="inline-flex rounded-xl bg-white px-4 py-3"><img src="/assets/lotus-logo.png" alt="Lotus USA, Inc." className="h-9" /></div>
          <div className="mt-8 flex items-center gap-3 text-white"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-royal"><Lock className="h-5 w-5" /></span><div><h1 className="font-display text-xl font-bold">Admin Portal</h1><p className="text-xs text-white/50">Secure access for authorized personnel</p></div></div>
          <form onSubmit={submit} className="mt-8 space-y-4" data-testid="login-form">
            <div><label className="overline text-white/50">Email</label><input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-royal-light" data-testid="login-email" /></div>
            <div><label className="overline text-white/50">Password</label><input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-royal-light" data-testid="login-password" /></div>
            <button disabled={busy} className="w-full rounded-full bg-royal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-royal-light disabled:opacity-60" data-testid="login-submit">{busy ? "Signing in…" : "Sign In"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

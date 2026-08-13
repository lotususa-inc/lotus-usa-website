import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LogOut, Users, Mail, FileText, Trash2, Plus, Pencil, X, Upload, FileCheck2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCapability } from "@/context/CapabilityContext";
import { api, formatApiError } from "@/lib/api";
import { IMG } from "@/data/site";

const TABS = [["leads", "Leads", Users], ["subscribers", "Subscribers", Mail], ["blog", "Blog", FileText], ["capability", "Capability", FileCheck2]];
const emptyPost = { title: "", excerpt: "", content: "", category: "Insights", cover_image: "", author: "Lotus USA Inc.", published: true };

export default function Admin() {
  const { user, logout } = useAuth();
  const cap = useCapability();
  const nav = useNavigate();
  const [tab, setTab] = useState("leads");
  const [leads, setLeads] = useState([]);
  const [subs, setSubs] = useState([]);
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => { if (user === false) nav("/login"); }, [user, nav]);

  const load = useCallback(async () => {
    try {
      const [l, s, b] = await Promise.all([api.get("/contacts"), api.get("/newsletter"), api.get("/blog?all=true")]);
      setLeads(l.data); setSubs(s.data); setPosts(b.data);
    } catch { /* redirected by guard */ }
  }, []);
  useEffect(() => { if (user && user.email) load(); }, [user, load]);

  const doLogout = async () => { await logout(); nav("/login"); };
  const delLead = async (id) => { await api.delete(`/contacts/${id}`); setLeads((x) => x.filter((i) => i.id !== id)); toast.success("Lead removed"); };
  const delPost = async (id) => { await api.delete(`/blog/${id}`); setPosts((x) => x.filter((i) => i.id !== id)); toast.success("Post deleted"); };

  const uploadCapability = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".pdf")) { toast.error("Please upload a PDF file."); return; }
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const { data } = await api.post("/capability/upload", fd);
      await cap.refresh();
      toast.success(`Capability updated â€” ${data.extracted.naics} NAICS codes extracted.`);
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail));
    } finally { setUploading(false); }
  };

  const savePost = async (e) => {
    e.preventDefault();
    try {
      if (editing.id) { const { data } = await api.put(`/blog/${editing.id}`, editing); setPosts((x) => x.map((p) => (p.id === data.id ? data : p))); }
      else { const { data } = await api.post("/blog", editing); setPosts((x) => [data, ...x]); }
      toast.success("Saved"); setEditing(null);
    } catch (err) { toast.error(formatApiError(err.response?.data?.detail)); }
  };

  if (!user || !user.email) return <div className="pt-40 text-center text-slate-400">Loadingâ€¦</div>;
  const stats = [["Total Leads", leads.length], ["Subscribers", subs.length], ["Published", posts.filter((p) => p.published).length], ["Drafts", posts.filter((p) => !p.published).length]];
  const field = "w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-royal";

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3"><img src={IMG.logo} alt="Lotus USA" className="h-8" /><span className="hidden text-sm font-semibold text-navy sm:block">Admin Console</span></div>
          <div className="flex items-center gap-4"><span className="hidden text-sm text-slate-500 sm:block">{user.email}</span><button onClick={doLogout} className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-navy hover:bg-navy hover:text-white transition-colors" data-testid="admin-logout"><LogOut className="h-4 w-4" />Sign out</button></div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(([l, v]) => (<div key={l} className="rounded-2xl border border-slate-200 bg-white p-6"><p className="overline text-slate-400">{l}</p><p className="mt-2 font-display text-3xl font-extrabold text-navy">{v}</p></div>))}
        </div>

        <div className="mt-8 flex gap-2 border-b border-slate-200">
          {TABS.map(([id, label, Ic]) => (
            <button key={id} onClick={() => setTab(id)} className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${tab === id ? "border-royal text-royal" : "border-transparent text-slate-500 hover:text-navy"}`} data-testid={`admin-tab-${id}`}><Ic className="h-4 w-4" />{label}</button>
          ))}
        </div>

        <div className="mt-6">
          {tab === "leads" && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white" data-testid="admin-leads">
              {leads.length === 0 ? <p className="p-10 text-center text-slate-400">No leads yet.</p> : (
                <div className="divide-y divide-slate-100">
                  {leads.map((l) => (
                    <div key={l.id} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2"><span className="font-semibold text-navy">{l.name}</span>{l.service && <span className="rounded-full bg-royal/10 px-2.5 py-0.5 text-xs font-medium text-royal">{l.service}</span>}</div>
                        <div className="mt-1 text-sm text-slate-500">{l.email}{l.phone ? ` Â· ${l.phone}` : ""}{l.company ? ` Â· ${l.company}` : ""}</div>
                        <p className="mt-2 text-sm text-slate-700">{l.message}</p>
                        <p className="mt-1 text-xs text-slate-400">{new Date(l.created_at).toLocaleString()}</p>
                      </div>
                      <button onClick={() => delLead(l.id)} className="self-start rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors" data-testid="lead-delete"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === "subscribers" && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white" data-testid="admin-subs">
              {subs.length === 0 ? <p className="p-10 text-center text-slate-400">No subscribers yet.</p> : (
                <div className="divide-y divide-slate-100">{subs.map((s) => (<div key={s.id} className="flex items-center justify-between p-4"><span className="text-sm text-navy">{s.email}</span><span className="text-xs text-slate-400">{new Date(s.created_at).toLocaleDateString()}</span></div>))}</div>
              )}
            </div>
          )}

          {tab === "blog" && (
            <div data-testid="admin-blog">
              <button onClick={() => setEditing({ ...emptyPost })} className="mb-4 inline-flex items-center gap-2 rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy transition-colors" data-testid="new-post"><Plus className="h-4 w-4" />New Post</button>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => (
                  <div key={p.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <div className="h-32 overflow-hidden bg-slate-100">{p.cover_image && <img src={p.cover_image} alt="" className="h-full w-full object-cover" />}</div>
                    <div className="p-4">
                      <div className="flex items-center gap-2"><span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{p.category}</span>{!p.published && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">Draft</span>}</div>
                      <h4 className="mt-2 font-display text-sm font-bold text-navy line-clamp-2">{p.title}</h4>
                      <div className="mt-3 flex gap-2"><button onClick={() => setEditing(p)} className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-navy hover:bg-slate-50" data-testid="edit-post"><Pencil className="h-3 w-3" />Edit</button><button onClick={() => delPost(p.id)} className="rounded-lg border border-slate-200 p-1.5 text-slate-400 hover:text-red-500" data-testid="delete-post"><Trash2 className="h-3.5 w-3.5" /></button></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab === "capability" && (
            <div data-testid="admin-capability">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">Capability Statement</h3>
                    <p className="mt-1 text-sm text-slate-500">Upload a new PDF to auto-refresh the site's NAICS codes and federal registration data. The download link stays the same.</p>
                  </div>
                  <label className={`inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy ${uploading ? "opacity-60 pointer-events-none" : ""}`} data-testid="capability-upload-label">
                    <Upload className="h-4 w-4" />{uploading ? "Processingâ€¦" : "Upload PDF"}
                    <input type="file" accept="application/pdf,.pdf" className="hidden" onChange={uploadCapability} data-testid="capability-upload-input" />
                  </label>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="overline text-slate-400">NAICS Codes ({cap.naics.length})</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cap.naics.map((n) => (<span key={n.code} className="rounded-md bg-navy px-2.5 py-1 font-mono text-xs font-semibold text-white" title={n.desc}>{n.code}</span>))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="overline text-slate-400">Federal Registration</p>
                    <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
                      {cap.registration.map((r) => (<div key={r.label}><dt className="font-mono text-[10px] uppercase tracking-widest text-slate-400">{r.label}</dt><dd className="text-sm font-semibold text-navy">{r.value}</dd></div>))}
                    </dl>
                  </div>
                </div>
                <a href={cap.pdf} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-royal hover:underline" data-testid="capability-current-pdf"><FileText className="h-4 w-4" />View current PDF</a>
              </div>
            </div>
          )}
        </div>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-4 backdrop-blur-sm" onClick={() => setEditing(null)}>
          <form onClick={(e) => e.stopPropagation()} onSubmit={savePost} className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 lg:p-8" data-testid="post-editor">
            <div className="flex items-center justify-between"><h3 className="font-display text-xl font-bold text-navy">{editing.id ? "Edit Post" : "New Post"}</h3><button type="button" onClick={() => setEditing(null)}><X className="h-5 w-5 text-slate-400" /></button></div>
            <div className="mt-5 space-y-4">
              <div><label className="overline text-slate-500">Title</label><input required value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} className={`mt-1 ${field}`} data-testid="post-title" /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="overline text-slate-500">Category</label><input value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })} className={`mt-1 ${field}`} /></div>
                <div><label className="overline text-slate-500">Author</label><input value={editing.author} onChange={(e) => setEditing({ ...editing, author: e.target.value })} className={`mt-1 ${field}`} /></div>
              </div>
              <div><label className="overline text-slate-500">Cover Image URL</label><input value={editing.cover_image} onChange={(e) => setEditing({ ...editing, cover_image: e.target.value })} className={`mt-1 ${field}`} placeholder="https://â€¦" /></div>
              <div><label className="overline text-slate-500">Excerpt</label><textarea required rows={2} value={editing.excerpt} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} className={`mt-1 ${field} resize-none`} data-testid="post-excerpt" /></div>
              <div><label className="overline text-slate-500">Content (double line-break = new paragraph)</label><textarea required rows={8} value={editing.content} onChange={(e) => setEditing({ ...editing, content: e.target.value })} className={`mt-1 ${field} resize-none`} data-testid="post-content" /></div>
              <label className="flex items-center gap-2 text-sm text-navy"><input type="checkbox" checked={editing.published} onChange={(e) => setEditing({ ...editing, published: e.target.checked })} className="h-4 w-4 accent-royal" />Published</label>
            </div>
            <div className="mt-6 flex justify-end gap-3"><button type="button" onClick={() => setEditing(null)} className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium">Cancel</button><button type="submit" className="rounded-full bg-royal px-6 py-2.5 text-sm font-semibold text-white hover:bg-navy transition-colors" data-testid="save-post">Save Post</button></div>
          </form>
        </div>
      )}
    </div>
  );
}


import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Reveal } from "@/components/common";
import { CTABanner } from "@/components/sections";
import { api } from "@/lib/api";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [err, setErr] = useState(false);
  useEffect(() => { setPost(null); setErr(false); api.get(`/blog/${slug}`).then((r) => setPost(r.data)).catch(() => setErr(true)); }, [slug]);
  useSEO({ title: post?.title, description: post?.excerpt, image: post?.cover_image, path: `/insights/${slug}` });

  if (err) return <div className="pt-40 pb-40 text-center"><p className="text-navy font-display text-2xl">Article not found.</p><Link to="/insights" className="mt-4 inline-block text-royal">Back to Insights</Link></div>;
  if (!post) return <div className="pt-40 pb-40 text-center text-slate-400">Loadingâ€¦</div>;

  const date = new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return (
    <>
      <article className="pt-[74px]">
        <div className="relative h-[52vh] min-h-[380px] overflow-hidden bg-navy">
          <img src={post.cover_image} alt={post.title} className="h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-5 pb-12 lg:px-8">
            <Reveal>
              <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><ArrowLeft className="h-4 w-4" /> All Insights</Link>
              <span className="mt-4 block w-fit rounded-full bg-royal px-3 py-1 text-xs font-semibold text-white">{post.category}</span>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white lg:text-5xl">{post.title}</h1>
              <div className="mt-5 flex flex-wrap gap-5 text-sm text-white/60">
                <span className="flex items-center gap-2"><User className="h-4 w-4" />{post.author}</span>
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{date}</span>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="font-display text-xl font-semibold leading-relaxed text-navy">{post.excerpt}</p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-700">
            {post.content.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </article>
      <CTABanner title="Turn insight into action." sub="Let's discuss how these strategies apply to your organization." />
    </>
  );
}


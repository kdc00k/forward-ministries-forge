import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";

const items = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/im-new", label: "I'm New" },
  { to: "/ministries", label: "Ministries" },
  { to: "/watch", label: "Watch" },
  { to: "/give", label: "Give" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On non-home routes, always use solid (light) nav. On home, transparent until scrolled.
  const solid = !isHome || scrolled;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "glass-nav shadow-[0_2px_24px_-12px_rgba(8,58,103,0.25)]" : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link to="/" className="shrink-0" aria-label="Forward Church Ministries home">
          <Logo variant={solid ? "dark" : "light"} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={[
                "px-3.5 py-2 rounded-full text-[14px] font-semibold transition-colors",
                solid
                  ? "text-[color:var(--brand-dark)] hover:text-[color:var(--brand)] hover:bg-[color:var(--brand-soft)]"
                  : "text-white/90 hover:text-white hover:bg-white/10",
              ].join(" ")}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: solid
                  ? "text-[color:var(--brand)] bg-[color:var(--brand-soft)]"
                  : "text-white bg-white/15",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full h-11 px-5 bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-accent)]/90 font-bold shadow-sm">
            <Link to="/plan-a-visit">Plan Your Visit</Link>
          </Button>
        </div>

        <button
          aria-label="Open menu"
          className={[
            "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full",
            solid ? "text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-soft)]" : "text-white hover:bg-white/10",
          ].join(" ")}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-[color:var(--brand-dark)]/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between h-[72px] px-5 border-b border-[color:var(--border)]">
              <Logo variant="dark" />
              <button
                aria-label="Close menu"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-[color:var(--brand-soft)]"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5 text-[color:var(--brand-dark)]" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col">
              {items.map((it) => (
                <Link
                  key={it.to}
                  to={it.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3.5 rounded-xl text-[color:var(--brand-dark)] font-display font-bold text-lg hover:bg-[color:var(--brand-soft)]"
                  activeOptions={{ exact: it.to === "/" }}
                  activeProps={{ className: "text-[color:var(--brand)] bg-[color:var(--brand-soft)]" }}
                >
                  {it.label}
                </Link>
              ))}
              <Link
                to="/plan-a-visit"
                onClick={() => setOpen(false)}
                className="mt-4 mx-1 px-4 py-3.5 rounded-full text-center bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] font-bold"
              >
                Plan Your Visit →
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

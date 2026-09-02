import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Footer() {
  return (
    <footer className="bg-[color:var(--brand-dark)] text-white">
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-xs">
            Helping people know Jesus, grow in faith, build authentic relationships, and make a lasting impact throughout Mobile, Alabama.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--brand-accent)] hover:text-[color:var(--brand-dark)] transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--brand-accent)] hover:text-[color:var(--brand-dark)] transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--brand-accent)] hover:text-[color:var(--brand-dark)] transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-[color:var(--brand-accent)]">About</Link></li>
            <li><Link to="/im-new" className="hover:text-[color:var(--brand-accent)]">I'm New</Link></li>
            <li><Link to="/ministries" className="hover:text-[color:var(--brand-accent)]">Ministries</Link></li>
            <li><Link to="/events" className="hover:text-[color:var(--brand-accent)]">Events</Link></li>
            <li><Link to="/watch" className="hover:text-[color:var(--brand-accent)]">Watch</Link></li>
            <li><Link to="/give" className="hover:text-[color:var(--brand-accent)]">Give</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">Visit Us</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--brand-accent)]" /><span>8930 CR-36<br />Mobile, AL 36695</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--brand-accent)]" /><a href="tel:+12515550100" className="hover:text-[color:var(--brand-accent)]">(251) 555-0100</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--brand-accent)]" /><a href="mailto:hello@forwardchurch.org" className="hover:text-[color:var(--brand-accent)]">hello@forwardchurch.org</a></li>
          </ul>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mt-7 mb-3">Sundays</h4>
          <p className="text-sm text-white/75">11:00 AM</p>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">Stay Connected</h4>
          <p className="text-sm text-white/70 mb-4">Get sermon updates, events, and stories straight to your inbox.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("You're on the list! Welcome.");
              (e.currentTarget as HTMLFormElement).reset();
            }}
            className="flex gap-2"
          >
            <Input
              type="email"
              required
              placeholder="you@email.com"
              className="bg-white/10 border-white/15 text-white placeholder:text-white/50 focus-visible:ring-[color:var(--brand-accent)]"
            />
            <Button type="submit" className="bg-[color:var(--brand-accent)] text-[color:var(--brand-dark)] hover:bg-[color:var(--brand-accent)]/90 font-bold">
              Join
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Forward Church Ministries. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

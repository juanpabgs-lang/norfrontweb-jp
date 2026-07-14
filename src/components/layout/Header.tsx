import { useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import StaggeredMenu from "@/components/StaggeredMenu";
import { NorfrontMark } from "@/components/NorfrontMark";
import { Home, Briefcase, FolderKanban, Award, Users, Handshake } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Our Model", href: "/model", icon: Briefcase },
  { name: "Case Studies", href: "/case-studies", icon: FolderKanban },
  { name: "How We Work", href: "/services", icon: Award },
  { name: "Portfolio", href: "/partners", icon: Handshake },
  { name: "Careers", href: "/jobs", icon: Users },
];

const mobileMenuItems = navigation.map((item) => ({
  label: item.name,
  ariaLabel: `Go to ${item.name}`,
  link: item.href,
}));

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMobileItemClick = useCallback((item: { link: string }) => {
    navigate(item.link);
  }, [navigate]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <nav className="pointer-events-auto hidden md:block border-b border-white/[0.06] bg-black/65 backdrop-blur-xl">
          <div className="container mx-auto flex h-14 items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-80">
              <NorfrontMark className="h-5 w-auto" />
              <span className="text-sm font-semibold tracking-tight text-white leading-none">Norfront Group</span>
              <span className="hidden lg:inline font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.2em] text-white/30 leading-none">
                AI Venture Holdings
              </span>
            </Link>

            <div className="flex items-center gap-7">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative py-1 text-[13px] font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/45 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-[13px] left-0 right-0 h-px bg-[#7ec8e3]" />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 border border-white/15 px-4 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:border-[#7ec8e3]/50 hover:bg-white/[0.04] hover:shadow-[0_0_20px_-6px_rgba(126,200,227,0.4)]"
            >
              Book a Call
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile StaggeredMenu — only visible on small screens */}
      <div className="md:hidden fixed inset-0 z-[60] pointer-events-none" style={{ height: '100vh' }}>
        <StaggeredMenu
          position="right"
          items={mobileMenuItems}
          socialItems={[]}
          displaySocials={false}
          displayItemNumbering={false}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#1a2332', '#243447']}
          accentColor="#7ec8e3"
          isFixed={true}
          logoText="Norfront Group"
          onItemClick={handleMobileItemClick}
        />
      </div>

      {/* Mobile top fade so content scrolls under the menu button cleanly */}
      <div
        className="fixed top-0 left-0 right-0 z-40 h-20 pointer-events-none md:hidden"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 45%, transparent 100%)',
        }}
      />
    </>
  );
}

import { Link, useLocation, useParams } from "react-router-dom";
import { getCaseStudy } from "@/content/case-studies";
import { getWritingPost } from "@/content/writing";

type NavItem = { label: string; href: string };

const thisSiteLinks: NavItem[] = [
  { label: "Intro", href: "/#hero" },
  { label: "Overview", href: "/#overview" },
  { label: "Selected work", href: "/#work" },
  { label: "Ideas", href: "/#writing" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const browseLinks: NavItem[] = [
  { label: "Design systems", href: "/design-systems" },
  { label: "Artifacts gallery", href: "/artifacts" },
  { label: "All ideas", href: "/writing" },
  { label: "Resume", href: "/resume" },
];

function NavGroup({
  title,
  items,
  onItemClick,
}: {
  title: string;
  items: NavItem[];
  onItemClick?: () => void;
}) {
  const { pathname } = useLocation();

  return (
    <div className="mt-6 first:mt-0">
      <p className="px-2.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
        {title}
      </p>
      <ul className="mt-1.5 space-y-px">
        {items.map((item) => {
          const active =
            item.href === pathname ||
            (item.href.startsWith("/work/") && pathname === item.href);
          return (
            <li key={item.label + item.href}>
              <Link
                to={item.href}
                onClick={onItemClick}
                className={`block rounded-xl px-2.5 py-1.5 text-sm transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  active
                    ? "bg-accent/15 font-medium text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CaseStudyToc({ onItemClick }: { onItemClick?: () => void }) {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;
  if (!study) return null;

  return (
    <div>
      <p className="px-2.5 pt-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
        On this page
      </p>
      <ul className="mt-1.5 max-h-[min(60vh,28rem)] space-y-px overflow-y-auto text-sm">
        {study.sections.map((s, i) => (
          <li key={s.heading}>
            <a
              href={`#section-${i}`}
              onClick={onItemClick}
              className="block rounded-md px-2.5 py-1.5 text-muted-foreground transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent/10 hover:text-accent-foreground line-clamp-2"
            >
              {s.heading}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WritingToc({ onItemClick }: { onItemClick?: () => void }) {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getWritingPost(slug) : undefined;
  if (!post) return null;

  return (
    <div>
      <p className="px-2.5 pt-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
        On this page
      </p>
      <ul className="mt-1.5 space-y-px text-sm">
        {post.sections.map((s, i) => (
          <li key={s.heading}>
            <a
              href={`#w-section-${i}`}
              onClick={onItemClick}
              className="block rounded-md px-2.5 py-1.5 text-muted-foreground transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent/10 hover:text-accent-foreground line-clamp-2"
            >
              {s.heading}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Mobile drawer — home sections + browse links. */
export function PortfolioBrowseNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="text-sm" aria-label="Site navigation">
      <NavGroup title="This site" items={thisSiteLinks} onItemClick={onNavigate} />
      <NavGroup title="Browse" items={browseLinks} onItemClick={onNavigate} />
    </nav>
  );
}

/** Desktop right rail — table of contents only on detail pages. */
export function PortfolioTocRail() {
  const { pathname } = useLocation();
  const isWork = pathname.startsWith("/work/");
  const isWritingPost =
    pathname.startsWith("/writing/") && pathname !== "/writing";

  if (!isWork && !isWritingPost) return null;

  return (
    <aside
      className="hidden w-[220px] shrink-0 lg:block"
      aria-label="On this page"
    >
      {/* Concentric radii: outer = radius token + 0.5rem, inner = token */}
      <div className="glass sticky top-24 rounded-xl p-1.5 py-2.5">
        {isWork ? <CaseStudyToc /> : <WritingToc />}
      </div>
    </aside>
  );
}

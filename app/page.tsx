import Reveal from "./_components/Reveal";
import SaguaroRidge from "./_components/SaguaroRidge";
import {
  IconArrow,
  IconBox,
  IconClock,
  IconDoor,
  IconFold,
  IconFrame,
  IconLAngle,
  IconMail,
  IconPhone,
  IconPin,
  IconPunch,
  IconRadius,
  IconShear,
  IconSillPan,
  IconUChannel,
  IconWallCap,
} from "./_components/Icons";

const PHONE = "623-872-2777";
const FAX = "623-872-9370";
const ADDRESS = "7313 N. 109th Avenue, Glendale, AZ 85307";
const MAP_SRC =
  "https://www.google.com/maps?q=7313+N+109th+Ave+Glendale+AZ+85307&output=embed";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Story />
        <Capabilities />
        <Products />
        <Partners />
        <WhoWeServe />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* --------------------------------- NAV --------------------------------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-bone/80 backdrop-blur supports-[backdrop-filter]:bg-bone/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <Wordmark />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          <a href="#story" className="hover:text-saguaro transition">
            Our Story
          </a>
          <a href="#capabilities" className="hover:text-saguaro transition">
            Capabilities
          </a>
          <a href="#products" className="hover:text-saguaro transition">
            Products
          </a>
          <a href="#partners" className="hover:text-saguaro transition">
            Partners
          </a>
          <a href="#contact" className="hover:text-saguaro transition">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-copper px-5 py-2.5 text-sm font-medium text-bone shadow-sm shadow-copper-deep/30 transition hover:bg-copper-deep"
        >
          Request a Quote
          <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 36 36"
        className="h-8 w-8 text-saguaro"
        aria-hidden
      >
        <circle cx="18" cy="18" r="17" fill="#f4ebdd" />
        <g fill="currentColor">
          <rect x="16" y="9" width="4" height="20" rx="1.5" />
          <rect x="9" y="16" width="3" height="10" rx="1.2" />
          <rect x="9" y="14" width="2" height="4" rx="1" />
          <rect x="24" y="14" width="3" height="12" rx="1.2" />
          <rect x="25" y="12" width="2" height="4" rx="1" />
        </g>
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
          Saguaro Glass
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-copper">
          Est. 1981 · Glendale, AZ
        </span>
      </span>
    </span>
  );
}

/* --------------------------------- HERO -------------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative grain isolate overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 20% 0%, #f7e6c9 0%, #f4ebdd 45%, #eaddc3 100%)",
      }}
    >
      {/* Sun */}
      <div
        aria-hidden
        className="absolute right-[-120px] top-[-120px] h-[460px] w-[460px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #f3b775 0%, #e89457 40%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-[22rem] lg:px-10 lg:pt-32 lg:pb-[26rem]">
        <Reveal as="div" className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-copper/40 bg-bone/60 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-copper-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-copper" />
            Custom Brake Metal Fabrication
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-agave sm:text-6xl lg:text-[5.25rem]">
            Shaped in the
            <br />
            <span className="italic text-copper-deep">Valley of the Sun</span>
            <br />
            since 1981.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Saguaro Glass is a family-owned metal fabricator supplying glass,
            glazing, drywall and general contractors across Arizona — from
            simple L-angles to four-sided boxes, sill pans, and step-bent
            radius shapes.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-agave px-6 py-3.5 text-sm font-medium text-bone shadow-lg shadow-agave/20 transition hover:bg-ink"
            >
              Request a Quote
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-bone/60 px-6 py-3.5 text-sm font-medium text-ink transition hover:border-ink/40 hover:bg-bone"
            >
              Explore Capabilities
            </a>
          </div>
          <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-ink-soft">
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-copper" />
              Family-owned & operated
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-copper" />
              Glendale, Arizona
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-copper" />
              Short lead times
            </div>
          </dl>
        </Reveal>
      </div>

      {/* Ridge at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[22rem] lg:h-[26rem]">
        <SaguaroRidge className="h-full w-full" />
      </div>
    </section>
  );
}

/* -------------------------------- STORY -------------------------------- */

function Story() {
  const stats = [
    { k: "40+", v: "Years in business" },
    { k: "2", v: "CnC folding machines" },
    { k: "2", v: "CnC air shears" },
    { k: "1981", v: "Founded in Phoenix" },
  ];
  return (
    <section id="story" className="relative bg-bone py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <Reveal className="lg:col-span-5">
          <SectionEyebrow>Our Story</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-agave sm:text-5xl">
            From a hand brake in Phoenix to a state-of-the-art fab shop in
            Glendale.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-7" delayMs={120}>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              We started in 1981 as a glass and glazing subcontractor. Unable
              to find a reliable local supplier of brake metal in the Valley,
              we bought our first hand brake and slitter and began fabricating
              our own sill flashings, wall caps and trims.
            </p>
            <p>
              Before long, another subcontractor asked to buy some metal —
              then a glass company, then a drywall contractor. Our focus
              gradually shifted from glazing to custom metal supply for the
              trades that build Arizona.
            </p>
            <p>
              Today we operate a brand-new facility in Glendale with two
              CnC-controlled folding machines, two CnC-controlled air shears,
              a notcher, and a heavy-duty punch — with expert operators who
              can fabricate metals to fit almost any design.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.v}
                className="border-l border-copper/40 pl-4"
              >
                <dt className="font-display text-3xl font-semibold text-agave sm:text-4xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- CAPABILITIES ---------------------------- */

function Capabilities() {
  const items = [
    {
      icon: IconFold,
      title: "CnC Folding",
      body: "Two computer-controlled folding machines produce crisp, repeatable bends across a wide range of gauges and sheet sizes.",
    },
    {
      icon: IconShear,
      title: "CnC Shearing",
      body: "Two CnC air shears deliver precise, high-volume cuts — replacing the slitters we started with four decades ago.",
    },
    {
      icon: IconPunch,
      title: "Notching & Punching",
      body: "A dedicated notcher and heavy-duty punch open up complex layouts, corner returns and fastener prep.",
    },
    {
      icon: IconDoor,
      title: "Storefront Door Cladding",
      body: "Clad customer-provided or furnished doors in brushed or mirror-polish stainless, polished brass, copper, and more.",
    },
    {
      icon: IconFrame,
      title: "Storefront & Curtainwall",
      body: "Knowledgeable, experienced fabricators build storefront and curtainwall framing to your project requirements.",
    },
    {
      icon: IconRadius,
      title: "Custom & Radius Shapes",
      body: "From simple L-angles all the way to four-sided boxes, sill pans, and step-bent radius shapes to fit almost any design.",
    },
  ];
  return (
    <section
      id="capabilities"
      className="relative bg-agave py-24 text-bone lg:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fffbf3 1px, transparent 1px), linear-gradient(to bottom, #fffbf3 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="copper">Capabilities</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Precision fabrication, built around your drawings.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bone/75">
            State-of-the-art machines and expert operators — the same shop
            that supplies glass, glazing, drywall and general contractors
            across the Valley.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delayMs={i * 70}>
              <article className="group h-full rounded-2xl border border-bone/10 bg-bone/[0.03] p-7 transition hover:border-copper/50 hover:bg-bone/[0.06]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-copper/15 text-copper ring-1 ring-copper/30">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {it.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-bone/70">
                  {it.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PRODUCTS ------------------------------ */

function Products() {
  const items = [
    { icon: IconWallCap, name: "Wall Caps" },
    { icon: IconSillPan, name: "Sill Flashings" },
    { icon: IconSillPan, name: "Sill Pans" },
    { icon: IconLAngle, name: "L-Angles" },
    { icon: IconUChannel, name: "U-Channels" },
    { icon: IconBox, name: "Four-Sided Boxes" },
    { icon: IconRadius, name: "Step-Bent Radius Shapes" },
    { icon: IconFrame, name: "Trims & Custom Profiles" },
  ];
  return (
    <section id="products" className="relative bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-2xl">
            <SectionEyebrow>Products</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-agave sm:text-5xl">
              A catalog as broad as the Valley itself.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Everything from simple L-angles to four-sided boxes, sill pans
              and step-bent radius shapes — fabricated to fit almost any
              design.
            </p>
          </Reveal>
          <Reveal>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-copper-deep"
            >
              Request a full product list
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.name} delayMs={i * 50}>
              <div className="group flex h-full flex-col items-start justify-between gap-6 rounded-2xl border border-ink/10 bg-bone p-6 transition hover:-translate-y-0.5 hover:border-copper/40 hover:shadow-lg hover:shadow-copper/10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-agave text-bone">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-agave">
                  {it.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 rounded-2xl border border-ink/10 bg-bone p-8 sm:p-10">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold text-agave">
                Storefront door cladding
              </h3>
              <p className="mt-3 max-w-2xl text-ink-soft">
                Clad customer-provided or furnished-and-clad storefront doors
                in brushed stainless, mirror-polish stainless, polished bright
                brass, copper, and virtually any sheet-form metal.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-ink-soft">
                {[
                  "Brushed Stainless",
                  "Mirror Stainless",
                  "Polished Brass",
                  "Copper",
                  "Custom",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-ink/15 bg-sand px-3 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <IconDoor className="h-24 w-24 text-copper" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- PARTNERS ------------------------------ */

function Partners() {
  return (
    <section id="partners" className="relative bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>Authorized Partners</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-agave sm:text-5xl">
            Distributor & dealer relationships you can build on.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-ink/10 bg-sand p-8 lg:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-copper-deep">
                  Distributor
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-agave">
                  Mapes Industries
                </h3>
                <p className="mt-4 text-ink-soft">
                  We&apos;re the Valley distributor for Mapes Industries and
                  their wide range of architectural panel products.
                </p>
              </div>
              <span className="text-sm font-medium text-copper-deep">
                Panel products
              </span>
            </article>
          </Reveal>
          <Reveal delayMs={120}>
            <article className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-ink/10 bg-agave p-8 text-bone lg:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-copper">
                  Dealer & Distributor
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold">
                  Kawneer Company
                </h3>
                <p className="mt-4 text-bone/75">
                  Recognized dealer and distributor for Kawneer&apos;s large
                  range of storefront, curtainwall, and window products — with
                  in-house fabricators to build framing to your needs.
                </p>
              </div>
              <span className="text-sm font-medium text-copper">
                Storefront · Curtainwall · Windows
              </span>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- WHO WE SERVE ---------------------------- */

function WhoWeServe() {
  const groups = [
    "Glass & Glazing Contractors",
    "Drywall Contractors",
    "General Contractors",
    "Architects & Designers",
  ];
  return (
    <section className="relative bg-sand py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-copper-deep">
            Who we serve
          </p>
          <div className="mt-4 flex flex-wrap items-baseline gap-x-10 gap-y-4">
            <h2 className="font-display text-3xl text-agave sm:text-4xl">
              Supplying the trades that build Arizona.
            </h2>
          </div>
        </Reveal>
        <Reveal delayMs={120}>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((g) => (
              <li
                key={g}
                className="flex items-center gap-3 rounded-xl border border-ink/10 bg-bone px-5 py-4 text-ink"
              >
                <span className="h-2 w-2 rounded-full bg-copper" />
                <span className="text-sm font-medium">{g}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- PROCESS ------------------------------ */

function Process() {
  const steps = [
    {
      n: "01",
      t: "Inquiry",
      b: "Send drawings, a sketch, or a phone call. We'll scope the job fast.",
    },
    {
      n: "02",
      t: "Shop Drawings",
      b: "We confirm materials, gauges, bends, and finish before anything hits the shop floor.",
    },
    {
      n: "03",
      t: "CnC Fabrication",
      b: "Two CnC folders, two CnC shears, notcher and punch — run by expert operators.",
    },
    {
      n: "04",
      t: "Delivery",
      b: "Great customer service and the shortest lead times possible to your Valley jobsite.",
    },
  ];
  return (
    <section className="relative bg-agave py-24 text-bone lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <SectionEyebrow tone="copper">Process</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Simple, fast, and honest — the way it&apos;s been since 1981.
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delayMs={i * 80}>
              <li className="relative h-full rounded-2xl border border-bone/10 bg-bone/[0.03] p-7">
                <span className="font-display text-sm text-copper">
                  {s.n}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/70">
                  {s.b}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------- CONTACT ------------------------------ */

function Contact() {
  const emails = [
    { label: "Quote Requests / Purchase Orders", addr: "orders@saguaroglass.com" },
    { label: "Estimating", addr: "estimating@saguaroglass.com" },
    { label: "Accounting — Jennifer Webb", addr: "jen@saguaroglass.com" },
    { label: "Chad Webb", addr: "chadw@saguaroglass.com" },
    { label: "Adam Webb", addr: "adamw@saguaroglass.com" },
  ];
  return (
    <section id="contact" className="relative bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionEyebrow>Contact</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-agave sm:text-5xl">
              Let&apos;s talk about your next project.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
              Call the shop, email the right person directly, or drop in — our
              doors are open early.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow
                icon={<IconPhone className="h-5 w-5" />}
                label="Telephone"
                primary={
                  <a
                    href={`tel:${PHONE.replace(/-/g, "")}`}
                    className="hover:text-copper-deep"
                  >
                    {PHONE}
                  </a>
                }
                secondary={`Fax ${FAX}`}
              />
              <ContactRow
                icon={<IconPin className="h-5 w-5" />}
                label="Shop & Office"
                primary={ADDRESS}
                secondary="Glendale, Arizona"
              />
              <ContactRow
                icon={<IconClock className="h-5 w-5" />}
                label="Office Hours"
                primary="Mon – Thu · 6:00 AM – 4:00 PM"
                secondary="Fridays · 6:00 AM – 12:00 NOON"
              />
            </div>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.18em] text-copper-deep">
                Direct emails
              </p>
              <ul className="mt-4 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-sand">
                {emails.map((e) => (
                  <li
                    key={e.addr}
                    className="flex items-center justify-between gap-4 px-5 py-4"
                  >
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.12em] text-ink-soft">
                        {e.label}
                      </p>
                      <a
                        href={`mailto:${e.addr}`}
                        className="mt-0.5 block truncate font-medium text-agave hover:text-copper-deep"
                      >
                        {e.addr}
                      </a>
                    </div>
                    <a
                      href={`mailto:${e.addr}`}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bone text-copper ring-1 ring-ink/10 transition hover:bg-copper hover:text-bone"
                      aria-label={`Email ${e.addr}`}
                    >
                      <IconMail className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delayMs={120}>
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-2xl border border-ink/10 bg-sand">
                <iframe
                  title="Saguaro Glass — Glendale, AZ location"
                  src={MAP_SRC}
                  className="h-[380px] w-full lg:h-[460px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-2xl border border-ink/10 bg-agave p-8 text-bone">
                <h3 className="font-display text-2xl font-semibold">
                  Ready for a quote?
                </h3>
                <p className="mt-2 max-w-md text-bone/75">
                  Send drawings or a description to our orders team — we
                  aim for the shortest lead times in the Valley.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:orders@saguaroglass.com?subject=Quote%20Request"
                    className="inline-flex items-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-medium text-bone transition hover:bg-copper-deep"
                  >
                    <IconMail className="h-4 w-4" />
                    Email orders@
                  </a>
                  <a
                    href={`tel:${PHONE.replace(/-/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-5 py-3 text-sm font-medium text-bone transition hover:bg-bone/10"
                  >
                    <IconPhone className="h-4 w-4" />
                    Call {PHONE}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  primary,
  secondary,
}: {
  icon: React.ReactNode;
  label: string;
  primary: React.ReactNode;
  secondary?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sand text-copper-deep ring-1 ring-ink/10">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">
          {label}
        </p>
        <p className="mt-0.5 font-display text-lg text-agave">{primary}</p>
        {secondary ? (
          <p className="text-sm text-ink-soft">{secondary}</p>
        ) : null}
      </div>
    </div>
  );
}

/* -------------------------------- FOOTER ------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-bone/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-10">
        <div>
          <Wordmark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone/60">
            Family-owned custom metal fabrication and glazing supply —
            serving the Valley of the Sun since 1981.
          </p>
        </div>
        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-copper">
            Visit
          </p>
          <p className="mt-3 text-bone/80">{ADDRESS}</p>
          <p className="mt-1 text-bone/60">
            Mon–Thu 6a–4p · Fri 6a–12p
          </p>
        </div>
        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-copper">
            Contact
          </p>
          <p className="mt-3">
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="hover:text-copper"
            >
              {PHONE}
            </a>
          </p>
          <p className="mt-1">
            <a
              href="mailto:orders@saguaroglass.com"
              className="hover:text-copper"
            >
              orders@saguaroglass.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-bone/50 sm:flex-row sm:items-center lg:px-10">
          <p>© {new Date().getFullYear()} Saguaro Glass Inc. All rights reserved.</p>
          <p className="italic">
            Pitch concept — independently designed, not affiliated with the company.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------- HELPERS ------------------------------- */

function SectionEyebrow({
  children,
  tone = "copper-deep",
}: {
  children: React.ReactNode;
  tone?: "copper" | "copper-deep";
}) {
  const color = tone === "copper" ? "text-copper" : "text-copper-deep";
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] ${color}`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

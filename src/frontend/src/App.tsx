import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

const DISCORD_INVITE = "https://discord.gg/eM6YjnDxsJ";

// ─── Particles / ember effect ─────────────────────────────────────────────
function EmberParticles() {
  const particles = Array.from({ length: 14 }, (_, i) => i);
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 30}%`,
            background:
              i % 3 === 0
                ? "oklch(0.78 0.16 70)"
                : i % 3 === 1
                  ? "oklch(0.55 0.23 26)"
                  : "oklch(0.70 0.20 45)",
          }}
          animate={{
            y: [0, -(80 + Math.random() * 120)],
            x: [0, (Math.random() - 0.5) * 40],
            opacity: [0.8, 0],
            scale: [1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.07 0.01 280 / 0.95) 0%, oklch(0.07 0.01 280 / 0) 100%)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="text-xl md:text-2xl font-display font-black tracking-widest"
          style={{ color: "oklch(0.84 0.19 72)" }}
        >
          WDR
        </span>
        <div
          className="hidden sm:block h-6 w-px"
          style={{ background: "oklch(0.55 0.23 26 / 0.6)" }}
        />
        <span className="hidden sm:block text-xs font-mono font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Revival S7
        </span>
      </div>

      <a
        href={DISCORD_INVITE}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="nav.primary_button"
        className="btn-rebel relative z-10 px-5 py-2 text-sm rounded-sm cursor-pointer select-none"
      >
        Join Discord
      </a>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Banner bg */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1200x400.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />
      {/* Dark overlay layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.07 0.01 280 / 0.55) 0%, oklch(0.07 0.01 280 / 0.72) 40%, oklch(0.07 0.01 280 / 0.92) 80%, oklch(0.07 0.01 280) 100%)",
        }}
      />
      {/* Red vignette from bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 110%, oklch(0.45 0.20 22 / 0.35) 0%, transparent 70%)",
        }}
      />
      {/* Gold vignette from top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 30% at 50% -10%, oklch(0.78 0.16 70 / 0.12) 0%, transparent 70%)",
        }}
      />

      <EmberParticles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4"
        >
          <span
            className="inline-block text-xs md:text-sm font-mono font-bold tracking-[0.35em] uppercase px-4 py-1.5 rounded-sm mb-6"
            style={{
              background: "oklch(0.55 0.23 26 / 0.2)",
              border: "1px solid oklch(0.55 0.23 26 / 0.5)",
              color: "oklch(0.78 0.16 70)",
            }}
          >
            ⚔️ Revival S7 🔥
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-shimmer leading-none mb-2"
          style={{
            fontSize: "clamp(2.8rem, 9vw, 7.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          WHITE DAGG
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black leading-none mb-8"
          style={{
            fontSize: "clamp(2.8rem, 9vw, 7.5rem)",
            letterSpacing: "-0.02em",
            color: "oklch(0.62 0.25 22)",
            textShadow: "0 0 60px oklch(0.55 0.23 26 / 0.8)",
          }}
        >
          REBELS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-base md:text-lg text-muted-foreground font-body mb-10 max-w-xl"
          style={{ letterSpacing: "0.05em" }}
        >
          The most competitive, hype, and action-packed Discord community.
          <br />
          Step in. Compete. Win. Dominate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.primary_button"
            className="btn-rebel relative z-10 glow-crimson px-10 py-4 text-base rounded-sm cursor-pointer select-none"
          >
            🚀 Join the Rebels
          </a>
          <a
            href="#activities"
            data-ocid="hero.secondary_button"
            className="px-8 py-4 text-sm font-display font-bold tracking-widest uppercase rounded-sm border cursor-pointer"
            style={{
              borderColor: "oklch(0.78 0.16 70 / 0.4)",
              color: "oklch(0.78 0.16 70)",
              background: "oklch(0.78 0.16 70 / 0.05)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "oklch(0.78 0.16 70 / 0.12)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "oklch(0.78 0.16 70 / 0.8)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "oklch(0.78 0.16 70 / 0.05)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "oklch(0.78 0.16 70 / 0.4)";
            }}
          >
            See What We Do ↓
          </a>
        </motion.div>

        {/* Member count badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-14 flex items-center gap-2"
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{
              background: "oklch(0.65 0.20 145)",
              boxShadow: "0 0 8px oklch(0.65 0.20 145)",
            }}
          />
          <span className="text-xs font-mono font-semibold tracking-widest text-muted-foreground uppercase">
            Active Community • Daily Events
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: "oklch(0.55 0.23 26 / 0.5)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: "oklch(0.55 0.23 26)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// ─── Activities ───────────────────────────────────────────────────────────
const activities = [
  {
    icon: "🎮",
    title: "ROBLOX Gamenights",
    description:
      "Jump into scheduled Roblox game nights with the community. From chaos to glory — every session is an event.",
    accent: "crimson",
  },
  {
    icon: "⛏️",
    title: "Minecraft Events",
    description:
      "Build, survive, and compete in Minecraft server events. Team up or go solo — the blocks decide your fate.",
    accent: "gold",
  },
  {
    icon: "🏆",
    title: "Competitive Tournaments",
    description:
      "Face off in skill-based tournaments across multiple games. Only the sharpest rebels rise to the top.",
    accent: "crimson",
  },
  {
    icon: "🎁",
    title: "Giveaways & Rewards",
    description:
      "Win prizes in regular giveaways and exclusive events. The more you show up, the more you take home.",
    accent: "gold",
  },
];

function ActivitiesSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="activities"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle bg pattern */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 50%, oklch(0.55 0.23 26 / 0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 50%, oklch(0.78 0.16 70 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-overline section-overline-crimson mb-5 inline-flex">
            What We Do
          </span>
          <h2
            className="font-display font-black leading-tight mt-3"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              color: "oklch(0.96 0.01 80)",
              letterSpacing: "-0.02em",
            }}
          >
            Where the{" "}
            <span style={{ color: "oklch(0.62 0.25 22)" }}>Action</span> Lives
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {activities.map((item, i) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              data-ocid={`activities.item.${i + 1}`}
              className="card-rebel rounded-md p-6 flex flex-col gap-4 group"
            >
              {/* Ghost index */}
              <span className="card-rebel-index">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className="text-3xl w-16 h-16 flex items-center justify-center rounded-sm relative z-10"
                style={{
                  background:
                    item.accent === "crimson"
                      ? "linear-gradient(135deg, oklch(0.55 0.23 26 / 0.25) 0%, oklch(0.45 0.20 22 / 0.1) 100%)"
                      : "linear-gradient(135deg, oklch(0.78 0.16 70 / 0.20) 0%, oklch(0.68 0.15 65 / 0.08) 100%)",
                  border: `1px solid ${item.accent === "crimson" ? "oklch(0.58 0.22 26 / 0.45)" : "oklch(0.80 0.16 70 / 0.40)"}`,
                  boxShadow:
                    item.accent === "crimson"
                      ? "0 4px 16px oklch(0.55 0.23 26 / 0.2)"
                      : "0 4px 16px oklch(0.78 0.16 70 / 0.15)",
                }}
              >
                {item.icon}
              </div>
              <div className="relative z-10">
                <h3
                  className="font-display font-black text-sm mb-2 tracking-[0.08em] uppercase"
                  style={{
                    color:
                      item.accent === "crimson"
                        ? "oklch(0.76 0.22 26)"
                        : "oklch(0.86 0.18 72)",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Prizes ───────────────────────────────────────────────────────────────
const prizes = [
  {
    icon: "💰",
    name: "Robux",
    headline: "Real Robux prizes up for grabs.",
    detail: "Compete and claim actual Robux every event season.",
  },
  {
    icon: "👑",
    name: "Exclusive Roles",
    headline: "Earn unique roles that show your status.",
    detail: "Stand out with rare Discord roles only true rebels can unlock.",
  },
  {
    icon: "⭐",
    name: "Special Perks",
    headline: "Unlock perks only rebels can access.",
    detail: "Early access, private channels, and prestige no one else gets.",
  },
];

function PrizesSection() {
  return (
    <section
      id="prizes"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.09 0.01 280) 0%, oklch(0.11 0.018 280) 50%, oklch(0.09 0.01 280) 100%)",
      }}
    >
      {/* Dramatic radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.78 0.16 70 / 0.07) 0%, oklch(0.55 0.23 26 / 0.04) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="section-overline section-overline-gold mb-5 inline-flex">
            Win Real Prizes
          </span>
          <h2
            className="font-display font-black leading-tight mb-4 mt-3"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              color: "oklch(0.96 0.01 80)",
              letterSpacing: "-0.02em",
            }}
          >
            The <span style={{ color: "oklch(0.84 0.19 72)" }}>Reward</span> Is
            Real
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-md mx-auto">
            We don't play around. Real prizes, real prestige — earned by rebels
            who show up.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="divider-ember my-12 mx-auto max-w-sm" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-gold rounded-md p-7 flex flex-col items-center text-center gap-4"
            >
              {/* Ghost index */}
              <span className="card-gold-index">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className="w-20 h-20 flex items-center justify-center rounded-full relative z-10"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.16 70 / 0.20) 0%, oklch(0.68 0.15 65 / 0.08) 100%)",
                  border: "1px solid oklch(0.80 0.17 70 / 0.45)",
                  boxShadow:
                    "0 4px 20px oklch(0.78 0.16 70 / 0.20), inset 0 1px 0 oklch(0.95 0.10 80 / 0.25)",
                  fontSize: "2.4rem",
                }}
              >
                {prize.icon}
              </div>
              <div className="relative z-10">
                <h3
                  className="font-display font-black text-xl uppercase tracking-[0.06em] mb-1"
                  style={{ color: "oklch(0.86 0.18 72)" }}
                >
                  {prize.name}
                </h3>
                <p
                  className="text-sm font-body font-semibold mb-2"
                  style={{ color: "oklch(0.88 0.02 80)" }}
                >
                  {prize.headline}
                </p>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {prize.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Community ────────────────────────────────────────────────────────────
const reasons = [
  {
    icon: "🤝",
    label: "Friendly & Active Community",
    body: "No toxicity. All skill levels welcome. Just rebels who vibe together and level up as one.",
  },
  {
    icon: "🔥",
    label: "Daily Events & Challenges",
    body: "Something's always happening. Log on any day and you'll find a challenge, a match, or a party.",
  },
  {
    icon: "💥",
    label: "Skill • Fun • Good Vibes Only",
    body: "The perfect blend of competitive spirit and chill energy. We take the W seriously, but we always have fun.",
  },
];

function CommunitySection() {
  return (
    <section id="community" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 50%, oklch(0.55 0.23 26 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-overline section-overline-crimson mb-5 inline-flex">
            Why Join?
          </span>
          <h2
            className="font-display font-black leading-tight mt-3"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              color: "oklch(0.96 0.01 80)",
              letterSpacing: "-0.02em",
            }}
          >
            Built Different.
            <br />
            <span style={{ color: "oklch(0.62 0.25 22)" }}>
              For Rebels Only.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{
                opacity: 0,
                x: i === 0 ? -30 : i === 2 ? 30 : 0,
                y: i === 1 ? 30 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col gap-4 pl-6"
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(180deg, oklch(0.55 0.23 26), transparent)"
                      : "linear-gradient(180deg, oklch(0.78 0.16 70), transparent)",
                }}
              />
              <div className="text-4xl">{r.icon}</div>
              <h3
                className="font-display font-black text-base md:text-lg uppercase tracking-wide"
                style={{
                  color:
                    i % 2 === 0 ? "oklch(0.72 0.22 26)" : "oklch(0.84 0.19 72)",
                }}
              >
                {r.label}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-6 text-center"
        >
          {[
            { value: "S7", label: "Current Season" },
            { value: "DAILY", label: "Events Running" },
            { value: "∞", label: "Good Vibes" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className="font-display font-black"
                style={{
                  fontSize: "clamp(2rem, 6vw, 3.5rem)",
                  color: "oklch(0.62 0.25 22)",
                  textShadow: "0 0 30px oklch(0.55 0.23 26 / 0.5)",
                }}
              >
                {stat.value}
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section
      id="join"
      className="relative py-32 md:py-40 overflow-hidden"
      style={{
        background: "oklch(0.07 0.01 280)",
      }}
    >
      {/* Dramatic bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 60%, oklch(0.45 0.20 22 / 0.18) 0%, oklch(0.55 0.23 26 / 0.08) 40%, transparent 70%)",
        }}
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.55 0.23 26 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.23 26 / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-overline section-overline-crimson mb-6 inline-flex">
            The Call
          </span>

          <h2
            className="font-display font-black leading-none mb-4"
            style={{
              fontSize: "clamp(2.4rem, 7vw, 6rem)",
              color: "oklch(0.96 0.01 80)",
              letterSpacing: "-0.02em",
            }}
          >
            Step In.
          </h2>
          <h2
            className="font-display font-black leading-none mb-4"
            style={{
              fontSize: "clamp(2.4rem, 7vw, 6rem)",
              letterSpacing: "-0.02em",
              color: "oklch(0.78 0.16 70)",
            }}
          >
            Compete. Win.
          </h2>
          <h2
            className="font-display font-black leading-none mb-10"
            style={{
              fontSize: "clamp(2.4rem, 7vw, 6rem)",
              letterSpacing: "-0.02em",
              color: "oklch(0.62 0.25 22)",
              textShadow: "0 0 60px oklch(0.55 0.23 26 / 0.8)",
            }}
          >
            Dominate.
          </h2>

          <p className="text-base md:text-lg text-muted-foreground font-body mb-12 max-w-lg mx-auto">
            Join Now & Be Part of the Rebels! The community is alive, the
            tournaments are real, and the prizes are waiting.
          </p>

          <motion.a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="cta.primary_button"
            className="btn-gold btn-cta-float glow-gold inline-block px-14 py-6 text-xl rounded-sm cursor-pointer"
            whileHover={{ scale: 1.05, animationPlayState: "paused" }}
            whileTap={{ scale: 0.97 }}
          >
            🚀 Join Now — It's Free
          </motion.a>

          <p className="mt-8 text-xs text-muted-foreground font-mono tracking-[0.25em]">
            DISCORD.GG/EM6YJNDXSJ
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative py-10 px-6 overflow-hidden"
      style={{
        background: "oklch(0.07 0.01 280)",
        borderTop: "1px solid oklch(0.55 0.23 26 / 0.2)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex flex-col gap-1">
          <span
            className="font-display font-black text-sm tracking-widest uppercase"
            style={{ color: "oklch(0.84 0.19 72)" }}
          >
            WHITE DAGG REBELS
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            © {year} — REVIVAL S7
          </span>
        </div>

        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="footer.link"
          className="text-xs font-mono font-bold tracking-widest uppercase transition-colors"
          style={{ color: "oklch(0.55 0.23 26)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              "oklch(0.72 0.22 26)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              "oklch(0.55 0.23 26)";
          }}
        >
          Join on Discord →
        </a>

        <div className="text-xs text-muted-foreground font-body">
          Built with <span style={{ color: "oklch(0.62 0.25 22)" }}>♥</span>{" "}
          using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "oklch(0.65 0.02 80)" }}
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────
export default function App() {
  // Apply dark class to root
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-background text-foreground font-body">
        <Navbar />
        <main>
          <HeroSection />
          <ActivitiesSection />
          <PrizesSection />
          <CommunitySection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

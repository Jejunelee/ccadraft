import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/landing/Footer";
import PageIntro from "@/app/components/PageIntro";
import { Fact, ProgramButton, Section } from "../components";

export const metadata: Metadata = {
  title: "Food Venture Accelerator Program | CCA Connect Philippines",
  description:
    "Six-month food venture accelerator with Entrepreneur in Residence Jose Magsaysay Jr. Cohort 1: January to June 2027. Six bootcamps, founder clinics, and Pitch Kitchen Demo Day.",
};

const months = [
  {
    month: "January – Cook Up Your Venture",
    sessions: [
      {
        session: "Kickoff: The Mind of the Food Founder",
        lead: "Jose Magsaysay Jr.",
        leave: "One page brief and pitch deck outline",
      },
      {
        session: "Bootcamp 1: From Idea to Business",
        lead: "Prof. Xavier Alpasa",
        leave: "Business Model Canvas and a Validated Problem and Customer",
      },
    ],
  },
  {
    month: "February – Pick Your Format and Test It",
    sessions: [
      {
        session: "Bootcamp 2: Distribution Channels and Competitor Landscape",
        lead: "Jose Magsaysay Jr. + Guest Entrepreneurs",
        leave: "Format and channel decision, with a competitor map",
      },
      {
        session: "Founder Clinic: Online Marketing Hacks",
        lead: "Bea Trinidad",
        leave: "First Online Campaign",
      },
    ],
  },
  {
    month: "March – Let's Run the Numbers",
    sessions: [
      {
        session: "Bootcamp 3: Pricing and Understanding Your Breakeven (prime cost and unit economics)",
        lead: "Pinky Velez Poe",
        leave: "Unit-economics model with cost per plate, prime cost, and breakeven",
      },
      {
        session: "Founder Clinic: Negotiating leases and optimizing your capex",
        lead: "Jose Magsaysay Jr. + Guest Entrepreneurs",
        leave: "Site, lease and capex plan",
      },
    ],
  },
  {
    month: "April – Win Your First Customers",
    sessions: [
      {
        session: "Bootcamp 4: Telling Your Story & Filling Seats (positioning, CRM, and delivery margins)",
        lead: "Chrissy Roa",
        leave: "Positioning and customer acquisition plan",
      },
    ],
  },
  {
    month: "May – Build the Team and Raise the Money",
    sessions: [
      {
        session: "Bootcamp 5: Building the Right Team",
        lead: "RL Garcia",
        leave: "Staffing plan",
      },
      {
        session: "Founder Clinic: Raising capital",
        lead: "Jose Magsaysay Jr. and Guest Entrepreneurs",
        leave: "Funding plan",
      },
    ],
  },
  {
    month: "June",
    sessions: [
      {
        session: "Bootcamp 6: Elective of choice",
        lead: "TBD",
        leave: "Operations plan, milestone list, and first pitch deck",
        note: "Elective options: TBD",
      },
      {
        session: "Founder Clinic: Pitch Deck Laboratory",
        lead: "TBD",
        leave: "TBD",
      },
      {
        session: "Founder Clinic: Pitch Rehearsal",
        lead: "Jose Magsaysay Jr. and panel",
        leave: "Final pitch",
      },
      {
        session: "Pitch Kitchen Demo Day",
        lead: "Jose Magsaysay Jr., with investors, operators, and franchise networks",
        leave: "Live pitch",
      },
    ],
  },
];

const mentors: { name: string; field: string; image?: string; slug?: string }[] = [
  {
    name: "Jose “Jomag” Magsaysay Jr.",
    field: "Entrepreneurship / Strategy",
    image: "/experts/team/magsaysay.jpg",
  },
  {
    name: "Professor Xavier Alpasa",
    field: "Entrepreneurship / Strategy",
    image: "/experts/team/alpasa.png",
    slug: "xavier-alpasa",
  },
  {
    name: "Bea Trinidad",
    field: "Marketing / Sales (online marketing clinic)",
    image: "/experts/team/trinidad.png",
    slug: "bea-trinidad",
  },
  {
    name: "Pinky Velez Poe",
    field: "Finance",
    image: "/experts/team/poe.jpg",
  },
  {
    name: "Chrissy Roa",
    field: "Marketing / Sales",
  },
  {
    name: "RL Garcia",
    field: "HR",
    image: "/experts/team/garcia.png",
    slug: "rl-garcia",
  },
  {
    name: "Guest entrepreneurs",
    field: "As noted in sessions",
  },
];

function initials(name: string) {
  const words = name
    .replace(/[“”"]/g, "")
    .split(" ")
    .filter((word) => word.length > 2 && word.toLowerCase() !== "and");
  const first = words[0]?.[0] ?? "";
  const last = words.length > 1 ? words[words.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}

function MentorCard({ mentor }: { mentor: (typeof mentors)[number] }) {
  const portrait = mentor.image ? (
    <Image
      src={mentor.image}
      alt=""
      fill
      className={`object-cover ${mentor.image.includes("magsaysay") ? "object-top" : "object-center"}`}
      sizes="80px"
    />
  ) : (
    <span className="text-lg font-semibold text-[#225475]" aria-hidden="true">
      {initials(mentor.name)}
    </span>
  );
  const body = (
    <>
      <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#E7F5F5]">
        {portrait}
      </div>
      <div>
        <h3 className="font-semibold text-black">{mentor.name}</h3>
        <p className="mt-1 text-base text-[#5c6b73]">{mentor.field}</p>
      </div>
    </>
  );
  const className = "flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4";
  if (!mentor.slug) return <article className={className}>{body}</article>;
  return (
    <Link href={`/experts/${mentor.slug}`} className={`${className} hover:border-[#225475] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#225475]`}>
      {body}
    </Link>
  );
}

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#f4f7f8] text-black">
      <PageIntro
        eyebrow="Programs"
        title="Food Venture Accelerator Program"
        text="with Entrepreneur in Residence Jose Magsaysay Jr."
      />
      <section className="bg-[#f4f7f8] font-jost">
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-12 lg:px-6">
          <p className="max-w-[68ch] text-base text-[#5c6b73]">
            A six-month program for founders who want to take a food venture from idea to growth in collaboration with Jose Magsaysay Jr. as Entrepreneur in Residence.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Fact label="Cohort" value="Cohort 1: January to June 2027" />
            <Fact label="Format" value="6 Bootcamps, 4 Founder Clinic sessions, and Pitch Day with a panel of food entrepreneurial leaders" />
            <Fact label="Fee" value={<>Php 80,000 <span className="text-[#225475]">Tentative</span></>} />
            <Fact label="Application deadline" value="TBD" />
            <Fact label="Cohort size" value="TBD" />
            <Fact label="Venue" value="TBD" />
          </div>
          <div className="mt-6">
            <ProgramButton>Apply for the Food Venture Accelerator Program (January Cohort)</ProgramButton>
            <p className="mt-3 text-base text-black">with Entrepreneur in Residence (Jose Magsaysay Jr.)</p>
          </div>
        </div>
      </section>

      <Section id="glance" title="At a glance" tone="white">
        <dl className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/10 p-5">
            <dt className="text-sm tracking-[0.14em] text-[#225475] uppercase">Who can apply</dt>
            <dd className="mt-2 text-base text-black">Founders with a food venture or a food venture idea</dd>
          </div>
          <div className="rounded-2xl border border-black/10 p-5">
            <dt className="text-sm tracking-[0.14em] text-[#225475] uppercase">What you get</dt>
            <dd className="mt-2 text-base text-black">Practical CCA Connect Bootcamps, face-to-face time with food entrepreneurs, and access to investment</dd>
          </div>
          <div className="rounded-2xl border border-black/10 p-5">
            <dt className="text-sm tracking-[0.14em] text-[#225475] uppercase">Goal</dt>
            <dd className="mt-2 text-base text-black">Take your food business to growth in six months</dd>
          </div>
        </dl>
      </Section>

      <Section id="eir" title="Entrepreneur in Residence">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-[#E7F5F5]">
            <Image src="/experts/team/magsaysay.jpg" alt="Jose Magsaysay Jr." fill className="object-cover object-top" sizes="112px" />
          </div>
          <div>
            <h3 className="font-poppins text-xl font-semibold">Jose “Jomag” Magsaysay Jr.</h3>
            <p className="mt-2 max-w-[62ch] text-base text-[#5c6b73]">
              Co-founder of Potato Corner and seasoned entrepreneur with extensive experience in franchising, F&B entrepreneurship, and business growth.
            </p>
          </div>
        </div>
      </Section>

      <Section id="schedule" title="Six-month schedule" tone="white">
        <div className="flex flex-col gap-6">
          {months.map((month) => (
            <div key={month.month}>
              <h3 className="font-poppins text-xl font-semibold">{month.month}</h3>
              <div className="mt-3 divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10">
                {month.sessions.map((session) => (
                  <div key={session.session} className="grid gap-2 bg-[#f4f7f8] px-4 py-4 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-4">
                    <p className="font-semibold text-black">{session.session}</p>
                    <p className="text-base text-[#5c6b73]">
                      <span className="font-semibold text-[#225475] lg:hidden">Lead: </span>
                      {session.lead}
                    </p>
                    <p className="text-base text-black">
                      <span className="font-semibold text-[#225475] lg:hidden">You leave with: </span>
                      {session.leave}
                      {"note" in session && session.note ? <span className="mt-1 block">{session.note}</span> : null}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-[#225475] font-jost text-white" aria-labelledby="demo-title">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-6 lg:py-16">
          <h2 id="demo-title" className="font-poppins text-2xl leading-tight font-semibold tracking-tight lg:text-3xl">
            Pitch Kitchen Demo Day
          </h2>
          <p className="mt-4 max-w-[68ch] text-base text-white/90">
            Participants close the program by pitching live to a panel of investors, operators, and franchise networks. Jose Magsaysay Jr. chairs the day. Each founder&apos;s pitch is built across the bootcamps and clinics, and rehearsed in the final Founder Clinic before Demo Day.
          </p>
        </div>
      </section>

      <Section id="mentors" title="Mentors">
        <div className="grid gap-3 sm:grid-cols-2">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.name} mentor={mentor} />
          ))}
        </div>
      </Section>

      <Section id="pricing" title="Pricing and value" tone="white">
        <ul className="flex flex-col gap-3 text-base text-black">
          <li className="rounded-2xl border border-black/10 px-4 py-3">
            Program fee: Php 80,000 <span className="text-[#225475]">Tentative</span>
          </li>
          <li className="rounded-2xl border border-black/10 px-4 py-3">
            Bundle: Masterclass + Accelerator → Php 100,000 (save Php 5,000)
          </li>
          <li className="rounded-2xl border border-black/10 px-4 py-3">
            Bundle: Fundamentals of Culinary / Baking + Accelerator → Php 140,000 (save Php 15,000)
          </li>
          <li className="rounded-2xl border border-black/10 px-4 py-3">Individual bootcamp: Php 15,000 each</li>
        </ul>
      </Section>

      <section className="bg-[#0a0a0a] font-jost text-white" aria-labelledby="apply-title">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-5 py-12 lg:px-6 lg:py-16">
          <h2 id="apply-title" className="font-poppins text-2xl leading-tight font-semibold tracking-tight lg:text-3xl">
            Apply for the January cohort
          </h2>
          <ProgramButton>Apply for the Food Venture Accelerator Program (January Cohort)</ProgramButton>
          <p className="text-base text-white/80">with Entrepreneur in Residence (Jose Magsaysay Jr.)</p>
          <p className="text-base text-white">Application deadline: TBD</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - BookBuk",
  description: "Privacy Policy for BookBuk.",
};

const sections = [
  {
    title: "Overview",
    body: "BookBuk is designed to feel simple and private. This page explains what information may be handled when you use BookBuk and how that information is treated.",
  },
  {
    title: "Information You Provide",
    body: "BookBuk may store the notes, pages, and books you create inside the app so the app can function properly on your device. BookBuk does not require a public profile or social account to use the app.",
  },
  {
    title: "Personal Information",
    body: "BookBuk is not designed to collect unnecessary personal information. If features such as support requests, subscriptions, analytics, crash reporting, cloud sync, or similar services are added, this policy should be updated to reflect that clearly.",
  },
  {
    title: "How Information Is Used",
    body: "Any information handled by BookBuk is used only to provide and improve the app experience, such as saving your content, keeping the app stable, and helping features work as expected.",
  },
  {
    title: "Sharing",
    body: "BookBuk does not sell your personal information. Information is only shared when required to operate essential platform services, comply with the law, or protect the app and its users.",
  },
  {
    title: "Data Retention",
    body: "Information is kept only for as long as needed to operate the app and fulfill legitimate technical or legal needs. If future features add account-based storage, the retention policy should be updated here.",
  },
  {
    title: "Children's Privacy",
    body: "BookBuk is not intended to knowingly collect personal information from children without appropriate consent where required by law.",
  },
  {
    title: "Changes to This Policy",
    body: "This Privacy Policy may be updated from time to time. When changes are made, the updated version will be posted on this page.",
  },
  {
    title: "Contact",
    body: "For privacy-related questions, contact BookBuk at varadkhadke@gmail.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div
        className="mx-auto max-w-3xl rounded-[2rem] p-8 sm:p-12 glass"
        style={{ color: "var(--color-ink)" }}
      >
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--color-accent)" }}
          >
            <span aria-hidden="true">←</span>
            Back to BookBuk
          </Link>
        </div>

        <header className="mb-10">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--color-accent)" }}
          >
            Privacy Policy
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            BookBuk Privacy Policy
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--color-ink-secondary)" }}
          >
            Last updated: April 15, 2026
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-ink-secondary)" }}
              >
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

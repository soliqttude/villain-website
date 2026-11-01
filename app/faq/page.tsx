"use client";

import { useState } from "react";

const questions = [
  ["What is Villain?", "Villain is an all-in-one Discord bot with moderation, server tools, music, community features, and more."],
  ["How do I add Villain to my server?", "Use the Invite button in the navigation. The destination works once the site owner configures the Discord invite URL."],
  ["Is Villain free?", "Pricing and plan details have not been published on this site. Check official Villain announcements for current information."],
  ["How do I see the available commands?", "Visit the Commands page for the command directory. The list is being kept separate from the bot so it can be updated as features change."],
  ["Where can I get support?", "Visit the Support page for the official support link when it becomes available."],
  ["Is there a status page?", "Yes. The Status page is here, and live monitoring will be connected when the bot's status endpoint is ready."]
];

export default function FAQPage() {
  const [opened, setOpened] = useState<number | null>(0);
  return <div className="page-shell narrow-page"><div className="page-hero"><div className="eyebrow">GOT QUESTIONS?</div><h1>FAQ<span>.</span></h1><p>Quick answers to the things people ask most.</p></div><div className="faq-list">{questions.map(([q,a],i) => <section className={opened === i ? "faq-item faq-open" : "faq-item"} key={q}><button className="faq-question" onClick={() => setOpened(opened === i ? null : i)} aria-expanded={opened === i}><span><small>0{i+1}</small>{q}</span><b>{opened === i ? "−" : "+"}</b></button>{opened === i && <p className="faq-answer">{a}</p>}</section>)}</div></div>;
}

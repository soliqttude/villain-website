"use client";

import { useState } from "react";

const groups = [
  {
    title: "Getting started",
    items: [
      ["What is Villain?", "Villain is an all-in-one Discord bot built to handle moderation, server security, music, tickets, leveling, giveaways, temporary voice channels, utilities, and community features."],
      ["How do I invite Villain?", "Use the Add to server button on this website. Choose your server in Discord's authorization screen and review the permissions before approving."],
      ["What permissions does Villain need?", "Permissions depend on the features you use. Discord will show the requested permissions during installation. Only grant the permissions required for the features you plan to enable."],
      ["Is Villain free?", "Check the official support server for the current availability and any plan or pricing updates. We won't make up pricing details here."]
    ]
  },
  {
    title: "Commands & features",
    items: [
      ["Does Villain use slash commands or a prefix?", "Both. Villain supports Discord slash commands and prefix commands. The default prefix for new servers is a comma (,)."],
      ["How do I see all commands?", "Visit the Commands page. You can browse categories and search for a command by name."],
      ["Why isn't a command working?", "Check that Villain has the required permissions, that the command is enabled for your server, and that your role is allowed to use it. Some features also require database-backed services to be configured."],
      ["Can I use music commands?", "Yes. Villain includes music playback and queue controls. Make sure it has the required voice and channel permissions."],
      ["Does Villain have moderation and server protection?", "Villain includes moderation tools and server-security features. Configure them carefully and test settings with trusted staff before relying on automated actions."]
    ]
  },
  {
    title: "Account & troubleshooting",
    items: [
      ["What is the Villain Member Linked Role?", "It is an optional Discord Linked Role connection. Connect your Discord account on this website, then claim the matching role from your server's Linked Roles settings if the requirement is configured."],
      ["Why can't I claim the Linked Role?", "Make sure you connected the same Discord account that is in your server, and that the server role has the Villain Member requirement saved. If it still doesn't appear, ask in the support server."],
      ["Where can I get help?", "Join the official Villain support server at discord.gg/villainbot. Include the command name, what you expected, and any error message. Never share your password, bot token, or private keys."],
      ["Where can I check service status?", "Visit the Status page for current status information. If live monitoring is unavailable, the page will say so rather than showing invented uptime figures."]
    ]
  }
];

export default function FAQPage() {
  const [opened, setOpened] = useState<string | null>("0-0");

  return (
    <div className="page-shell narrow-page faq-page">
      <div className="page-hero">
        <p className="eyebrow">VILLAIN / HELP CENTER</p>
        <h1>Questions?<br /><span>Answered.</span></h1>
        <p>Setup, commands, permissions, and troubleshooting. If you can't find it here, our support server is one click away.</p>
        <a className="btn" href="https://discord.gg/villainbot" target="_blank" rel="noreferrer">Join support <span aria-hidden="true">↗</span></a>
      </div>
      {groups.map((group, groupIndex) => (
        <section className="faq-group" key={group.title}>
          <p className="eyebrow">0{groupIndex + 1} / {group.title.toUpperCase()}</p>
          <div className="faq-list">
            {group.items.map(([question, answer], index) => {
              const id = `${groupIndex}-${index}`;
              const open = opened === id;
              return (
                <section className={open ? "faq-item faq-open" : "faq-item"} key={question}>
                  <button type="button" className="faq-question" onClick={() => setOpened(open ? null : id)} aria-expanded={open}>
                    <span><small>{String(index + 1).padStart(2, "0")}</small>{question}</span>
                    <b aria-hidden="true">{open ? "−" : "+"}</b>
                  </button>
                  {open && <p className="faq-answer">{answer}</p>}
                </section>
              );
            })}
          </div>
        </section>
      ))}
      <section className="faq-support-cta">
        <div><p className="eyebrow">STILL NEED A HAND?</p><h2>Talk to the team.</h2><p>Get help from the Villain community in the official support server.</p></div>
        <a className="btn" href="https://discord.gg/villainbot" target="_blank" rel="noreferrer">Open Discord <span aria-hidden="true">↗</span></a>
      </section>
    </div>
  );
}

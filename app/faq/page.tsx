"use client";

import { useState } from "react";

const questions = [
  ["What is Villain?", "A Discord bot for the jobs servers usually split up: moderation, music, tickets, levels, giveaways, temp voice, and a long tail of smaller utilities."],
  ["How do I add it?", "Use Add to server. If the public invite isn't live yet, that page says so. It won't send you to a guessed link."],
  ["Does it cost money?", "This site doesn't list a price. If that changes, it'll be said here, not hidden in a command."],
  ["Prefix or slash?", "Both. The command list shows module names. In Discord they run as slash commands and with your server prefix."],
  ["Where's support?", "The support page. A server link goes there when there is one. Until then, the FAQ and the command list are the useful parts."],
  ["Is the status page real?", "The page is real. Live monitoring isn't connected, and it will not invent an uptime percentage."]
];

export default function FAQPage() {
  const [opened, setOpened] = useState<number | null>(0);

  return (
    <div className="page-shell narrow-page">
      <div className="page-hero">
        <h1>FAQ</h1>
        <p>Short answers. No tour of the product.</p>
      </div>
      <div className="faq-list">
        {questions.map(([question, answer], index) => {
          const open = opened === index;
          return (
            <section className={open ? "faq-item faq-open" : "faq-item"} key={question}>
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpened(open ? null : index)}
                aria-expanded={open}
              >
                <span>
                  <small>0{index + 1}</small>
                  {question}
                </span>
                <b>{open ? "–" : "+"}</b>
              </button>
              {open && <p className="faq-answer">{answer}</p>}
            </section>
          );
        })}
      </div>
    </div>
  );
}

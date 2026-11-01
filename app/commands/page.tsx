"use client";

import { useMemo, useState } from "react";

const groups = [
  {
    "name": "Anime",
    "desc": "10 command modules in this category.",
    "commands": [
      "bite",
      "blush",
      "cry",
      "hug",
      "kiss",
      "neko",
      "pat",
      "poke",
      "slap",
      "waifu"
    ]
  },
  {
    "name": "Configuration",
    "desc": "8 command modules in this category.",
    "commands": [
      "setautorole",
      "setjoinmsg",
      "setleavemsg",
      "setlogs",
      "setmodrole",
      "setmuterole",
      "setprefix",
      "setwelcome"
    ]
  },
  {
    "name": "Villain",
    "desc": "17 command modules in this category.",
    "commands": [
      "botinfo",
      "bugreport",
      "changelog",
      "copy",
      "create",
      "creator",
      "delete",
      "edit",
      "growthstats",
      "invite",
      "list",
      "partner",
      "rename",
      "review",
      "view",
      "villain",
      "vote"
    ]
  },
  {
    "name": "Fun",
    "desc": "96 command modules in this category.",
    "commands": [
      "8ball",
      "achievements",
      "aesthetic",
      "anagram",
      "anagramchallenge",
      "ascii",
      "bite",
      "blackjack",
      "blush",
      "bonk",
      "bored",
      "choose",
      "clap",
      "coinflip",
      "colorquiz",
      "compliment",
      "confession",
      "cringe",
      "cry",
      "cuddle",
      "dadjoke",
      "dailyquote",
      "dance",
      "dare",
      "divorce",
      "emojify",
      "facepalm",
      "fact",
      "fortune",
      "gayrate",
      "hack",
      "hangman",
      "happy",
      "highfive",
      "hug",
      "impostor",
      "iq",
      "joke",
      "kiss",
      "laugh",
      "lick",
      "lovemeter",
      "lucky",
      "lurk",
      "marry",
      "meme",
      "mines",
      "minesweeper",
      "mock",
      "mood",
      "neverhaveiever",
      "numberguess",
      "numberrace",
      "owoify",
      "pat",
      "peck",
      "pickup",
      "poke",
      "pp",
      "profile",
      "punch",
      "quote",
      "rate",
      "regional",
      "rep",
      "reverse",
      "riddle",
      "roast",
      "roastme",
      "roll",
      "rps",
      "scramble",
      "ship",
      "shrug",
      "simprate",
      "slap",
      "sleep",
      "slots",
      "smile",
      "smug",
      "spinwheel",
      "spouse",
      "stare",
      "thisorthat",
      "tictactoe",
      "trivia",
      "truth",
      "truthordare",
      "typerace",
      "vaporwave",
      "wave",
      "wink",
      "wordchain",
      "wouldyourather",
      "yeet",
      "zalgo"
    ]
  },
  {
    "name": "Giveaways",
    "desc": "6 command modules in this category.",
    "commands": [
      "gcancel",
      "gcreate",
      "gedit",
      "gend",
      "glist",
      "greroll"
    ]
  },
  {
    "name": "Image",
    "desc": "12 command modules in this category.",
    "commands": [
      "blur",
      "caption",
      "changemymind",
      "clyde",
      "deepfry",
      "drake",
      "grayscale",
      "invert",
      "jail",
      "pixelate",
      "triggered",
      "wanted"
    ]
  },
  {
    "name": "Last.fm",
    "desc": "8 command modules in this category.",
    "commands": [
      "fmprofile",
      "fmrecent",
      "fmset",
      "fmunset",
      "np",
      "topalbums",
      "topartists",
      "toptracks"
    ]
  },
  {
    "name": "Leveling",
    "desc": "17 command modules in this category.",
    "commands": [
      "addreward",
      "addxp",
      "leaderboard",
      "levelcard",
      "levelroles",
      "levelstoggle",
      "noxp",
      "rank",
      "removereward",
      "removexp",
      "resetxp",
      "rewards",
      "setlevel",
      "setlevelchannel",
      "setxp",
      "trackchannel",
      "xpmult"
    ]
  },
  {
    "name": "Moderation",
    "desc": "77 command modules in this category.",
    "commands": [
      "antiraid",
      "antispam",
      "ban",
      "banlist",
      "bind",
      "bindstaff",
      "botpurge",
      "clearroles",
      "clearwarns",
      "createcategory",
      "createchannel",
      "deafen",
      "dehoist",
      "deletechannel",
      "delrole",
      "drag",
      "forcenick",
      "hackban",
      "hardban",
      "hide",
      "hidechannel",
      "imagepurge",
      "imagesonly",
      "imute",
      "iunmute",
      "jail",
      "kick",
      "linkpurge",
      "lock",
      "lockdown",
      "massban",
      "massrole",
      "massunrole",
      "mentionpurge",
      "moveall",
      "nick",
      "nolinks",
      "note",
      "nuke",
      "purge",
      "raid",
      "raidmode",
      "recentban",
      "rmute",
      "role",
      "roleall",
      "runmute",
      "setadmin",
      "setcolor",
      "setme",
      "setmod",
      "setupmod",
      "setupmute",
      "showchannel",
      "slowmode",
      "softban",
      "strip",
      "stripall",
      "tempban",
      "tempmute",
      "timeout",
      "unban",
      "unbanall",
      "undeafen",
      "unhide",
      "unhoist",
      "unjail",
      "unlock",
      "unlockdown",
      "unroleall",
      "untimeout",
      "vmute",
      "voicekick",
      "vunmute",
      "warn",
      "warnings",
      "wordfilter"
    ]
  },
  {
    "name": "Music",
    "desc": "16 command modules in this category.",
    "commands": [
      "fastforward",
      "filter",
      "leave",
      "nowplaying",
      "pause",
      "play",
      "preset",
      "queue",
      "repeat",
      "resume",
      "rewind",
      "seek",
      "shuffle",
      "skip",
      "stop",
      "volume"
    ]
  },
  {
    "name": "Roleplay",
    "desc": "15 command modules in this category.",
    "commands": [
      "cuddle",
      "dance",
      "facepalm",
      "feed",
      "highfive",
      "lick",
      "pout",
      "punch",
      "shoot",
      "smug",
      "stare",
      "tickle",
      "wave",
      "wink",
      "yeet"
    ]
  },
  {
    "name": "Settings",
    "desc": "82 command modules in this category.",
    "commands": [
      "alias",
      "antighostping",
      "antinuke",
      "antiraid",
      "automod",
      "autopublish",
      "autorole",
      "badge",
      "birthday",
      "boosterrole",
      "boosts",
      "bumpreminder",
      "buttonrole",
      "clownboard",
      "confession",
      "copydisabled",
      "counter",
      "counting",
      "customize",
      "disablecommand",
      "disableevent",
      "disablemodule",
      "dj",
      "dropsetup",
      "enablecommand",
      "enableevent",
      "enablemodule",
      "events",
      "fakepermissions",
      "filter",
      "goodbye",
      "highlight",
      "honeypot",
      "ignore",
      "imgonly",
      "integrations",
      "invoke",
      "joinmessage",
      "language",
      "leavemessage",
      "levels",
      "logging",
      "notifications",
      "panel",
      "pins",
      "prefix",
      "rcategory",
      "reactionrole",
      "reactiontrigger",
      "reposter",
      "reset",
      "rolepanel",
      "serverconfig",
      "setboost",
      "setboostrole",
      "setgoodbye",
      "setjailrole",
      "setlog",
      "setreport",
      "setup",
      "setupcounting",
      "setupinfo",
      "setupthread",
      "setwelcome",
      "shopadd",
      "shopremove",
      "socialnotify",
      "starboard",
      "stickymessage",
      "suggest",
      "suggestchannel",
      "ticket",
      "ticketpanel",
      "tickets",
      "timer",
      "timezone",
      "vanity",
      "verification",
      "view",
      "voicemaster",
      "voicerole",
      "welcome"
    ]
  },
  {
    "name": "Social",
    "desc": "18 command modules in this category.",
    "commands": [
      "badge",
      "bio",
      "divorce",
      "instagram",
      "lovecalc",
      "marry",
      "pinterest",
      "profile",
      "reddit",
      "relationship",
      "rep",
      "socials",
      "soundcloud",
      "streak",
      "tiktok",
      "twitch",
      "twitter",
      "youtube"
    ]
  },
  {
    "name": "Stickers",
    "desc": "6 command modules in this category.",
    "commands": [
      "add",
      "delete",
      "info",
      "list",
      "rename",
      "steal"
    ]
  },
  {
    "name": "Tags",
    "desc": "9 command modules in this category.",
    "commands": [
      "autoresponder",
      "create",
      "delete",
      "edit",
      "list",
      "random",
      "search",
      "show",
      "tag"
    ]
  },
  {
    "name": "Threads",
    "desc": "9 command modules in this category.",
    "commands": [
      "archive",
      "create",
      "delete",
      "lock",
      "members",
      "rename",
      "slowmode",
      "unarchive",
      "unlock"
    ]
  },
  {
    "name": "Utilities",
    "desc": "101 command modules in this category.",
    "commands": [
      "about",
      "addemoji",
      "admins",
      "advice",
      "afk",
      "age",
      "ascii",
      "avatar",
      "banner",
      "base64",
      "binary",
      "birthday",
      "boosters",
      "botlist",
      "bots",
      "calculate",
      "calculator",
      "channelinfo",
      "charcount",
      "color",
      "countmembers",
      "createembed",
      "crypto",
      "decode",
      "define",
      "editsnipe",
      "embed",
      "emojiinfo",
      "encode",
      "extractemojis",
      "extractstickers",
      "firstjoin",
      "firstmessage",
      "fortnite",
      "github",
      "guildicon",
      "hash",
      "help",
      "hex",
      "humans",
      "inrole",
      "inviteinfo",
      "invites",
      "ip",
      "jumbo",
      "lyrics",
      "math",
      "membercount",
      "minecraft",
      "morse",
      "newest",
      "oldest",
      "pagination",
      "password",
      "permissions",
      "pin",
      "ping",
      "pokemon",
      "poll",
      "pronouns",
      "qr",
      "qrcode",
      "randomuser",
      "remind",
      "removeemoji",
      "report",
      "roblox",
      "rolecolor",
      "roleinfo",
      "roles",
      "say",
      "screenshot",
      "serverinfo",
      "setbanner",
      "setbasicroles",
      "seticon",
      "setsplashbackground",
      "setupboosterperks",
      "setupfgs",
      "setupinterface",
      "setuplaw",
      "setupshame",
      "snipe",
      "steal",
      "steam",
      "stock",
      "tempconvert",
      "time",
      "timestamp",
      "timezone",
      "topinvites",
      "translate",
      "tts",
      "unpin",
      "uptime",
      "urban",
      "userinfo",
      "uuid",
      "weather",
      "webhook",
      "wikipedia"
    ]
  },
  {
    "name": "VoiceMaster",
    "desc": "28 command modules in this category.",
    "commands": [
      "vmbitrate",
      "vmclaim",
      "vmdelete",
      "vmforbid",
      "vmhide",
      "vminfo",
      "vminvite",
      "vmkick",
      "vmlimit",
      "vmlock",
      "vmmuteall",
      "vmname",
      "vmpanel",
      "vmpermit",
      "vmregion",
      "vmreset",
      "vmreveal",
      "vmtransfer",
      "vmunlock",
      "vmunmuteall",
      "voicecreate",
      "voicedelete",
      "voicekick",
      "voicelimit",
      "voicelock",
      "voicemove",
      "voicerename",
      "voiceunlock"
    ]
  },
  {
    "name": "Webhooks",
    "desc": "6 command modules in this category.",
    "commands": [
      "create",
      "delete",
      "edit",
      "info",
      "list",
      "send"
    ]
  }
];

export default function CommandsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...groups.map((group) => group.name)];
  const total = groups.reduce((sum, group) => sum + group.commands.length, 0);
  const filtered = useMemo(
    () => groups
      .filter((group) => category === "All" || group.name === category)
      .map((group) => ({
        ...group,
        commands: group.commands.filter((command) => command.toLowerCase().includes(query.toLowerCase()))
      }))
      .filter((group) => group.commands.length > 0),
    [query, category]
  );

  return (
    <div className="page-shell">
      <div className="page-hero">
        <h1>Commands</h1>
        <p>{total} modules across {groups.length} categories, taken from the Villain source tree. Search if you already know the name.</p>
      </div>
      <div className="command-toolbar">
        <label className="search-box">
          <span>Search commands</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name"
            aria-label="Search commands"
            autoComplete="off"
          />
        </label>
        <div className="filter-row" aria-label="Categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={category === item ? "filter-chip selected" : "filter-chip"}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="command-groups">
        {filtered.map((group) => (
          <section className="command-group" key={group.name}>
            <div className="command-group-head">
              <h2>{group.name}</h2>
              <span>{group.commands.length}</span>
            </div>
            <div className="command-pills">
              {group.commands.map((command) => <code key={command}>{command}</code>)}
            </div>
          </section>
        ))}
        {filtered.length === 0 && (
          <div className="empty-state">
            <h2>Nothing matches.</h2>
            <p>Try a shorter word, or switch the category back to All.</p>
          </div>
        )}
      </div>
      <p className="page-disclaimer">Names come from command modules in the repo. A module listed here can be turned off on a given server. Owner-only tools are not listed.</p>
    </div>
  );
}

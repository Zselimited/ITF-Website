"use client";

import { useState, type FormEvent } from "react";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwEJ3kvpMJANkNT9G5WBnbAb39xJO8PMBOqFEGez07bYiQmlZl-zshnI_dzmHNJO38yBQ/exec";

const WHATSAPP_URL = "https://chat.whatsapp.com/LvVpjKlL5vI6HckUXOqn3a";

const describesYouOptions = [
  "I have a business/startup",
  "I'm planning to start a business",
  "I'm a freelancer/service provider",
  "I'm a student",
  "Other",
];

const businessStageOptions = [
  "Idea stage",
  "Just started (0–6 months)",
  "Early stage (6 months–2 years)",
  "Growing business (2+ years)",
  "Not applicable",
];

const hearAboutOptions = [
  "LinkedIn",
  "Facebook",
  "Instagram",
  "WhatsApp",
  "Friend or colleague",
  "ITF Community",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function FullRegisterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [describesYou, setDescribesYou] = useState("");
  const [describesYouOther, setDescribesYouOther] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [hearAboutOther, setHearAboutOther] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      phone: data.get("phone"),
      business: data.get("business"),
      location: data.get("location"),
      describesYou: describesYou === "Other" ? describesYouOther : describesYou,
      businessStage: data.get("businessStage"),
      goal: data.get("goal"),
      pitchedBefore: data.get("pitchedBefore"),
      hearAbout: hearAbout === "Other" ? hearAboutOther : hearAbout,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      setStatus("success");
      setTimeout(() => {
        window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
      }, 1600);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-ink/10 bg-white/80 p-10 text-center">
        <p className="font-display text-2xl text-ink">You&apos;re in! 🎉</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          We&apos;ve got your registration. A new tab is about to open so you can join the ITF
          WhatsApp community — that&apos;s where reminders and your access link will be shared.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-flare px-6 py-3 text-sm font-semibold text-white hover:bg-[#d85a26]">
          Didn&apos;t open? Join the WhatsApp community →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-ink/10 bg-white/80 p-8 sm:p-10">
      <Field label="What is your full name?" required>
        <input name="fullName" type="text" required className="input" placeholder="Your full name" />
      </Field>

      <Field label="What is your email address?" required>
        <input name="email" type="email" required className="input" placeholder="you@email.com" />
      </Field>

      <Field label="What is your phone number (preferably WhatsApp)?" required>
        <input name="phone" type="tel" required className="input" placeholder="+234..." />
      </Field>

      <Field label="What is the name of your business or startup?">
        <input name="business" type="text" className="input" placeholder="Optional" />
      </Field>

      <Field label="Where is your state/country of residence?" required>
        <input name="location" type="text" required className="input" placeholder="e.g. Lagos, Nigeria" />
      </Field>

      <RadioField
        label="Which best describes you?"
        name="describesYou"
        options={describesYouOptions}
        value={describesYou}
        onChange={setDescribesYou}
        otherValue={describesYouOther}
        onOtherChange={setDescribesYouOther}
      />

      <RadioField
        label="At what stage is your business?"
        name="businessStage"
        options={businessStageOptions}
      />

      <Field label="What do you hope to gain from this webinar?" required>
        <textarea name="goal" required rows={3} className="input resize-none" placeholder="Tell us a little about what you're hoping for" />
      </Field>

      <RadioField
        label="Have you ever pitched your business to investors, grant providers, or partners before?"
        name="pitchedBefore"
        options={["Yes", "No"]}
      />

      <RadioField
        label="How did you hear about this webinar?"
        name="hearAbout"
        options={hearAboutOptions}
        value={hearAbout}
        onChange={setHearAbout}
        otherValue={hearAboutOther}
        onOtherChange={setHearAboutOther}
      />

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong sending that — please try again in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-flare px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#d85a26] disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Save My Seat →"}
      </button>
      <p className="text-center text-[11px] leading-relaxed text-ink/45">
        Submitting takes you to our WhatsApp community, where your access link and reminders will
        be shared.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
        {label}
        {required && <span className="text-flare"> *</span>}
      </span>
      {children}
    </label>
  );
}

function RadioField({
  label,
  name,
  options,
  value,
  onChange,
  otherValue,
  onOtherChange,
}: {
  label: string;
  name: string;
  options: string[];
  value?: string;
  onChange?: (v: string) => void;
  otherValue?: string;
  onOtherChange?: (v: string) => void;
}) {
  const [internal, setInternal] = useState("");
  const current = value !== undefined ? value : internal;
  const setCurrent = onChange ?? setInternal;

  return (
    <div>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/50">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              current === opt
                ? "border-flare bg-flare/10 text-ink"
                : "border-ink/15 text-ink/60 hover:border-ink/30"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={current === opt}
              onChange={() => setCurrent(opt)}
              className="sr-only"
            />
            {opt}
          </label>
        ))}
      </div>
      {current === "Other" && onOtherChange && (
        <input
          type="text"
          value={otherValue}
          onChange={(e) => onOtherChange(e.target.value)}
          placeholder="Please specify"
          className="input mt-3"
        />
      )}
    </div>
  );
}

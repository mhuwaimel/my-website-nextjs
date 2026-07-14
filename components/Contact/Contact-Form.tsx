"use client";

import { type FormEvent, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { StarMark } from "@/components/Shared/StarMark";
import { usePreferences } from "@/components/providers/PreferencesProvider";

type ContactErrors = Partial<
  Record<"name" | "email" | "subject" | "message", boolean>
>;

export default function ContactForm() {
  const { t } = usePreferences();
  const form = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<ContactErrors>({});

  const validate = () => {
    const e: ContactErrors = {};
    if (!name) e.name = true;
    if (!email) e.email = true;
    if (!subject) e.subject = true;
    if (!message) e.message = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const { error } = (await res.json()) as { error?: string };
      if (error) throw new Error(error);
      toast.success("تــم", { description: "شكراً لتواصلك، تم إرسال الرسالة" });
      setSent(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => setSent(false), 2600);
    } catch {
      toast.error("عفواً", {
        description: "حدث خطأ أثناء الإرسال، حاول لاحقاً",
      });
    } finally {
      setLoading(false);
    }
  };

  const Err = ({ show }: { show?: boolean }) =>
    show ? (
      <p className="mt-1 text-sm" style={{ color: "#ef4444" }}>
        {t.form.required}
      </p>
    ) : null;

  return (
    <section id="contact" className="py-16 pb-20">
      <div
        className="relative overflow-hidden rounded-[26px] p-[clamp(26px,4vw,52px)]"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div className="relative grid items-start gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <div>
            <div
              className="mb-2.5 inline-flex items-center gap-[9px] text-[0.82rem] font-extrabold tracking-[.06em]"
              style={{ color: "var(--primary)" }}
            >
              <StarMark size={13} />
              {t.sections.contactKicker}
            </div>
            <h2 className="m-0 mb-[26px] font-[Cairo] text-[clamp(1.7rem,4vw,2.5rem)] font-black">
              {t.sections.contactTitle}
            </h2>

            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span
                    className="mb-[7px] block text-[0.85rem] font-bold"
                    style={{ color: "var(--muted)" }}
                  >
                    {t.form.name}
                  </span>
                  <input
                    className="field"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.form.phName}
                  />
                  <Err show={errors.name} />
                </label>
                <label className="block">
                  <span
                    className="mb-[7px] block text-[0.85rem] font-bold"
                    style={{ color: "var(--muted)" }}
                  >
                    {t.form.email}
                  </span>
                  <input
                    type="email"
                    className="field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.form.phEmail}
                  />
                  <Err show={errors.email} />
                </label>
              </div>
              <label className="mb-4 block">
                <span
                  className="mb-[7px] block text-[0.85rem] font-bold"
                  style={{ color: "var(--muted)" }}
                >
                  {t.form.subject}
                </span>
                <input
                  className="field"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={t.form.phSubject}
                />
                <Err show={errors.subject} />
              </label>
              <label className="mb-5 block">
                <span
                  className="mb-[7px] block text-[0.85rem] font-bold"
                  style={{ color: "var(--muted)" }}
                >
                  {t.form.message}
                </span>
                <textarea
                  className="field min-h-[120px] resize-y"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.form.phMessage}
                />
                <Err show={errors.message} />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-[9px] rounded-[13px] border-none px-[30px] py-3.5 text-[0.98rem] font-extrabold transition-transform hover:translate-y-[-3px] disabled:opacity-70"
                style={{
                  background: "var(--primary)",
                  color: "var(--on-primary)",
                  boxShadow: "0 12px 28px -10px var(--primary)",
                }}
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : sent ? (
                  t.form.sent
                ) : (
                  t.form.send
                )}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3.5">
            <InfoCard
              label={t.contactInfo.email}
              value="alhuwaimel.m@gmail.com"
              href="mailto:alhuwaimel.m@gmail.com"
              ltr
            />
            <InfoCard
              label={t.contactInfo.phone}
              value="+966 50 543 6532"
              href="tel:+966505436532"
              ltr
            />
            <InfoCard
              label={t.contactInfo.location}
              value={t.contactInfo.locationValue}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  label,
  value,
  href,
  ltr,
}: {
  label: string;
  value: string;
  href?: string;
  ltr?: boolean;
}) {
  const inner = (
    <>
      <span
        className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[11px]"
        style={{ background: "var(--primary-soft)" }}
      >
        <StarMark size={18} />
      </span>
      <span>
        <span
          className="block text-[0.78rem] font-semibold"
          style={{ color: "var(--muted)" }}
        >
          {label}
        </span>
        <span className="block font-bold" dir={ltr ? "ltr" : undefined}>
          {value}
        </span>
      </span>
    </>
  );
  const cls =
    "flex items-center gap-3.5 rounded-[15px] p-[18px] no-underline transition-all duration-200 hover:-translate-y-0.5";
  const style = {
    background: "var(--bg)",
    border: "1px solid var(--border)",
    color: "var(--fg)",
  };
  return href ? (
    <a href={href} className={cls} style={style}>
      {inner}
    </a>
  ) : (
    <div className={cls} style={style}>
      {inner}
    </div>
  );
}

import {
  Code2,
  Link,
  Mail,
  MapPin,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "bhuvineve05@gmail.com",
    href: "mailto:bhuvineve05@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bhuvaneshneve",
    href: "https://www.linkedin.com/in/bhuvaneshneve",
    icon: Link,
  },
  {
    label: "GitHub",
    value: "github.com/Bhuvi285",
    href: "https://github.com/Bhuvi285",
    icon: Code2,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="font-mono text-sm text-green-400">
            09 / CONTACT
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s build something.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            I&apos;m currently looking for internship opportunities in
            Java/Spring Boot and MERN development. Feel free to reach out
            if you&apos;d like to connect.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Contact message */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
              <Mail
                size={22}
                className="text-green-400"
              />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              Have an opportunity?
            </h3>

            <p className="mt-4 leading-7 text-zinc-500">
              Whether you have an internship opportunity, want to discuss
              a project or simply want to connect, I&apos;d be happy to
              hear from you.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-400 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-green-300"
            >
              <Mail size={17} />
              Send Me an Email
            </a>
          </div>

          {/* Contact links */}
          <div className="space-y-4">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.label === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    contact.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition-colors hover:border-zinc-700"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <Icon
                      size={18}
                      className="text-green-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {contact.label}
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                <MapPin
                  size={18}
                  className="text-green-400"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Location
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Pune, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
````tsx
import {
  ArrowUpRight,
  GitBranch,
  Github,
  Star,
} from "lucide-react";

const githubStats = [
  {
    label: "Repositories",
    value: "8+",
    icon: GitBranch,
  },
  {
    label: "Projects",
    value: "8",
    icon: Github,
  },
  {
    label: "Open Source",
    value: "Active",
    icon: Star,
  },
];

export default function GitHub() {
  return (
    <section id="github" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="font-mono text-sm text-green-400">
            08 / GITHUB
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Code, projects & experiments.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            I use GitHub to build projects, experiment with technologies
            and keep track of my development journey.
          </p>
        </div>

        {/* GitHub content */}
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">

          {/* Main GitHub card */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                  <Github
                    size={24}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    @Bhuvi285
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Full Stack Java Developer | MERN Developer
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/Bhuvi285"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-green-400"
              >
                Visit GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>

            <p className="mt-8 max-w-2xl leading-7 text-zinc-400">
              Explore my projects, source code and experiments on GitHub.
              I regularly use Git and GitHub while learning new technologies
              and building practical applications.
            </p>

            <a
              href="https://github.com/Bhuvi285"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-400 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-green-300"
            >
              <Github size={17} />
              Explore My Repositories
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {githubStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <Icon
                      size={18}
                      className="text-green-400"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-lg font-semibold text-white">
                      {stat.value}
                    </p>

                    <p className="text-sm text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

### One thing to change later

I deliberately used:

```tsx
value: "8+"
````

instead of claiming an exact GitHub repository count.

Once we build the GitHub section properly, we can potentially make these values **dynamic using the GitHub API**. But for now, we're learning the portfolio architecture first.

---

# Part 2 — Contact

Now create:

```text
components/Contact.tsx
```

The important thing here is:

**We don't have a backend.**

So we shouldn't build a fake form that appears to submit somewhere.

Instead, we'll provide:

* Email
* LinkedIn
* GitHub
* Location
* A `mailto:` button

This works perfectly for your current static portfolio.

### `components/Contact.tsx`

````tsx
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://www.linkedin.com/in/your-profile",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Bhuvi285",
    href: "https://github.com/Bhuvi285",
    icon: Github,
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
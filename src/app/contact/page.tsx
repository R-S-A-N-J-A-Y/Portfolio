import { contactItems, socialLinks } from "@/data/contact";
import { services } from "@/data/service";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black ">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-32 sm:px-8 md:pt-15">
        <header className="mb-12 md:mb-10">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Let&apos;s Talk
          </h1>
          <p className="mt-5 max-w-1xl text-base leading text-gray-500 sm:text-lg font-['Courier_Prime']">
            Got a project in mind? I&apos;d love to hear about it. Let&apos;s
            create something amazing together.
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <section aria-labelledby="get-in-touch-heading">
            <h2
              id="get-in-touch-heading"
              className="mb-5 text-2xl font-semibold font-['poppins']"
            >
              Get in touch
            </h2>
            <ul className="space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label} className="flex items-top gap-4 text-lg">
                    <span className="flex shrink-0 items-top py-1.5 justify-center text-black">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold font-['poppins'] mb-2 mt-1">
                        {item.label}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[16px] font-poppins text-gray-700 hover:text-black focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className=" text-gray-700">{item.value}</p>
                      )}
                      <p className="text-[16px] text-gray-400">{item.note}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6">
              <h3 className="mb-4 text-lg font-semibold">Connect with me</h3>
              <ul className="flex gap-5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <li key={social.label}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={social.href}
                        aria-label={social.label}
                        className="flex size-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <Icon aria-hidden="true" size={20} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section aria-labelledby="services-heading">
            <h2
              id="services-heading"
              className="mb-7 text-2xl font-semibold font-['poppins']"
            >
              What I can help you with
            </h2>
            <ul className="space-y-5">
              {services.map((service) => (
                <li key={service.title} className="rounded-lg bg-gray-100 p-5">
                  <h3 className="font-semibold font-['poppins']">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500 font-['Courier_Prime']">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-2xl bg-[radial-gradient(ellipse_at_bottom_left,_#6d28d9_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_#d946ef_0%,_transparent_45%),linear-gradient(to_bottom,_#1a1520,_#0a0a0a)] p-6 text-white">
              <h3 className="text-lg font-semibold">
                Ready to start your project?
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Let&apos;s discuss your ideas and create something amazing
                together.
              </p>
              <a
                href="mailto:its.ashwin.23@gmail.com"
                className="mt-5 inline-flex min-h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start a conversation
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

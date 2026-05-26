export default function Marquee() {

  const companies = [
    "Google",
    "Microsoft",
    "Spotify",
    "Slack",
    "Netflix",
    "Adobe",
    "Notion",
    "Airbnb",
  ]

  return (

    <section className="py-12 overflow-hidden">

      <div className="relative">

        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#f3f3f3] to-transparent z-10"></div>

        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#f3f3f3] to-transparent z-10"></div>

        <div className="flex gap-16 whitespace-nowrap animate-marquee">

          {[...companies, ...companies].map((company, index) => (

            <div
              key={index}
              className="text-4xl font-semibold text-gray-400 hover:text-black transition"
            >
              {company}
            </div>

          ))}

        </div>

      </div>

    </section>

  )
}
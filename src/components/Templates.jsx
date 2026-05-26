export default function Templates() {

  const templates = [
    {
      title: "Chatbot for Marketing",
      desc: "Provide recommendations and process transactions in a chat.",
    },
    {
      title: "Chatbot for HR",
      desc: "Find talent and interact with candidates in an innovative way.",
    },
    {
      title: "Chatbot for Sales",
      desc: "Optimize your sales process and give visitors support.",
    },
  ]

  return (

    <section className="mt-10">

      <div className="bg-[#f8f8f8] rounded-[40px] p-10">

        <div className="grid lg:grid-cols-[350px_1fr] gap-10">

          <div>

            <h2 className="text-5xl lg:text-6xl font-semibold leading-tight">

              Use

              <span className="bg-[#B7FFD2] px-3 rounded-2xl ml-2">
                templates
              </span>

              <br />

              to get started
              <br />

              your project

            </h2>

            <div className="flex flex-wrap gap-3 mt-10">

              {[
                "E-Commerce",
                "Education",
                "Health Care",
                "Financial",
                "HR",
                "Tourism",
              ].map((tag) => (

                <button
                  key={tag}
                  className="border px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
                >
                  {tag}
                </button>

              ))}

            </div>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {templates.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[30px] p-6"
              >


                <div className="bg-gray-100 rounded-[25px] p-4 min-h-[180px] relative overflow-hidden">

                  <div className="bg-white rounded-xl p-3 w-[80%] text-sm">
                    Great! Happy to help find the right plan for you.
                  </div>

                  <div className="bg-[#00FF66] rounded-xl p-3 text-sm mt-6 w-[85%]">
                    Get more customer on my website page
                  </div>

                </div>

                <h3 className="text-2xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-relaxed">
                  {item.desc}
                </p>

                <button className="bg-black text-white px-6 py-3 rounded-full mt-8 hover:scale-105 transition">
                  Try template for free ↗
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>


      <div className="bg-[#f8f8f8] rounded-[40px] p-10 mt-10">

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">

          <div>

            <div className="bg-white rounded-[35px] p-10">

              <h2 className="text-5xl font-semibold leading-tight">
                What top-tier companies tell about our product
              </h2>

            </div>


            <div className="bg-white rounded-[35px] mt-8 overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt=""
                className="w-full h-[350px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-[#00FF66] text-3xl font-semibold">
                  Mbida Messi
                </h3>

                <p className="text-gray-500 mt-2">
                  Founder ERC Music Market Store
                </p>

              </div>

            </div>

          </div>


          <div className="flex flex-col justify-between">

            <div className="bg-[#00FF66] rounded-[35px] p-10 relative">

              <div className="inline-block border border-black rounded-full px-5 py-2 text-sm">
                Client Testimonial
              </div>

              <p className="text-4xl leading-relaxed mt-10">

                I was amazed by the level of assistance
                I received from the AI Chatbot provided
                by ROTAR AI. It quickly understood my
                questions and provided accurate and
                helpful responses.

              </p>

            </div>


            <div className="flex items-center justify-between mt-10">

              <button className="border px-5 py-2 rounded-full">
                1 / 4
              </button>

              <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
                See more testimonial ↗
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}
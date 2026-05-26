export default function Footer() {

  return (

    <section className="mt-10 mb-10">


      <div className="bg-[#00FF66] rounded-[40px] p-10 lg:p-16 relative overflow-hidden">


        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[size:25px_25px]"></div>

        <div className="relative z-10">

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">

            <div>

              <h2 className="text-5xl lg:text-7xl font-semibold leading-tight">

                Take control of your productivity
                <br />

                with a GPT-4 chatbot now

              </h2>

              <p className="text-gray-700 mt-8 max-w-xl leading-relaxed">

                Transform your Customer Service with
                Rotar’s AI and GPT-4 Powered Chatbot Solution.
                Try it free now.

              </p>

            </div>


            <div className="flex flex-wrap gap-5">

              <button className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition">
                Book a Demo ↗
              </button>

              <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition">
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </div>


      <footer className="bg-black rounded-[40px] p-10 lg:p-16 mt-10 text-white">


        <div className="grid lg:grid-cols-4 gap-10">


          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>About Rotar AI</li>
              <li>Pricing</li>
              <li>Demo</li>

            </ul>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Recources
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Blog</li>
              <li>Events</li>
              <li>Tool Library</li>

            </ul>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Legal
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Terms of Use</li>
              <li>Privacy Policy</li>

            </ul>

          </div>


          <div>

            <p className="text-gray-400 leading-relaxed">

              We are at the forefront of AI chatbot development,
              revolutionizing the way businesses engage with their customers.

            </p>

          </div>

        </div>


        <div className="border-t border-gray-800 mt-16 pt-10">

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">



            <div className="flex gap-4 flex-wrap">

              {[
                "Instagram",
                "LinkedIn",
                "Twitter",
                "Github",
              ].map((item) => (

                <button
                  key={item}
                  className="border border-gray-700 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
                >
                  {item}
                </button>

              ))}

            </div>


            <div className="border border-gray-700 px-8 py-3 rounded-full text-sm text-gray-400">

              © Rotar AI. All Rights Reserved

            </div>

          </div>

        </div>

      </footer>

    </section>

  )
}
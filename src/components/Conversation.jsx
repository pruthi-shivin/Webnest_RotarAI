export default function Conversation() {
  return (

    <section className="bg-[#f8f8f8] rounded-[40px] p-10 mt-10">

      <div className="grid lg:grid-cols-[280px_1fr] gap-10">


        <div>

          <p className="text-gray-500 leading-relaxed">
            Throughout your customer’s entire buying journey,
            Rotar AI allow you to delight them at every step
            of the way, from their first visit to the final purchase.
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-full mt-10 hover:scale-105 transition">
            Get Started →
          </button>


          <div className="space-y-10 mt-14">

            <div className="bg-[#F1DDAA] rounded-[30px] p-6">

              <h3 className="text-2xl font-semibold">
                Engage
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Reach out to visitors proactively using
                personalized chatbot greetings.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold">
                Nurture
              </h3>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Lead customers to a sale through
                recommended purchases and tailored offerings.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold">
                Qualify
              </h3>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Generate and qualify prospects automatically.
                Transfer high-intent leads to your sales reps.
              </p>

            </div>

          </div>

        </div>


        <div>


          <h2 className="text-5xl lg:text-6xl font-semibold leading-tight">

            <span className="bg-[#B7FFD2] px-3 rounded-2xl">
              Redefining
            </span>

            Conversations
            <br />

            and

            <span className="bg-[#B7FFD2] px-3 rounded-2xl ml-2">
              Enhancing
            </span>

            User
            <br />

            experience

          </h2>


          <div className="mt-12">

            <div className="bg-[#B7FFD2] rounded-[35px] p-8 relative min-h-[450px] overflow-hidden">


              <div className="absolute bottom-8 right-10 w-[80%] h-[300px] bg-[#1B1E2B] rounded-[20px] border-[8px] border-black shadow-2xl">


                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[120%] h-6 bg-gray-300 rounded-full"></div>

              </div>


              <div className="absolute bottom-4 left-6 w-[140px] h-[280px] bg-black rounded-[35px] border-[4px] border-gray-400 shadow-2xl z-20">

                <div className="w-20 h-2 bg-gray-700 rounded-full mx-auto mt-3"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}
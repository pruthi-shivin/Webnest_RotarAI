export default function Hero() {
  return (
    <section className="bg-[#f8f8f8] rounded-[40px] p-10 mt-6">

      <div className="grid lg:grid-cols-2 gap-10 items-center">


        <div>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-tight">

            Website Development
            <br />

            & Designing

            <span className="bg-[#B7FFD2] px-3 rounded-2xl ml-2">
              for
            </span>

            <br />

            <span className="bg-[#B7FFD2] px-3 rounded-2xl">
              Business Growth
            </span>

          </h1>

          <p className="text-gray-500 mt-8 max-w-md leading-relaxed">
            Embrace AI chatbot technology in a GPT-4-supported
            communication tool to help your customers,
            empower your team, and reduce your workload.
          </p>

        </div>


        <div className="bg-white border-[6px] border-[#F1DDAA] rounded-[35px] p-8">

          <h3 className="font-semibold text-lg mb-6">
            You can start with just one click.
          </h3>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-lg p-3 outline-none"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Phone No"
                className="border rounded-lg p-3 outline-none"
              />

            </div>

            <select className="w-full border rounded-lg p-3 outline-none">

              <option>Service</option>
              <option>Website Development</option>
              <option>UI/UX Design</option>
              <option>AI Chatbot</option>

            </select>

            <div className="flex justify-end">

                <button className="bg-[#00FF66] px-8 py-3 rounded-full font-medium hover:scale-105 transition">
                    Submit ↗
                </button>

            </div>

          </div>

        </div>

      </div>


        <div className="grid lg:grid-cols-2 gap-6 mt-8">


        <div className="relative bg-[#F1DDAA] rounded-[35px] p-8 overflow-hidden min-h-[180px]">


            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-20 bg-[#F1DDAA] rounded-l-[30px]"></div>

            <div className="relative z-10">

            <h3 className="text-2xl font-semibold max-w-sm">
                Guide: The Rotar AI Tutorial Hand Book
            </h3>

            <p className="text-gray-600 mt-4 max-w-sm">
                Everything you need to know
                about the first steps in chatbots.
            </p>

            </div>

        </div>


        <div className="grid grid-cols-2 gap-4">


            <div className="bg-[#B7FFD2] rounded-[30px] p-6 relative overflow-hidden">


            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[size:10px_10px]"></div>

            <div className="relative z-10">

                <h2 className="text-5xl font-semibold">
                + 500
                </h2>

                <p className="text-gray-700 mt-4">
                Big companies use Rotar AI
                for their services
                </p>

            </div>

            </div>


            <div className="bg-black rounded-[30px] p-6 text-white relative overflow-hidden">


            <div className="absolute inset-0 opacity-20">
                <div className="absolute w-40 h-40 border border-white rounded-full top-0 left-10"></div>
                <div className="absolute w-40 h-40 border border-white rounded-full top-0 left-20"></div>
                <div className="absolute w-40 h-40 border border-white rounded-full top-0 left-32"></div>
            </div>

            <div className="relative z-10">

                <div className="text-2xl mb-4">
                ✦ ✦ ✦
                </div>

                <h3 className="text-4xl leading-tight">
                AI-driven
                <br />
                customer service
                </h3>

            </div>

            </div>

        </div>

        </div>

    </section>
  )
}
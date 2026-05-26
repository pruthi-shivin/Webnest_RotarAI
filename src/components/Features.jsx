export default function Features() {
  return (
    <section className="bg-[#f8f8f8] rounded-[40px] p-10 mt-10">

      <div className="grid lg:grid-cols-2 gap-10">


        <div>

          <h2 className="text-5xl lg:text-6xl font-semibold leading-tight">

            Deliver a high-
            <br />

            quality

            <span className="bg-[#F1DDAA] px-3 rounded-2xl ml-2">
              customer
            </span>

            <br />

            <span className="bg-[#F1DDAA] px-3 rounded-2xl">
              experience
            </span>

          </h2>

          <p className="text-gray-500 mt-8 max-w-md leading-relaxed">
            Embrace AI chatbot technology in a GPT-4-supported
            communication tool to help your customers,
            empower your team, and reduce your workload.
          </p>


          <div className="bg-white rounded-[35px] mt-10 p-8 shadow-sm">


            <div className="relative h-[230px] rounded-[30px] overflow-hidden mb-8 bg-gray-50">


              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>


              <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
                  alt=""
                  className="w-12 h-12 object-contain"
                />

              </div>


              <div className="absolute top-24 left-40 w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                  alt=""
                  className="w-14 h-14 object-contain"
                />

              </div>


              <div className="absolute top-10 right-32 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
                  alt=""
                  className="w-10 h-10 object-contain"
                />

              </div>


              <div className="absolute bottom-6 right-10 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                  alt=""
                  className="w-10 h-10 object-contain"
                />

              </div>

            </div>


            <h3 className="text-2xl font-semibold mt-8">
              Automate your workflow with our integrations
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Connect Rotar AI with your customer service,
              sales, marketing, and recruitment tools using
              our user-friendly API, webhooks, or Zapier integration.
            </p>

          </div>

        </div>


        <div className="grid grid-cols-2 gap-5">


          <div className="bg-white rounded-[30px] p-6 min-h-[300px]">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-gray-300"></div>

              <div>
                <h4 className="font-semibold text-sm">
                  James Kokolemol
                </h4>
              </div>

            </div>

            <button className="bg-[#00FF66] px-4 py-2 rounded-lg text-sm mt-6">
              I've forgotten my password
            </button>

            <div className="mt-8">

              <h3 className="text-3xl font-semibold">
                Boost conversations 96% with AI
              </h3>

              <p className="text-gray-500 mt-4">
                Our AI-powered chatbots and automation tools
                are here to help.
              </p>

            </div>

          </div>

          <div className="bg-[#B7FFD2] rounded-[30px] p-6">

            <h3 className="text-2xl font-semibold">
              Always accessible with our live chat.
            </h3>

            <p className="text-gray-700 mt-4">
              Enhance Communication with
              Real-Time Live Chat.
            </p>

            <div className="bg-white rounded-2xl h-20 mt-8"></div>

            <div className="bg-white rounded-2xl h-20 mt-4"></div>

          </div>

          <div className="bg-black rounded-[30px] p-6 text-white">

            <h3 className="text-3xl font-semibold">
              Centralize Your Communication
            </h3>

            <p className="text-gray-300 mt-4">
              Easily respond to chats from all
              of your channels in one overview.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">

              <div className="w-12 h-12 rounded-full bg-[#25D366]"></div>

              <div className="w-12 h-12 rounded-full bg-[#4267B2]"></div>

              <div className="w-12 h-12 rounded-full bg-[#E1306C]"></div>

              <div className="w-12 h-12 rounded-full bg-[#1DA1F2]"></div>

            </div>

          </div>

          <div className="bg-[#00FF66] rounded-[30px] p-6 flex flex-col justify-between">

            <div className="w-40 h-40 rounded-full border-[12px] border-black border-t-white mx-auto mt-4 flex items-center justify-center">

              <div className="text-center">

                <h2 className="text-4xl font-bold">
                  12,5%
                </h2>

                <p className="text-sm font-medium">
                  CONVERSATION EXPLORATION
                </p>

              </div>

            </div>

            <div>

              <h3 className="text-3xl font-semibold mt-8">
                Gain valuable insights from your audience
              </h3>

              <p className="mt-4">
                Statistics provide valuable insights
                into how customers interact with Rotar AI.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
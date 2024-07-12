import React from 'react'
const RegisterPage = ()=> {
  return (
    <>
     <div className="font-suwannaphum">
        <div className="min-h-screen flex fle-col items-center justify-center p-6">
          <div className="grid lg:grid-cols-2 items-center gap-6 max-w-7xl max-lg:max-w-xl w-full">
            <form className="lg:max-w-md w-full">
              <h3 className="text-blue-600 text-3xl font-extrabold mb-12 text-center">
                បង្កើតគណនី
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="text-[20px]" htmlFor="text">ឈ្មោះ</label>
                  <input
                    name="name"
                    type="text"
                    className="bg-gray-100 w-full border-[#9F9F9F] rounded-[15px] text-gray-800 text-sm px-4 py-4 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                  />
                </div>

                <div>
                <label className="text-[20px]" htmlFor="text">អុីម៉ែល</label>
                  <input
                    name="email"
                    type="text"
                    className="bg-gray-100 w-full mt-3 border-[#9F9F9F] rounded-[15px] text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                  />
                </div>
                <div>
                  <label className="text-[20px]" htmlFor="text">លេខសម្ងាត់</label>
                  <input
                    name="password"
                    type="password"
                    className="bg-gray-100 w-full border-[#9F9F9F] rounded-[15px] mt-3 text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="បញ្ចូលលេខសម្ងាត់របស់អ្នក"
                  />
                </div>
                <div>
                <label className="text-[20px]" htmlFor="text">លេខសម្ងាត់</label>
                  <input
                    name="password"
                    type="password"
                    className="bg-gray-100 w-full border-[#9F9F9F] mt-3 rounded-[15px] text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="បញ្ចូលលេខសម្ងាត់របស់អ្នក"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 border-gray-300 rounded"
                  />
                  <label
                    for="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    ខ្ញុំទទួលយក{" "}
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600 font-semibold hover:underline ml-1"
                    >
                      ខ្ញុំទទួលយកលក្ខខណ្ឌ
                    </a>
                  </label>
                </div>
              </div>

              <div className="mt-12">
                <button
                  type="button"
                  className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  បង្កើតគណនី
                </button>
              </div>
              <p className="text-sm text-gray-800 mt-6">
                មានគណនីហើយមែនទេ?{" "}
                <a
                  href="/login"
                  className="text-blue-600 font-semibold hover:underline ml-1"
                >
                  ចូលគណនី
                </a>
              </p>
            </form>

            <video className="h-full max-lg:mt-12" autoPlay loop muted>
              <source
                src="src/assets/Register.gif"
                className="w-full h-full object-cover"
                alt="Dining Experience"
              />
            </video>
          </div>
        </div>
      </div>
  </>
  )
}
export default RegisterPage;

"use client"
import { useEffect, useState } from 'react'
import "../../globals.css"

export default function Module() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768); // You can adjust this threshold as needed
    };

    checkIfMobile()

    // Listen for window resize events to update the device type
    window.addEventListener('resize', checkIfMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    }
  }, [])

  return (
    <div className="px-10 mt-40 text-center text-white bg-gray-800 sm:text-2xl">
      <h1 className="my-5 text-3xl">🗺️ Your key is back at itch.io</h1>
      <h4 className="my-5">itch.io requires that download button, which does nothing. This page is just to get you back on track.</h4>
      <h4 className="my-5">You'll want to go back to whatever page opened this and click the "Get download key" button instead.</h4>
      <div className="flex justify-center">
        {isMobile ? (
          <img src="/external/module_mobile.webp" className="mx-auto w-100" alt="Mobile" />
        ) : (
          <img src="/external/module_desktop.webp" className="w-100" alt="Desktop" />
        )}
      </div>
      <h4 className="my-5">If you made an account with Itch.io your purchases can be viewed <a href="https://itch.io/my-purchases">here</a></h4>

      <h1 className="my-5 text-3xl">🔐 Where to use your key</h1>

      <h4>If you have your key you can now activate it at <a href="https://foundryvtt.com/article/premium-content">foundry.com</a> by going to your account's <a href="https://foundryvtt.com/me/purchases">Purchased Content</a> section. Entering your key from itch.io and activating it. This will permanently link access to the module to your Foundry account. You can now install the module at the setup screen of your Foundry instance.</h4>

      <div className="flex justify-center">
        <img className="my-3 w-100" src="https://foundryvtt.s3.us-west-2.amazonaws.com/website-media-dev/user_671/screen/premium-content-activation-2021-02-25.webp" />
      </div>
      <h4 className="mb-3 text-center text-gray-400">Enjoy your new module ❤️</h4>

      <h4 style={{ marginBottom: "10em" }}>If you run into any issues you can <a href="mailto:contact@codabool.com">email me</a> or message me on Discord at <span className="text-blue-400">codabool</span></h4>
    </div>
  )
}

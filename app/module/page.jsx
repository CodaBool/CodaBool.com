'use client'
import { useEffect, useState } from 'react'

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
    };
  }, []);

  return (
    <div className="mx-4 m-3 md:container">
      <h1 style={{ fontSize: "2.5rem", margin: "2rem 0" }}>🗺️ Your key is back at itch.io</h1>
      <h4 style={{ margin: "2rem 0", fontSize: "1.4em" }}>
        itch.io doesn't allow me to customize the way I distribute keys. This page is just to get you back on track.
      </h4>
      <h4 style={{ margin: "2rem 0", fontSize: "1.4em" }}>
        You'll want to go back to whatever page opened this and click the "Get download key" button instead.
      </h4>
      {isMobile ? (
        <img src="/module_mobile.webp" style={{ width: "100%" }} alt="Mobile" />
      ) : (
        <img src="/module_desktop.webp" style={{ width: "100%" }} alt="Desktop" />
      )}
      <h4 style={{ margin: "2rem 0", fontSize: "1.4em" }}>
        If you're not sure where to go to even find that button. You can find it by going to your{" "}
        <a href="https://itch.io/my-purchases">purchases</a> page at itch.io
      </h4>

      <h1 style={{ fontSize: "2.5rem", margin: "2rem 0" }}>🔐 Where to use your key</h1>

      <h4>
        If you have your key you can now activate it at{" "}
        <a href="https://foundryvtt.com/article/premium-content">foundry.com</a> by going to your account's "Purchased
        Content" section. Entering your key from itch.io and activating it. This will permanently link access to the
        module to your Foundry account. You can now install the module at the setup screen of your Foundry instance.
      </h4>

      <img
        style={{ width: "100%", margin: "1.5rem 0" }}
        src="https://foundryvtt.s3.us-west-2.amazonaws.com/website-media-dev/user_671/screen/premium-content-activation-2021-02-25.webp"
      />

      <h4 style={{ marginBottom: "1.5rem", textAlign: "center", color: "grey", fontSize: "1.4em" }}>Enjoy your new module ❤️</h4>

      <h4 style={{ marginBottom: "10em", fontSize: "1.4em" }}>
        If you run into any issues you can <a href="mailto:codabool@pm.me">email me</a> or message me on Discord at{" "}
        <span style={{ color: "darkblue" }}>@codabool</span>
      </h4>
    </div>
  )
}

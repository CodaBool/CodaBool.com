import { Fade } from "react-awesome-reveal"
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
    <>
      <h1 className="display-1 my-5">🗺️ Your key is back at itch.io</h1>
      <h4 className="my-5">itch.io doesn't allow me to customize the way I distribute keys. This page is just to get you back on track. </h4>
      <h4 className="my-5">You'll want to go back to whatever page opened this and click the "Get download key" button instead.</h4>
      <Fade triggerOnce>
        {isMobile ? (
          <img src="/assets/images/module_mobile.png" className="w-100" alt="Mobile" />
        ) : (
          <img src="/assets/images/module_desktop.png" className="w-100" alt="Desktop" />
        )}
      </Fade>
      <h4 className="my-5">If you're not sure where to go to even find that button. You can find it by going to your <a href="https://itch.io/my-purchases">purchases</a> page at itch.io</h4>
    </>
  )
}
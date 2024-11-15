import {useRef} from "react";

function CookieNotice() {
  const bannerRef = useRef(null);

  const handleConsent = () => {
    if(bannerRef.current)
      bannerRef.current.style.display = 'none';
    localStorage.setItem('cookieConsent', 'true');
  }

  const consent = localStorage.getItem('cookieConsent') === 'true';

  if(consent)
    return null;

  return <div className="flex flex-row justify-between items-center p-2 fixed min-w-full bottom-0 bg-skin-button-accent text-skin-inverted text-lg" ref={bannerRef}>
          <p>
            We use cookies to improve your experience on our site. By using our site, you agree to our use of cookies.
          </p>
          <div className="text-right"><button onClick={handleConsent} className="bg-gray-600 hover:bg-gray-700 py-1 px-2 border uppercase text-sm border-blue-900 shadow-lg">Accept</button></div>
        </div>;
}

export default CookieNotice;

import { useState } from "react";

export const Hero = () => {
  let [url, setUrl] = useState("");
  const [showvideo, setShowvideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const fetchVideo = async () => {
    if (!url.includes("instagram.com/reel")) {
      setError("Invalid Instagram Reel URL");
      return;
    }

    setLoading(true);
    setButtonDisabled(true);
    setError("");

    try {
      const response = await fetch(
        "https://reelify-backend-xjn1.onrender.com/get-reel",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        }
      );

      const data = await response.json();

      if (data?.video_url) {
        setVideoUrl(data.video_url);
        setShowvideo(true);
      } else {
        setError("No video found or API error");
        setShowvideo(false);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
      setShowvideo(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10">
      {/* background video */}
      {/* <video
        src="/img/bg.mp4"
        className="w-full h-full object-cover absolute top-0 left-0"
        type="video/mp4"
        loop
        autoPlay
        muted
      >
        Your Browser does not support video tags
      </video> */}

      <div className="relative flex flex-col items-center justify-center px-10 lg:px-70 z-10 h-fit">
        <p className="text-white text-3xl font-semibold tracking-tight text-center mb-10 md:text-4xl">
          INSTAGRAM REELS DOWNLOAD
        </p>
        <div className="flex w-full mb-2">
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Paste your link here"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            className="bg-white outline-none w-full md:py-3 px-4 py-2 rounded-l-sm"
          />
          <button
            className="bg-[var(--red)] px-3 text-white py-2 rounded-r-sm active:bg-transparent"
            onClick={async (e) => {
              url = await navigator.clipboard.readText();
              setUrl(url);
            }}
          >
            Paste
          </button>
        </div>
        <button
          disabled={buttonDisabled}
          className={`border-2 font-semibold text-white w-full md:w-[50%] px-4 py-2 md:py-3 rounded cursor-pointer transition-all duration-200 ${
            buttonDisabled
              ? "bg-gray-500 border-gray-500 cursor-not-allowed"
              : "bg-transparent border-[var(--red)] active:bg-[var(--red)]"
          }`}
          onClick={fetchVideo}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Loading...
            </span>
          ) : (
            "Get Video"
          )}
        </button>
      </div>

      {error && (
        <p className="relative text-red-500 text-sm mt-1 mb-4 text-center">
          {error}
        </p>
      )}

      <div
        className={`relative text-white mt-10 h-fit ${
          showvideo ? "flex" : "hidden"
        } flex-col items-center gap-2`}
      >
        <h1 className="font-semibold text-2xl">Search Result</h1>
        <video
          src={`${videoUrl}`}
          className="w-[50vw] md:w-[30vw] rounded-2xl object-cover"
          controls
          muted
        >
          Video tag is not supported by your browser
        </video>
        <a
          href={`${videoUrl}`}
          download
          target="_blank"
          className="px-3 py-2 bg-transparent border-2 border-[var(--red)] rounded active:bg-[var(--red)] "
        >
          Download
        </a>
      </div>
    </section>
  );
};

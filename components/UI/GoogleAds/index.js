import { useEffect } from "react";

export function GoogleAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div
      aria-hidden={true}
      style={{
        overflow: "hidden",
        minWidth: "300px",
        minHeight: "250px",
        textAlign: "center",
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
        data-ad-slot="1033170016"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

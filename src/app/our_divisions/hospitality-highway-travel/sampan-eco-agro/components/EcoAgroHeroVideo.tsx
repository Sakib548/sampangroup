"use client";

const VIDEO_ID = "Yp78pXRGWg8";

export default function EcoAgroHeroVideo() {
  return <iframe className="pointer-events-none absolute inset-0 h-full w-full scale-[1.18] opacity-70" src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&playsinline=1&rel=0&start=0&end=10&cc_load_policy=0&iv_load_policy=3&disablekb=1&fs=0&modestbranding=1`} title="Sampan Eco and Agro landscape video" allow="autoplay" />;
}

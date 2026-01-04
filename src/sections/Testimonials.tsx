'use client';

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/Marquee";
import Tag from "@/components/Tag";
import Image from "next/image";

const reviews = [
  {
    name: "Michael R.",
    username: "@proptrader_mike",
    body: "This tool saved my FTMO challenge! The real-time alerts helped me avoid breaking the daily loss limit. Worth every penny.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Sarah T.",
    username: "@sarah_trades",
    body: "Finally passed my prop firm evaluation on the first try. The max drawdown tracker is a game-changer!",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "David K.",
    username: "@daytrader_dk",
    body: "I was skeptical at first, but this assistant actually works. No more surprise rule violations. Highly recommend!",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Emma L.",
    username: "@emmatradesforex",
    body: "Best investment for any serious prop trader. The instant alerts give me peace of mind while trading.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "James W.",
    username: "@jameswins",
    body: "Passed my MyForexFunds challenge thanks to this tool. The trading days counter kept me on track perfectly.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Lisa M.",
    username: "@lisa_forex",
    body: "This is exactly what prop traders need. Clean interface, accurate tracking, and reliable alerts. 5 stars!",
    img: "https://avatar.vercel.sh/lisa",
  },
  {
    name: "Alex B.",
    username: "@alextrading",
    body: "The compliance monitoring is spot-on. I can focus on trading strategy instead of worrying about breaking rules.",
    img: "https://avatar.vercel.sh/alex",
  },
  {
    name: "Rachel P.",
    username: "@rachelpips",
    body: "Used this for my FTMO and The5ers challenges. Passed both! The real-time tracking is incredibly accurate.",
    img: "https://avatar.vercel.sh/rachel",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:bg-white/15",
        "transition-all duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image 
          className="rounded-full border-2 border-lime-400/50" 
          width={40} 
          height={40} 
          alt={name} 
          src={img} 
        />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-white/50">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-white/70 leading-relaxed">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <Tag>Testimonials</Tag>
          </div>
          <h2 className="text-6xl font-medium mt-6 max-md:text-4xl">
            Trusted by <span className="text-lime-400">successful</span> traders
          </h2>
          <p className="text-white/50 mt-4 text-lg max-w-2xl mx-auto">
            Join hundreds of prop traders who passed their challenges with confidence
          </p>
        </div>
        
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>
      </div>
    </section>
  );
}

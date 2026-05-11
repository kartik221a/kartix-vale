"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";

interface BookCardProps {
  title: string;
  coverUrl: string;
  genre: string;
  price?: string;
  amazonUrl?: string;
  comingSoon?: boolean;
  featured?: boolean;
  description?: string;
}

export function BookCard({
  title,
  coverUrl,
  genre,
  price,
  amazonUrl,
  comingSoon = false,
  featured = false,
  description,
}: BookCardProps) {
  if (featured) {
    return (
      <article className="card-dark rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8">
          {/* Book Cover */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative w-48 md:w-64 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl shadow-black/50 group">
              <Image
                src={coverUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 192px, 256px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Book Details */}
          <div className="flex-1 flex flex-col justify-center">
            <Badge className="bg-blood/20 text-blood-light border-blood/30 w-fit mb-3 text-xs tracking-wider uppercase">
              {genre}
            </Badge>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-3 leading-tight">
              {title}
            </h3>
            {description && (
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 line-clamp-4">
                {description}
              </p>
            )}
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-4 w-4 text-gold-dim/40"
                />
              ))}
              <span className="text-xs text-muted-foreground ml-2">
                Be the first to review
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {comingSoon ? (
                <Button
                  disabled
                  className="bg-muted text-muted-foreground cursor-not-allowed"
                >
                  Coming Soon
                </Button>
              ) : (
                <a
                  href={amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="buy-amazon-featured"
                >
                  <Button className="bg-blood-light hover:bg-blood text-white font-semibold px-8 h-12 text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,20,60,0.4)] hover:scale-105">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Now — {price}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Standard card - horizontal on mobile, vertical on desktop
  return (
    <article className="card-dark rounded-xl overflow-hidden group transition-all duration-300 hover:border-blood/30 hover:shadow-[0_0_30px_rgba(139,0,0,0.15)] flex flex-row sm:flex-col">
      {/* Book Cover */}
      <div className="relative w-24 sm:w-full sm:aspect-[2/3] aspect-auto h-auto sm:h-auto flex-shrink-0 overflow-hidden">
        <Image
          src={coverUrl}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${comingSoon ? "grayscale opacity-60" : ""}`}
          sizes="(max-width: 640px) 96px, (max-width: 1024px) 33vw, 25vw"
        />
        {comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="font-serif text-xs sm:text-xl text-gold tracking-wider uppercase">
              Coming Soon
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-blood/80 text-white border-none text-[10px] sm:text-xs tracking-wider uppercase">
          {genre}
        </Badge>
      </div>

      {/* Card Content */}
      <div className="p-3 sm:p-4 flex flex-col justify-center flex-1 min-w-0">
        <h3 className="font-serif text-sm sm:text-base md:text-lg text-foreground mb-2 leading-tight line-clamp-2">
          {title}
        </h3>
        {comingSoon ? (
          <Button
            disabled
            className="w-full bg-muted text-muted-foreground cursor-not-allowed text-xs sm:text-sm"
          >
            Coming Soon
          </Button>
        ) : (
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track={`buy-amazon-${title.slice(0, 20)}`}
            className="block"
          >
            <Button className="w-full bg-blood-light hover:bg-blood text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,20,60,0.3)] text-xs sm:text-sm">
              <ExternalLink className="h-3 w-3 mr-1.5" />
              Buy — {price}
            </Button>
          </a>
        )}
      </div>
    </article>
  );
}

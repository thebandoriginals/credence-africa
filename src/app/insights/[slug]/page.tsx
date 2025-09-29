
"use client";

import { notFound } from "next/navigation";
import { getInsight, type Insight } from "@/lib/insights";
import Image from "next/image";
import { useEffect, useState } from "react";

interface InsightPageProps {
  params: {
    slug: string;
  };
}

export default function InsightPage({ params }: InsightPageProps) {
  const [insight, setInsight] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInsight() {
      const fetchedInsight = await getInsight(params.slug);
      if (!fetchedInsight) {
        notFound();
      } else {
        setInsight(fetchedInsight);
      }
      setLoading(false);
    }
    fetchInsight();
  }, [params.slug]);


  if (loading) {
    return <div className="py-12 lg:py-16 text-center">Loading insight...</div>;
  }

  if (!insight) {
    return notFound();
  }

  return (
    <article className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <p className="text-sm text-muted-foreground">{insight.date} | By {insight.author}</p>
          <h1 className="text-4xl font-bold mt-2">{insight.title}</h1>
        </header>
        
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image 
                src={insight.image}
                alt={insight.title}
                fill
                className="object-cover"
                data-ai-hint="article header"
            />
        </div>

        <div
          className="prose lg:prose-xl max-w-none mx-auto"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />
      </div>
    </article>
  );
}



import { notFound } from "next/navigation";
import { getInsight, getInsights, type Insight } from "@/lib/insights";
import Image from "next/image";

interface InsightPageProps {
  params: {
    slug: string;
  };
}

// This function generates the static pages at build time
export async function generateStaticParams() {
    const insights = await getInsights();
    return insights.map((insight) => ({
      slug: insight.slug,
    }));
}

export async function generateMetadata({ params }: InsightPageProps) {
    const insight = await getInsight(params.slug);
    if (!insight) {
      return {
        title: "Insight Not Found",
      };
    }
    return {
      title: insight.title,
      description: insight.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    };
  }

export default async function InsightPage({ params }: InsightPageProps) {
  const insight = await getInsight(params.slug);

  if (!insight) {
    notFound();
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

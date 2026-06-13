import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import { GuideView } from "@/components/GuideView";

/** Pre-render one static page per service for the `output: export` build. */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <GuideView service={service} />;
}

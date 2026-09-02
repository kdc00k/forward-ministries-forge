import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";


export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Forward Church Ministries" },
      { name: "description", content: "Upcoming events at Forward Church — register, invite a friend, and join in." },
      { property: "og:title", content: "Forward Church Events" },
      { property: "og:description", content: "What's happening at Forward in Mobile, AL." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <PageHero
      eyebrow="Events"
      title={<>Come <span style={{ color: "var(--brand-accent)" }}>experience it</span> with us.</>}
      description="Conferences, camps, community days, and more — there's always something next at Forward."
    />
  );
}

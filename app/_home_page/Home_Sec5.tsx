import WebCollab from "@/components/WebCollab";

export default function Home_Sec5() {
  return (
    <section className="section">
      <div className="container space-y-2">
        <h2 className="text-primary">Check out my latest web work</h2>
        <p>
          I&apos;ve worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </p>

        <WebCollab />
      </div>
    </section>
  );
}

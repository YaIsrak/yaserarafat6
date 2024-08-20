export default function page() {
  return (
    <section className="h-screen">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-3">
        <div className="group container flex h-full items-center bg-secondary/0 transition-all hover:bg-secondary/40">
          <h4 className="transition-all group-hover:text-primary">
            Connect with me
          </h4>
        </div>
        <div className="group container flex h-full items-center bg-secondary/0 transition-all hover:bg-secondary/40">
          <h4>Ask for a callback</h4>
        </div>
        <div className="group container flex h-full items-center bg-secondary/0 transition-all hover:bg-secondary/40">
          <h4>Let&apos; have a chat</h4>
        </div>
      </div>
    </section>
  );
}

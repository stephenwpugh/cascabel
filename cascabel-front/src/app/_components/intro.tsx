import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex flex-row text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8"><h1>Cascab</h1> <h1 style={{"color": "red"}}>e</h1> <h1>l.</h1> </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Donde el enfoque y la intención importan.
      </h4>
    </section>
  );
}

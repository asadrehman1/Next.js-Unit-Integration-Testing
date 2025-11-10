import { Home } from "@/components/Home";
import { NotesApp } from "@/components/NotesForm";

export default function Landing() {
  return (
    <div className="size-full flex flex-col gap-8 justify-between items-center">
      <Home />
      <NotesApp />
    </div>
  );
}

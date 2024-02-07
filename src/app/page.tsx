import { FormContainer } from "./components/FormContainer/FormContainer";
import { RecentBlogContainer } from "./components/RecentBlogContainer/RecentBlogContainer";

export default function Home() {
  return (
    <div className="min-h-[60vh] flex flex-col sm:flex-row space-x-6 space-y-2 sm:space-y-0 justify-center px-5 sm:px-40 py-16">
      <FormContainer />
      <RecentBlogContainer />
    </div>
  );
}

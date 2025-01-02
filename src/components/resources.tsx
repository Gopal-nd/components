import { Check } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

export function Resources() {
  const features = [
    "Courses",
    "Blogs",
    "Youtube Channels",
    "Newsletters",
    "Communities",
    "Website Builders",
    "Apps",
    "Widgets",
    "And many more...",
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 bg-zinc-50">
      <Badge className="mb-8 mx-auto block w-fit bg-white text-black hover:bg-zinc-100">
        Notion certified
      </Badge>
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          150+ resources and tools to
          <br />
          master the world of Notion
        </h2>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          Discover the powerful world of Notion and boost your Notion skills
          with this free directory. Find everything you need to become a Notion
          master.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-semibold">4.8</span>
          <span className="text-zinc-600">From 733+ reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="rounded-full bg-[#006D3F] p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  )
}


import { Card, CardContent } from "@/components/ui/card"
import { Globe, MessageSquare, XCircle } from 'lucide-react'

export function Features() {
  const features = [
    {
      title: "Unlimited talk",
      subtitle: "and text globally",
      icon: MessageSquare,
    },
    {
      title: "Unlimited data",
      subtitle: "in 150+ Countries",
      icon: Globe,
    },
    {
      title: "Cancel",
      subtitle: "anytime",
      icon: XCircle,
    },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 bg-zinc-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <Card key={i} className="text-center border-none shadow-none bg-transparent">
            <CardContent className="pt-6">
              <div className="mx-auto rounded-full bg-white p-4 w-16 h-16 flex items-center justify-center shadow-sm mb-6">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-1">
                {feature.title}
              </h3>
              <p className="text-2xl font-semibold mb-4">
                {feature.subtitle}
              </p>
              {i === 1 && (
                <p className="text-xs text-zinc-600">*Subject to our Play by the Rules policy</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


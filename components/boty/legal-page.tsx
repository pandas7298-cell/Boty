import type { Metadata } from "next"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

type LegalPageProps = {
  title: string
  description: string
  children: React.ReactNode
}

export function legalPageMetadata(title: string, description: string): Metadata {
  return { title: `${title}｜Tabajoy`, description }
}

export function LegalPage({ title, description, children }: LegalPageProps) {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-36 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-10">
            <span className="text-sm tracking-[0.2em] text-primary mb-4 block">Tabajoy</span>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-5 text-balance">{title}</h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">{description}</p>
          </header>
          <div className="bg-card rounded-3xl p-6 md:p-10 boty-shadow divide-y divide-border/70 [&>section]:py-7 [&>section:first-child]:pt-0 [&>section:last-child]:pb-0 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:text-foreground [&_h2]:mb-4 [&_p]:text-sm [&_p]:md:text-base [&_p]:text-muted-foreground [&_p]:leading-8 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-sm [&_li]:md:text-base [&_li]:text-muted-foreground [&_li]:leading-7 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a]:break-all">
            {children}
          </div>
          <p className="mt-6 text-xs text-muted-foreground text-center">公開前に内容をご確認ください。未確定の情報は「[要記入]」と表示しています。</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/SrwlUN6Umho
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Arimo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import TableComponent from "./table"

export function Class() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
        <div className="container flex items-center justify-between py-4 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CodeIcon className="h-6 w-6" />
            <span className="font-bold">Desenvolvimento Front-End</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full md:w-auto md:border-l">
              <nav className="flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:px-0">
                <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                  Introdução
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                  HTML e CSS
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                  Navegador
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                  Arquitetura Front-End
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                  Bibliotecas e Frameworks
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                  Melhores Práticas de Código Front-End
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                  Controle de Versão
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                  TypeScript
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                  Conclusão
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section id="introduction" className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Introdução ao Desenvolvimento Front-End
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Neste curso, você aprenderá os fundamentos do desenvolvimento web front-end, incluindo HTML, CSS,
                JavaScript e frameworks e bibliotecas front-end modernas. Abordaremos as habilidades essenciais e as
                melhores práticas para construir aplicações web responsivas, acessíveis e de alto desempenho.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Começar
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="html-and-css" className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">HTML e CSS</h2>
              <p className="text-muted-foreground md:text-xl">
                Aprenda os fundamentos do HTML e CSS, os blocos de construção da web. Entenda a marcação semântica,
                acessibilidade e princípios de design responsivo para criar páginas web bem estruturadas e visualmente
                atraentes.
              </p>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">O que é HTML?</h3>
                  <p className="text-muted-foreground">
                  HTML (HyperText Markup Language) é a linguagem de marcação padrão usada para criar páginas web. Ela define a estrutura e o layout da página usando elementos e tags. Cada tag tem um significado específico e estrutura o conteúdo de uma maneira particular.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">O que é CSS?</h3>
                  <p className="text-muted-foreground">
                  CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de documentos HTML. Ele permite que os desenvolvedores separem o conteúdo da apresentação, facilitando a manutenção e a reutilização dos estilos.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Importância do HTML</h3>
                  <p className="text-muted-foreground">
                  Fornece a estrutura básica da página, define o layout e organiza o conteúdo de maneira semântica, o que é crucial para a acessibilidade e SEO.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Importância do CSS</h3>
                  <p className="text-muted-foreground">
                  Permite criar um design visual atraente, aplicar estilos consistentes em toda a aplicação e adaptar o layout para diferentes dispositivos e tamanhos de tela.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Semântica</h3>
                  <p className="text-muted-foreground">
                  Melhora a acessibilidade (uso de leitores de tela), SEO (melhor interpretação dos motores de busca), e a clareza do código (facilita a manutenção).
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Acessibilidade</h3>
                  <p className="text-muted-foreground">
                  Acessibilidade na web refere-se à criação de interfaces que podem ser usadas por todos, incluindo pessoas com deficiências visuais, auditivas, motoras e cognitivas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="browser" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Navegador</h2>
              <p className="text-muted-foreground md:text-xl">
                Explore o funcionamento interno dos navegadores web e como eles renderizam páginas web. Entenda o Modelo
                de Objeto de Documento (DOM) e como manipulá-lo usando JavaScript.
              </p>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Bundle</h3>
                  <p className="text-muted-foreground">
                  Bundling é o processo de combinar múltiplos arquivos de código (HTML, CSS, JavaScript) em um único arquivo ou em poucos arquivos. Isso é feito para reduzir o número de requisições HTTP que o navegador precisa fazer, melhorando a performance do carregamento da página.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">DOM</h3>
                  <p className="text-muted-foreground">
                  A Document Object Model (DOM) é uma interface de programação que os navegadores utilizam para representar a estrutura de um documento HTML ou XML. Ela transforma o documento em uma árvore de objetos acessíveis, onde cada nó da árvore corresponde a uma parte do documento, como elementos, atributos e textos.
                  </p>
                  <p className="text-muted-foreground">
                  <strong>Construção da Árvore DOM:</strong> Quando o navegador carrega uma página, ele analisa o HTML ou XML e cria uma árvore DOM. Cada elemento HTML é transformado em um nó na árvore.<br/>
                  <strong>Interatividade:</strong> A DOM permite que linguagens de script, como JavaScript, acessem e manipulem a estrutura e o conteúdo do documento de forma dinâmica.<br/>
                  <strong>Renderização:</strong> Alterações na DOM são imediatamente refletidas na página web exibida, permitindo a atualização do conteúdo sem necessidade de recarregar a página.<br/>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Renderização</h3>
                  <p className="text-muted-foreground">
                  <strong>Renderização no Cliente (Client-Side Rendering - CSR)</strong>:<br/>
                  <strong>Definição:</strong> O navegador recebe um HTML básico e usa JavaScript para preencher o conteúdo. A renderização acontece no lado do cliente.<br/>
                  <strong>Vantagens:</strong> Maior interatividade e experiência do usuário após o carregamento inicial.<br/>
                  <strong>Desvantagens:</strong> Tempo de carregamento inicial mais lento, potencial impacto negativo no SEO.<br/>
                  </p>

                  <p className="text-muted-foreground">
                  <strong>Renderização no Servidor (Server-Side Rendering - SSR)</strong>:<br/>
                  <strong>Definição:</strong> O servidor processa a página e envia o HTML completo ao cliente. A renderização acontece no lado do servidor.<br/>
                  <strong>Vantagens:</strong> Melhor SEO, tempo de carregamento inicial mais rápido.<br/>
                  <strong>Desvantagens:</strong> Maior carga no servidor, potencialmente mais complexa de implementar.<br/>
                  </p>

                  <p className="text-muted-foreground">
                  <strong>SPA (Single Page Application)</strong>:<br/>
                  <strong>Definição:</strong> Uma aplicação que carrega uma única página HTML e atualiza o conteúdo dinamicamente sem recarregar a página inteira.<br/>
                  <strong>Vantagens:</strong> Melhor experiência de usuário, interações mais rápidas e fluidas, menor tempo de navegação entre páginas.<br/>
                  <strong>Desvantagens:</strong> Problemas de SEO, tempo de carregamento inicial mais lento, maior complexidade de implementação.<br/>
                  </p>

                  <p className="text-muted-foreground">
                  <strong>MPA (Multi Page Application)</strong>:<br/>
                  <strong>Definição:</strong> Uma aplicação que consiste em múltiplas páginas HTML, cada uma carregada separadamente do servidor. Cada interação que requer uma nova página resulta em uma requisição ao servidor.<br/>
                  <strong>Vantagens:</strong> Melhor SEO, menor tempo de carregamento inicial por página, segurança aprimorada.<br/>
                  <strong>Desvantagens:</strong>Navegação mais lenta devido à recarga completa de páginas, experiência de usuário menos fluida.<br/>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">APIs do Navegador</h3>
                  <p className="text-muted-foreground">
                    Explore as várias APIs fornecidas pelos navegadores web, como a API Fetch, a API de Armazenamento
                    Web e a API Web Audio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="libraries-and-frameworks" className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Bibliotecas e Frameworks</h2>
              <p className="text-muted-foreground md:text-xl">
                Mergulhe no mundo das bibliotecas e frameworks front-end modernos, como React, Vue.js e Angular, e
                aprenda a construir aplicações web complexas e interativas.
              </p>
              <TableComponent />
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">React</h3>
                  <p className="text-muted-foreground">
                  <strong>Definição:</strong> Biblioteca JavaScript para construção de interfaces de usuário, mantida pelo Facebook.<br/>
                  <strong>Características:</strong> Componentização, virtual DOM, unidirectional data flow, JSX (JavaScript XML).<br/>
                 <strong>Uso:</strong> Ideal para construção de SPA e interfaces de usuário complexas.<br/>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Vue.js</h3>
                  <p className="text-muted-foreground">
                  <strong>Definição:</strong> Framework progressivo para construção de interfaces de usuário.<br/>
                  <strong>Características:</strong> Fácil de integrar em projetos existentes, reatividade, componentização, suporte para templates.<br/>
                 <strong>Uso:</strong> Bom para projetos de pequeno a médio porte e para iniciantes devido à sua simplicidade.<br/>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Angular</h3>
                  <p className="text-muted-foreground">
                  <strong>Definição:</strong> Framework completo para desenvolvimento de aplicações web, mantido pelo Google.<br/>
                  <strong>Características:</strong> Two-way data binding, dependency injection, arquitetura baseada em componentes, TypeScript.<br/>
                  <strong>Uso:</strong> Adequado para grandes aplicações corporativas com necessidades complexas.<br/>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Next JS</h3>
                  <p className="text-muted-foreground">
                  <strong>Definição:</strong> Framework para React que oferece SSR e geração de páginas estáticas.<br/>
                  <strong>Características:</strong> Suporte para SSR (Server-Side Rendering) e SSG (Static Site Generation), fácil roteamento, otimização automática.<br/>
                  <strong>Uso:</strong> Ideal para projetos que requerem SEO e performance de carregamento inicial.<br/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="front-end-architecture" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Arquitetura Front-End</h2>
              <p className="text-muted-foreground md:text-xl">
                Explore os princípios da arquitetura front-end, incluindo design modular, separação de responsabilidades
                e práticas de desenvolvimento escaláveis.
              </p>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Design Modular</h3>
                  <p className="text-muted-foreground">
                    Aprenda a dividir sua aplicação em componentes reutilizáveis e composíveis para melhorar a
                    manutenibilidade e escalabilidade.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Separação de Responsabilidades</h3>
                  <p className="text-muted-foreground">
                    Entenda a importância de separar as camadas de apresentação, lógica e dados em sua aplicação para
                    criar um código-fonte limpo e organizado.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Desenvolvimento Escalável</h3>
                  <p className="text-muted-foreground">
                    Explore as melhores práticas para construir aplicações front-end escaláveis, incluindo organização
                    do código, testes e estratégias de implantação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="front-end-code-best-practices" className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Melhores Práticas de Código Front-End</h2>
              <p className="text-muted-foreground md:text-xl">
                Aprenda as melhores práticas para escrever código front-end limpo, manutenível e eficiente, incluindo
                organização do código, testes e implantação.
              </p>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Organização do Código</h3>
                  <p className="text-muted-foreground">
                    Explore estratégias para organizar seu código-fonte front-end, como a metodologia Atomic Design e a
                    abordagem de Desenvolvimento Orientado por Recursos.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Testes</h3>
                  <p className="text-muted-foreground">
                    Aprenda a escrever testes unitários, de integração e de ponta a ponta para garantir a confiabilidade
                    e a qualidade de sua aplicação front-end.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Implantação</h3>
                  <p className="text-muted-foreground">
                    Entenda as melhores práticas para implantar sua aplicação front-end, incluindo pipelines de
                    integração contínua e implantação contínua (CI/CD).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

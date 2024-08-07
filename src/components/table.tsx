/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P0K8xtMwczl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function TableComponent() {
  return (
    <div className="py-6 md:py-12 lg:py-16">
      <div className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <h2 className="text-xl font-bold tracking-tighter">Diferenças entre Frameworks e Bibliotecas</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Definição</TableHead>
              <TableHead>Flexibilidade</TableHead>
              <TableHead>Controle</TableHead>
              <TableHead>Configuração</TableHead>
              <TableHead>Uso</TableHead>
              <TableHead>Exemplo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Framework</TableCell>
              <TableCell>
                Plataforma completa com uma estrutura definida.
              </TableCell>
              <TableCell>
                Estrutura mais rígida; oferece soluções integradas e convenções.
              </TableCell>
              <TableCell>
                Controle limitado; segue convenções e padrões do framework.
              </TableCell>
              <TableCell>
                Configuração mínima; muitas funcionalidades vêm prontas.
              </TableCell>
              <TableCell>
                Funcionalidades integradas como SSR, SSG, roteamento automático.
              </TableCell>
              <TableCell>
                Next
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">Biblioteca</TableCell>
              <TableCell>
                Conjunto de ferramentas para resolver problemas específicos.
              </TableCell>
              <TableCell>
                Alta flexibilidade; o desenvolvedor decide como integrar outras ferramentas.
              </TableCell>
              <TableCell>
                Controle total sobre a arquitetura da aplicação.
              </TableCell>
              <TableCell>
                Necessita configuração manual de roteamento, SSR, etc.
              </TableCell>
              <TableCell>
                Blocos de construção básicos (componentes, estado, props).
              </TableCell>
              <TableCell>
                React
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
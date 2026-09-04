import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { markdownComponents } from '@/lib/rewrite-links'

export function FactoryMarkdown({ body }: { body: string }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents()}>
        {body}
      </ReactMarkdown>
    </div>
  )
}

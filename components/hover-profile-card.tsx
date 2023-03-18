import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function ProfileHoverCard({ title }: { title: string })
   {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger className='h1 text-center text-3xl font-bold text-neutral-700 dark:text-neutral-50'>{title}</HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Khushal-ag</h4>
            <p className="text-sm">
              This is my github username HEHE.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  )
}

import { useGreeting } from "@hooks/useGreeting";

export function Greeting (): JSX.Element {
  const { greeting } = useGreeting()
  
  return (
    <h3 className="text-3xl pt-10 pb-6 font-bold">{greeting}</h3>
  )
}

export function Greeting (): JSX.Element {
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  let greeting = ''

  if (currentHour < 12) greeting = 'Good morning'
  else if (currentHour < 18) greeting = 'Good afternoon'
  else greeting = 'Good evening'
  
  return (
    <h3 className="text-3xl pt-10 pb-6 font-bold">{greeting}</h3>
  )
}

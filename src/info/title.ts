export const info: { title: string; date?: string }[] = [
  {
    title: 'Down',
  },
  {
    title: 'Rotate',
  },
  {
    title: 'Next',
  },
  {
    title: 'Next',
  },
  {
    title: 'Next',
  },
]

function* genDay() {
  const now = new Date(2022, 4, 25)
  let i = 0
  while (true)
    yield new Date(now.getFullYear(), now.getMonth() - 1, now.getDate() + i++).toLocaleDateString()
}

const today = genDay()
info.forEach((i) => { i.date = today.next().value as string })

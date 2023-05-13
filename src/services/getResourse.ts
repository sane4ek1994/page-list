export const getResourse = async (url: string) => {
  let res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Cloud not fetch ${url}, status: ${res.status}`)
  }

  return await res.json()
}

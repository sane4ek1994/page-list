export const getResourse = async (url: string) => {
  const res = await fetch(url)

  try {
    if (!res.ok) {
      throw new Error(`Cloud not fetch ${url}, status: ${res.status}`)
    }

    return await res.json()
  } catch (err) {
    console.log(err)
  }
}

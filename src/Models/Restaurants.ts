class Restaurants {
  id: number
  title: string
  image: string
  nota: number
  description: string
  infos: string[]

  constructor(id: number, title: string, image: string, nota: number, description: string, infos: string[]) {
    this.id = id,
    this.title = title,
    this.image = image,
    this.nota = nota,
    this.description = description,
    this.infos = infos
  }
}

export default Restaurants

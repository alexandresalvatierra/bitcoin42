export abstract class Entity<T> {
  protected _id: string
  public props: T

  constructor(props: T, id?: string) {
    this.props = props
    this._id = id!
  }

  get id() {
    return this._id
  }

  set id(id: string) {
    this._id = id
  }
}
import { randomUUID }  from 'node:crypto'

export type ITodo = {
  id: string;
  status: string;
  content: string;
};

export class Todo {
  public props: ITodo


  get id() {
    return this.props.id
  }

  get content() {
    return this.props.content
  }

  get status() {
    return this.props.status
  }

  constructor(
    todo: Omit<ITodo, 'id'>,
    id?: string,
  ) {
    id = id || randomUUID();

    this.props = { ...todo, id: id}
  }
}
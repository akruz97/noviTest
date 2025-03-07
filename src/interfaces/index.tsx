export interface ITodoItem {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface ICreateItem{
    title: string,
    body?: string,
    userId: number,
  }



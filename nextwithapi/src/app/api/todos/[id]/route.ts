import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

//extracting the params from dynamic route api/todos/11
type Props = {
  params: {
    id: string;
  };
};

export async function GET(req: Request, { params: { id } }: Props) {
  if (!id) {
    return NextResponse.json({ message: "Provide Id" });
  }

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const todo: any = await res.json();

  return NextResponse.json(todo);
}

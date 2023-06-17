import { NextResponse } from "next/server";
import { Request } from "next/dist/compiled/@edge-runtime/primitives";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);
  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
}

export async function PUT(req: Request) {
  //id
  const { id }: Partial<Todo> = await req.json();

  if (!id) {
    return NextResponse.json({ message: "id is missing" });
  }
  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "content-Type": "application/json",
      API_KEY: process.env.DATA_API_KEY!,
    },
  });

  return NextResponse.json({ message: `Todo ${id} is deleted` });
}

export async function POST(req: Request) {
  const { userId, todo } = await req.json();

  if (!userId || !todo) {
    return NextResponse.json({ message: "please provide all inputs" });
  }

  await fetch(DATA_SOURCE_URL, {
    method: "POST",
    body: JSON.stringify({ userId, todo }),
    headers: {
      "content-Type": "application/json",
    },
  });
  return NextResponse.json({ message: "Todo Is added", todo });
}

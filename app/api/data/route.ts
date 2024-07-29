import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.data.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}
export async function POST(request: Request) {
  const { id, phoneA, phoneB, pin, date, holder } = await request.json();

  try {
    const result = await prisma.data.create({
      data: {
        id,
        phoneA,
        phoneB,
        pin,
        date,
        holder,
      },
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.error();
  } finally {
    await prisma.$disconnect(); // Ensure Prisma Client disconnects
  }
}

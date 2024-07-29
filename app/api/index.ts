import { PrismaClient } from "@prisma/client";
import { IFormData } from "../../interfaces";

const prisma = new PrismaClient();

export async function prismaGet() {
  const data: IFormData[] = await prisma.data.findMany();
  console.warn(data);
  return data;
}

export async function prismaPost(data: IFormData) {
  await prisma.data.create({ data: data });
}

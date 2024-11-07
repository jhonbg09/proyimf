
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()

async function getCategories(){
  /* para traer todas las categorias */

  /* 
  Verifico que me estan llegando la informacion de la base de datos
  const categories = await prismaClient.category.findMany()
  console.log(categories) */

  return await prismaClient.category.findMany()
}
export default async function OrderSidebar() {
  const categories = await getCategories();
  console.log(categories)
  return (
    <aside className="md:w-72 md:h-screen bg-white">
        OrderSidebar
    </aside>);
}

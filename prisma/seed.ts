import { categories } from "./data/category";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try{
        await prisma.category.createMany({
            data: categories
        })
        await prisma.product.createMany({
            data: products
        })
    }catch(error){
        console.log(error)
    }
}

/* este archivo se debe llamar en el package.json */

main()
.then(async()=>{
    await prisma.$disconnect()
    .catch( async(e) =>{
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
})

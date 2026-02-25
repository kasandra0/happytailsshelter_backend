import prisma from "../lib/prisma.js";

export async function getAllInventoryCheckout() {
    return prisma.inventory_checkout.findMany();
}

export async function getInventoryCheckoutById(id: number) {
    return prisma.inventory_checkout.findUnique({
        where: { checkout_id: id },
    });
}

export async function createInventoryCheckout(data: any) {
    return prisma.inventory_checkout.create({
        data,
    });
}

export async function updateInventoryCheckoutById(id: number, data: any) {
    return prisma.inventory_checkout.update({
        where: { checkout_id: id }, data: data,
    });
}

export async function deleteInventoryCheckoutEntry(id: number) {
    return prisma.inventory_checkout.delete({
        where: { checkout_id: id },
    });
}
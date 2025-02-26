"use server";

import { prisma } from "@/db";
import { Prisma } from "@/db";

export const updateNoteAction = async (id, data: Prisma.NotePadUpdateInput) => {
    await prisma.notePad.update({
        where: {
            id,
        },
        data,
    });
};

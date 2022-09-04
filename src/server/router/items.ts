import { createRouter } from "./context";
import { z } from "zod";

export const itemsRouter = createRouter()
    .query("getAll", {
        async resolve({ ctx }) {
            return await ctx.prisma.item.findMany();
        }
    })
    .mutation("create", {
        input: z.object({
            name: z.string(),
            isBought: z.boolean(),
            isOnCart: z.boolean(),
        }),
        async resolve({ ctx, input }) {
            const item = await ctx.prisma.item.create({
                data: {
                    ...input
                }
            });
            return item;
        }
    })
    .mutation("update", {
        input: z.object({
            id: z.string(),
            name: z.string().optional(),
            isBought: z.boolean().optional(),
            isOnCart: z.boolean().optional(),
        }),
        async resolve({ ctx, input }) {
            const item = await ctx.prisma.item.update({
                where: {
                    id: input.id
                },
                data: {
                    ...input
                }
            });
            return item;
        }
    })
    .mutation("delete", {
        input: z.object({
            id: z.string(),
        }),
        async resolve({ ctx, input }) {
            const item = await ctx.prisma.item.delete({
                where: {
                    id: input.id
                }
            });
            return item;
        }
    });
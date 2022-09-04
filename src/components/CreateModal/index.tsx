import React from "react"
import { trpc } from "@/utils/trpc";

interface CreateModalProps {
    refetch: () => void;
}

export function CreateModal({refetch}: CreateModalProps) {
    
    const itemsCreate = trpc.useMutation("items.create");

    const [itemName, setItemName] = React.useState("");

    async function postItem() { 
        itemsCreate.mutate(
            { name: itemName, isBought: false, isOnCart: false },
            {onSuccess: () => refetch()}
        );

        setItemName("")
    }
  
    return<>
        <input
            className="text-zinc-800 bg-zinc-100 rounded-md p-2 m-2"
            type="text"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
            onKeyDown={(event) => {
                if (event.key === "Enter") {
                    postItem();
                }
            }}
        />
    </>
}
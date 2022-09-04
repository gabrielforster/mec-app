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
            className=""
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
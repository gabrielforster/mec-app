import Items from "@/interfaces/Items";
import { trpc } from "@/utils/trpc";

import { ShoppingCart, Trash } from "phosphor-react";

interface DashboardProps {
  isLoading: boolean;
  itemsData?: Items[];
  refetch: () => void;
}
export function Dashboard(props: DashboardProps) {
  const itemsCreate = trpc.useMutation("items.delete");
  const itemsUpdate = trpc.useMutation("items.update");

  async function handleDelete(id: string) {
    itemsCreate.mutate({ id: id }, { onSuccess: () => props.refetch() });
  }

  async function handleUpdateCartState(id: string, isOnCart: boolean) {
    console.log("sadjasbda", id);
    itemsUpdate.mutate(
      { id: id, isOnCart: !isOnCart },
      { onSuccess: () => props.refetch() }
    );
  }

  return (
    <section className="w-1/2">
      <ul className="mt-10">
        {props.itemsData?.map((item) => (
          <li key={item.id}>
            <div className="flex flex-row justify-around">
              <h3 className="text-xl font-bold w-2/3">{item.name}</h3>
              <div className="flex min-w-1/3">
                <ShoppingCart
                  size={28}
                  color={`${item.isOnCart ? "#af4343" : "#84b563"}`}
                  className="cursor-pointer"
                  onClick={() => handleUpdateCartState(item.id, item.isOnCart)}
                />
                <Trash
                  size={28}
                  color="#CD0A0A"
                  className="cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

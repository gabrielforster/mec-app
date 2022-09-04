import Items from "@/interfaces/Items"

interface DashboardProps {
    isLoading: boolean;
    data?: Items[];
}
export function Dashboard(props: DashboardProps) {
    return (
        <ul className="mt-10">
            {props.data?.map((item) => (
                <li key={item._id}>{item.name}</li>
            ))}
        </ul>
    )
}

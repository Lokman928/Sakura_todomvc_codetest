import ToDo from "../components/ToDo/ToDo";

export function ToDoPage() {
    return (
        <div className="w-full pt-8">
            <h1 className="text-center text-4xl font-bold">todoMVC</h1>
            <p className="text-center text-lg font-normal">
                By Thomas Kwan, For Sakura Nomad code test
            </p>
            <ToDo className="mt-3" />
        </div>
    );
}

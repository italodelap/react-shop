import { UserCard } from "./sections/users/UserCard";
import { useUsers } from "./sections/users/useUsers";

export function App() {
	const users = useUsers();

	return (
		<div className="App">
			<h3>⚡ ⚛️ Typescript & React Template</h3>
			<h2>Current users</h2>

			{users.map((user) => (
				<UserCard key={user.name} user={user} />
			))}
		</div>
	);
}

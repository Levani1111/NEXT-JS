function userList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <p>{user.address.city}</p>
          </div>
        );
      })}
    </>
  );
}

export default userList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
 

  return {
    props: { users: data },
  };
}

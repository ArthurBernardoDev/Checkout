async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function Home() {
 const name = await getData();
 console.log('teste', name.abilities[0].slot)
  return (
    <div>
      <p>{name.abilities[0].slot}</p>
    </div>
  );
}

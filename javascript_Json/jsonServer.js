// JSON From a Server
// আমরা fetch API এর মাধ্যমে server থেকে data নিয়ে আসতে পারি।

async function fetchData(){
  const response = await fetch("demo.txt");
  const data = await response.json();
  console.log(data);
}
fetchData();
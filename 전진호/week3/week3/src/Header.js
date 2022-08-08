export function Header({ name, age }) {
  return (
    <div>
      <h1>Hi, {name}</h1>
      {age > 20 ? <h2>age : {age}</h2> : <></>}
    </div>
  );
}

export const etc = "어쩌구";

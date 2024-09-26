function Greeting({ name, isLoggedIn }) {
  return (
    <div className="mx-auto text-white bg-black rounded-2xl px-5 py-2 mt-10 text-center w-1/2">
    
      {isLoggedIn ? <h2>Hello, {name}!</h2> : <h2>Welcom Back, {name}!</h2>}
    </div>
  );
}

export default Greeting;

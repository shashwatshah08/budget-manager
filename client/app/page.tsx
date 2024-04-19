export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="prose">
        <h1 className="whitespace-nowrap pt-10">
          Turn Your Money Frowns Upside Down!
        </h1>
        <h2 className="mt-5">What we offer:</h2>
        <ul className="list-inside list-none text-2xl">
          <li>
            <strong>Expense tracking:</strong> Our expense tracking feature
            keeps your spending in check, so you can splurge guilt-free on that
            extra cup of coffee! ☕️
          </li>
          <li>
            <strong>Data Visualization:</strong> Turn boring numbers into
            stunning visuals! 📊 Our data visualization tool makes graphs and
            charts so beautiful, you'll want to frame them on your wall! 😉
          </li>
          <li>
            <strong>Add Friends and Split Money:</strong> Friends who split
            bills together, stay together! Easily divide expenses with pals and
            never argue about who owes what again! 💸
          </li>
        </ul>
        <p className="mt-5 text-xl">
          Our current features will make you go <strong>WOW</strong> and guess
          what? We're cooking up even more magic to elevate your financial game!
          To unlock the full experience and get first dibs on our upcoming
          surprises, hit that signup button <strong>NOW</strong>!!
        </p>
      </div>
      <button className="btn btn-neutral mt-5 w-1/4 text-lg rounded-full transform transition duration-200 ease-in-out hover:scale-110">
        Sign up
      </button>
    </div>
  );
}

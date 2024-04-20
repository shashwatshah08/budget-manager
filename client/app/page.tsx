import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-[60%] h-full flex flex-col items-center justify-center">
        <div className="prose text-justify">
          <h1 className="whitespace-nowrap transform transition duration-500 ease-in-out hover:scale-110">
            Turn Your Money Frowns Upside Down!
          </h1>
          <h2 className="mt-5 transform transition duration-200 ease-in-out hover:scale-110">
            What we offer:
          </h2>
          <ul className="list-inside list-none text-xl space-y-4">
            <li className="transform transition duration-200 ease-in-out hover:scale-110">
              <strong>Expense tracking:</strong> Our expense tracking feature
              keeps your spending in check, so you can splurge guilt-free on
              that extra cup of coffee! ☕️
            </li>
            <li className="transform transition duration-200 ease-in-out hover:scale-110">
              <strong>Data Visualization:</strong> Turn boring numbers into
              stunning visuals! 📊 Our data visualization tool makes graphs and
              charts so beautiful, you'll want to frame them on your wall! 😉
            </li>
            <li className="transform transition duration-200 ease-in-out hover:scale-110">
              <strong>Add Friends and Split Money:</strong> Friends who split
              bills together, stay together! Easily divide expenses with pals
              and never argue about who owes what again! 💸
            </li>
          </ul>
          <p className="mt-5 text-xl transform transition duration-200 ease-in-out hover:scale-110">
            Our current features will make you go <strong>WOW</strong> and guess
            what? We're cooking up even more magic to elevate your financial
            game! To unlock the full experience and get first dibs on our
            upcoming surprises, hit that signup button <strong>NOW</strong>!!
          </p>
        </div>
        <button className="btn btn-neutral mt-5 w-1/4 text-lg rounded-full transform transition duration-200 ease-in-out hover:scale-110">
          Sign up
        </button>
        <p className="mt-2 transform transition duration-200 ease-in-out hover:scale-110">
          Already registered?
          <Link href="/login">
            <span className="ml-2 text-black hover:underline cursor-pointer font-bold">
              Login
            </span>
          </Link>
        </p>
      </div>
      <div className="w-2/5 h-full flex items-center justify-center mr-10">
        <div className="card bg-base-200 shadow-xl w-[80%] h-[60%] rounded-2xl transform transition duration-200 ease-in-out hover:scale-110">
          <img
            src="designer.svg"
            alt="designer"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

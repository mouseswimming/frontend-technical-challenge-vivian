import AccountRegister from "./components/AccountRegister";

function App() {
  return (
    <>
      <div className="grid justify-items-center">
        <h1 className="text-3xl font-bold text-brand-green">
          Account Registration Wizard
        </h1>
        <AccountRegister />
      </div>
    </>
  );
}

export default App;

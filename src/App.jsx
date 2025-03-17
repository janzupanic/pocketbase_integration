import { AuthProvider } from "./components/AuthProvider";
import { Router } from "@solidjs/router";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Error from "./pages/Error";


export default function App() {
  return (
    <AuthProvider>
      <Router root ={Layout}>
        <Route path="/" component = {Home} />
        <Route path="/signin" component = {Signin} />
        <Route path="/error" component = {Error} />
        <Route path="*" component = {() => <Navigate href="/error" /> } />



      </Router>
    </AuthProvider>
  );
}

function Layout(props) {
  return (
    <div>

<div>Zaglavlje</div>

<div>(props.children)</div>

<div>Podnožje</div>

</div>
  );
}

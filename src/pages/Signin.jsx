export default function Signin() {

  function formSubmit() { }

return (
    <>
            <div> </div>
       
        <form onSubmit={formSubmit}>
            <div class="p-2 flex flex-col gap-1">
                <label>E-mail:</label>
                <input type="email" name="email" required="true" />
            </div>

            <div class="p-2 flex flex-col gap-1">
                <label>Zaporka:</label>
                <input type="password" name="password" required="true" min="3" />
            </div>

            <div class="p-2 flex flex-col gap-1">
                <input type="submit" value="Pošalji" class="bg-slate-600 text-white p-2 rounded" />
            </div>
        
        </form>
    </>
);
}
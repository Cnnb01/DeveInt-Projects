const Admin = ()=>{
    return(
        <>
            <h1>Admin page woohoo!</h1>
        <form class="max-w-md mx-auto space-y-5 mt-4">
            <div class="max-w-md mx-auto">
                <label class="text-base text-slate-900 font-medium mb-3 block">Upload bnb picture</label>
                <input type="file" class="w-full text-slate-500 font-medium text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-slate-500 rounded" />
                <p class="text-xs text-slate-500 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
            </div>
            <div>
                <label class="mb-2 text-sm text-slate-900 font-medium block">County and country</label>
                <input type="name" placeholder="Nakuru, Kenya"
                class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
            </div>
            <div>
                <label class="mb-2 text-sm text-slate-900 font-medium block">Distance from their place</label>
                <input type="name" placeholder="16km"
                class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
            </div>
            <div>
                <label class="mb-2 text-sm text-slate-900 font-medium block">Title</label>
                <input type="name" placeholder="Private Villa"
                class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
            </div>
            <div>
                <label class="mb-2 text-sm text-slate-900 font-medium block">Pricing</label>
                <input type="name" placeholder="100,000"
                class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
            </div>

            <button type="button" class="!mt-8 px-6 py-2.5 text-sm font-medium bg-[#333] hover:bg-[#222] text-white rounded-sm">Submit</button>
        </form>
        </>
    )
}
export default Admin;
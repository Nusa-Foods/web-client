import RecipeCardDetail from "@/components/RecipeCardDetail";
import { RecipeType } from "@/type";
import { cookies } from "next/headers";

export default async function RecipeDetailPage({ params }: { params: { slug: string } }) {
    // console.log({ params }, 'params on product slug page>>>>')
    const cookie = cookies().get("Authorization")
    // console.log(cookie, 'cookie di slug>>')

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/recipe/${params.slug}`, {
        cache: 'no-store',
        credentials: 'include',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br, zstd',

            'Origin': 'http://localhost:3001, sec-fetch-site : same-site, sec-fetch-mode: cors, sec-fetch-dest: empty',

            'Referer': 'http://localhost:3001/,accept-encoding: gzip, deflate, br, zstd, accept-language: en-GB,en-US;q=0.9,en;q=0.8',

            'Cookie': `${cookie?.name}=${cookie?.value}`
        }
    });
    const recipe: RecipeType = await res.json()
    // console.log(recipe, 'page detail >>>')

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div>
                {/* Banner */}
                <div className="relative h-25 sm:h-32 md:h-48 lg:h-64 hidden md:block">
                    <img
                        src={recipe.bannerUrl}
                        alt={recipe.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-left p-4">
                        <h2 className="text-8xl font-bold text-white">
                            {recipe.title}
                        </h2>
                    </div>
                </div>

                {/* Main content */}
                <main className="flex-grow p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 justify-items-center">
                        <RecipeCardDetail recipeDetail={recipe} />
                    </div>
                </main>
            </div>
        </div>
    );
}

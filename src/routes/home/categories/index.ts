import { supabase } from "../../../services/supabase-client";

export type Category = {
  id: string;
  title: string;
};

export async function GET() {
  const { data: categories, error, count } = await supabase
    .from<Category>("categories")
    .select();



  if (error) {
    console.error(error);
    return {
      status: 500,
    };
  }

  console.info(count)

  return {
    status: 200,
    headers: {
      "access-control-allow-origin": "*",
    },
    body: {
      categories,
    },
  };
}

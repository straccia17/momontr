import type { RequestEvent } from "@sveltejs/kit";
import { supabase } from "../services/supabase-client";

type NewUser = {
  email?: string;
  password?: string;
};

export async function POST(e: RequestEvent) {
  const data = await e.request.formData();
  const userData: NewUser = Object.fromEntries(data);

  try {
    const { user } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
    });
    console.log(user);
  } catch (e) {
    console.error(e);
  }

  // if (errors) {
  //   // return validation errors
  //   return {
  //     status: 400,
  //     body: { errors }
  //   };
  // }

  // redirect to the newly created item
  return {
    status: 303,
    headers: {
      location: `/`,
    },
  };
}

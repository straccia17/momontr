import type { RequestEvent } from "@sveltejs/kit";
import { supabase } from "../services/supabase-client";

type UserCredential = {
  email?: string;
  password?: string;
};

export async function POST(e: RequestEvent) {
  const data = await e.request.formData();
  const userData: UserCredential = Object.fromEntries(data);

  try {
    await supabase.auth.signIn({
      email: userData.email,
      password: userData.password,
    });
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
      location: `/home`,
    },
  };
}

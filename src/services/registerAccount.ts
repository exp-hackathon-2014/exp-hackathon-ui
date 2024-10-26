export async function registerAccount(email: string, password: string) {
  console.log("registerAccount...");
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_API_URL}/api/auth/create-account`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }
  );

  if (!resp.ok) {
    throw new Error("An error occurred");
  }
}

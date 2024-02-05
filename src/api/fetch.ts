const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_DEV
    : process.env.NEXT_PUBLIC_API_PROD;

export const fetchInstance = async (url: string, options?: RequestInit) => {
  const response = await fetch(`${baseUrl}${url}`, options);

  let data;
  if (response.headers.get("Content-Type")?.includes("application/json")) {
    try {
      data = await response.json();
    } catch (error) {
      return { error: true };
    }
  }

  return data ? { data, status: response.status } : { status: response.status };
};

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_DEV
    : process.env.NEXT_PUBLIC_API_PROD;

export const fetchInstance = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(`${baseUrl}${url}`, options);
    const data = await response.json();

    return { data, status: response.status };
  } catch (error) {
    return { error: true };
  }
};

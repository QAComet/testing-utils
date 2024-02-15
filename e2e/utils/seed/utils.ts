function getUrl(path: string) {
  const baseUrl = process.env.CLIENT_API || "http://localhost:8040";
  const url = new URL(path, baseUrl);
  return url.toString();
}

export async function getCatagory() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}
export async function getNewsByCatagoryId(id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  const data = await res.json();
  return data.data;
}
export async function getNewsDetailsById(news_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
  );
  const data = await res.json();
  return data.data[0];
}
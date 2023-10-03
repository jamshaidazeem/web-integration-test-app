import { Items } from "@/utility/menus-mock-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const menuId = searchParams.get("id");
  const items = Items.find(
    (item) => item.mainMenuId === parseInt(menuId as string)
  );
  return Response.json({ data: items });
}

import HeaderBlog from "./_assets/components/HeaderBlog";

export default async function LayoutBlog({ children }: { children: any }) {
  return (
    <div>
      <HeaderBlog />

      <main className="min-h-screen max-w-6xl mx-auto p-8">{children}</main>
    </div>
  );
}
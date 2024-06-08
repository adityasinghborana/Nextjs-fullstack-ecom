import { Nav, NavLink } from "@/components/nav";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <>
    <Nav>
        <NavLink href="/admin">dashboard</NavLink>
        <NavLink href = "/admin/products">Product</NavLink>
        <NavLink href="/admin/users">Users</NavLink>
        <NavLink href="/admin/orders">Orders</NavLink>
    </Nav>
    <div  className=" container my-6">{children}</div>
    
    </>
  }
import { MenuItemProps } from "./MenuItem";

export const menuItems: Array<MenuItemProps> = [
    {
        labelId: "messages.Dashboad",
        path: "/dashboard"
    },
    {
        labelId: "messages.menuLayout",
        path: "/layout"
    },
    {
        labelId: "messages.orderHistory",
        path: "/history"
    },
    {
        labelId: "messages.bookingSystem",
        path: "/booking"
    },
    
    {
        labelId: "messages.profilePage",
        path: "/history",
        children: [
            {
                labelId: "messages.profilePage",
                path: "/profile"
            },
            {
                labelId: "messages.editProfile",
                path: "/edit"
            }
        ]
    }
]
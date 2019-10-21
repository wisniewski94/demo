const menu = [
  { _id: "5c03ff419f3e005410ea452c", title: "start", url: "/home" },
  {
    _id: "5c03ff419f3e005410ea452d",
    title: "ogrzewanie",
    url: "/ogrzewanie",
    submenu: [
      { title: "test", url: "/test" },
      { title: "test2", url: "/test2" }
    ]
  },
  { _id: "5c0400d99f3e005410ea452e", title: "prąd", url: "/prad" },
  { _id: "5c0400d99f3e005410ea452f", title: "o nas", url: "/o-nas" },
  { _id: "5c0400d99f3e005410ea4530", title: "kontakt", url: "/kontakt" },
  { _id: "5c042caa9f3e005410ea4531", title: "test", url: "/test" }
];

export function getMenuItems() {
  return menu;
}
